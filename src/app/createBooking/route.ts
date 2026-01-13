import { getPayload } from '@/lib/payload'

function generateBookingId() {
  return Math.random().toString(36).substring(2, 9)
}

export async function POST(request: Request) {
  const payload = await getPayload()
  const body = await request.json()

  console.log('body', body)

  const { amount, payerReference, pricingId, size, customerInfo } = body

  const bookingId = generateBookingId()
  const merchantInvoiceNo = `INV_${Date.now()}`

  if (!bookingId) {
    return Response.json({ error: 'bookingId missing' }, { status: 400 })
  }

  // 1️⃣ Check if booking already exists (idempotent)
  const existing = await payload.find({
    collection: 'booking',
    where: {
      bookingId: {
        equals: bookingId,
      },
    },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    return Response.json({
      booking: existing.docs[0],
      alreadyCreated: true,
    })
  }

  // 2️⃣ Create booking
  const booking = await payload.create({
    collection: 'booking',
    data: {
      bookingId,
      product: '694c043b3c39fea58629ca3a',
      amount,
      paymentStatus: 'Pending',
      payerReference,
      merchantInvoiceNo,
      pricingId,
      user: customerInfo.phone,
      size,
      customerInfo,
    },
  })

  // console.log('booking', booking)

  return Response.json({
    booking,
    alreadyCreated: false,
  })
}
