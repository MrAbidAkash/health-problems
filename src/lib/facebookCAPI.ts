/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/facebookCAPI.ts
import crypto from 'crypto'

// --- Core Hashing Function (CRITICAL) ---
function hashData(value: string): string {
  // 1. Normalize: trim, convert to lowercase
  const normalized = value.trim().toLowerCase()
  // 2. Hash using SHA-256
  return crypto.createHash('sha256').update(normalized).digest('hex')
}

// --- Helper to Build `user_data` Object ---
function buildUserData(
  customerInfo: {
    email?: string
    phone?: string
    gender?: 'm' | 'f'
    dateOfBirth?: string // Expect YYYYMMDD format
    firstName?: string
    lastName?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
    externalId?: string
  },
  request: any,
) {
  const userData: Record<string, string | string[]> = {}

  // Apply hashing to personal identifiers
  if (customerInfo.email) userData.em = hashData(customerInfo.email)
  if (customerInfo.phone) userData.ph = hashData(customerInfo.phone)
  if (customerInfo.gender) userData.ge = hashData(customerInfo.gender)
  if (customerInfo.dateOfBirth) userData.db = hashData(customerInfo.dateOfBirth)
  if (customerInfo.firstName) userData.fn = hashData(customerInfo.firstName)
  if (customerInfo.lastName) userData.ln = hashData(customerInfo.lastName)
  if (customerInfo.city) userData.ct = hashData(customerInfo.city)
  if (customerInfo.state) userData.st = hashData(customerInfo.state)
  if (customerInfo.zipCode) userData.zp = hashData(customerInfo.zipCode)
  if (customerInfo.country) userData.country = hashData(customerInfo.country)
  if (customerInfo.externalId) userData.external_id = hashData(customerInfo.externalId)

  // Add non-hashed parameters from the HTTP request
  userData.client_ip_address =
    request.ip || request.headers.get('x-forwarded-for')?.split(',')[0] || ''
  userData.client_user_agent = request.headers.get('user-agent') || ''
  // Read cookies for fbc and fbp (set by Facebook Pixel)
  userData.fbc = request.cookies.get('_fbc')?.value || ''
  userData.fbp = request.cookies.get('_fbp')?.value || ''

  return userData
}

// --- 1. Purchase Event Builder ---
export function buildPurchaseEvent(
  orderId: string,
  value: number,
  currency: string,
  customerInfo: Parameters<typeof buildUserData>[0],
  request: any,
) {
  const payload = {
    event_name: 'Purchase' as const,
    event_time: Math.floor(Date.now() / 1000),
    event_id: orderId, // Use your actual order ID for deduplication
    event_source_url: request.headers.get('referer') || '',
    action_source: 'website' as const,
    user_data: buildUserData(customerInfo, request),
    custom_data: {
      currency: currency,
      value: value,
      // Add other purchase-specific fields if available (e.g., contents, order_id)
      order_id: orderId,
    },
  }
  return payload
}

// --- 2. ViewContent Event Builder ---
export function buildViewContentEvent(
  contentId: string, // e.g., product ID
  customerInfo: Parameters<typeof buildUserData>[0],
  request: any,
) {
  const payload = {
    event_name: 'ViewContent' as const,
    event_time: Math.floor(Date.now() / 1000),
    event_id: `view_${contentId}_${Date.now()}`, // Create a unique view ID
    event_source_url: request.headers.get('referer') || '',
    action_source: 'website' as const,
    user_data: buildUserData(customerInfo, request),
    custom_data: {
      content_ids: [contentId],
      content_type: 'product',
      // You can add other fields like 'content_name', 'content_category'
    },
  }
  return payload
}

// --- 3. InitiateCheckout Event Builder ---
export function buildInitiateCheckoutEvent(
  checkoutId: string,
  numItems: number,
  customerInfo: Parameters<typeof buildUserData>[0] & { externalId: string }, // externalId is required for this event
  request: any,
) {
  const payload = {
    event_name: 'InitiateCheckout' as const,
    event_time: Math.floor(Date.now() / 1000),
    event_id: checkoutId,
    event_source_url: request.headers.get('referer') || '',
    action_source: 'website' as const,
    user_data: buildUserData(customerInfo, request), // externalId will be hashed inside
    custom_data: {
      num_items: numItems,
    },
  }
  return payload
}
