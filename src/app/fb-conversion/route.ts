import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Utility function for proper SHA-256 hashing
function hashData(value: string): string {
  const normalized = value.trim().toLowerCase()
  return crypto.createHash('sha256').update(normalized).digest('hex')
}

function buildUserData(customerInfo: any, request: any) {
  const userData: Record<string, any> = {}

  // 🔐 Hashed PII fields (arrays)
  if (customerInfo.email) userData.em = [hashData(customerInfo.email)]

  if (customerInfo.phone) userData.ph = [hashData(customerInfo.phone)]

  if (customerInfo.name) userData.fn = [hashData(customerInfo.name)]

  if (customerInfo.firstName) userData.fn = [hashData(customerInfo.firstName)]

  if (customerInfo.lastName) userData.ln = [hashData(customerInfo.lastName)]

  if (customerInfo.city) userData.ct = [hashData(customerInfo.city)]

  if (customerInfo.state) userData.st = [hashData(customerInfo.state)]

  if (customerInfo.country) userData.country = [hashData(customerInfo.country)]

  if (customerInfo.zip) userData.zp = [hashData(customerInfo.zip)]

  if (customerInfo.address) userData.ct = [hashData(customerInfo.address)]

  // 🌐 Non-hashed web parameters
  userData.client_ip_address =
    request.ip || request.headers.get('x-forwarded-for')?.split(',')[0] || ''

  userData.client_user_agent = request.headers.get('user-agent') || ''

  // Facebook cookies (VERY IMPORTANT for match quality)
  userData.fbc = request.cookies.get('_fbc')?.value || undefined
  userData.fbp = request.cookies.get('_fbp')?.value || undefined

  return userData
}

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json() // Now receives corrected structure

    // console.log('🟡 [1] Data received FROM FRONTEND:', JSON.stringify(requestData, null, 2))

    const pixelId = process.env.FACEBOOK_PIXEL_ID
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

    // ... validation for pixelId and accessToken ...
    if (!pixelId || !accessToken) {
      return NextResponse.json(
        { error: 'Facebook API credentials not configured' },
        { status: 500 },
      )
    }

    // Build the final payload for Facebook's API
    // CORRECT: Build the final payload for Facebook's API
    const payload = {
      event_name: requestData.event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id: requestData.event_id,
      event_source_url: request.headers.get('referer') || '',
      action_source: 'website',
      user_data: buildUserData(requestData.customer_info || {}, request),
      custom_data: {
        currency: requestData.currency || 'BDT',
        value: requestData.value,
        // Include other custom fields here
        ...(requestData.custom_data || {}), // <-- custom_data should be merged here
      },
      // The test_event_code must be inside the same event object
      // test_event_code: 'TEST76797',
    }

    console.log('🔵 [2] Final payload TO FACEBOOK:', JSON.stringify(payload, null, 2))

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [payload], // The 'test_event_code' is NOT inside here.
          test_event_code: process.env.TEST_EVENT, // It should be here, at the root level.
        }),
      },
    )
    const result = await response.json()
    console.log('🟢 [3] Response FROM FACEBOOK:', result)
    return NextResponse.json(result)
  } catch (error) {
    console.error('CAPI Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send event',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
// export async function POST(request: NextRequest) {
//   try {
//     const eventData = await request.json()

//     console.log('eventData', eventData)

//     const pixelId = process.env.FACEBOOK_PIXEL_ID
//     const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

//     // Build the event payload based on your colleague's requirements
//     const payload = {
//       event_name: eventData.eventName || 'Purchase',
//       event_time: Math.floor(Date.now() / 1000),
//       event_id: eventData.eventId || `event_${Date.now()}`,
//       event_source_url: request.headers.get('referer') || '',
//       action_source: 'website',
//       user_data: buildUserData(eventData.customerInfo || {}, request),
//       custom_data: {
//         currency: eventData.currency || 'BDT',
//         value: eventData.value || 0,
//         // Add other custom data fields from your component
//         ...(eventData.customData || {}),
//       },
//     }

//     const response = await fetch(
//       `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ data: [payload] }),
//       },
//     )

//     const result = await response.json()
//     console.log('result', result)
//     return NextResponse.json(result)

// }
