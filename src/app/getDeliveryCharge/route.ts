/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPayload } from '@/lib/payload'

export async function GET(req: Request) {
  //   const { searchParams } = new URL(req.url)

  const payload = await getPayload()

  const getDeliveryCharge: any = await payload.find({
    collection: 'delivery-charge',
    limit: 1,
  })

  const deliveryCharge = getDeliveryCharge.docs[0]?.deliveryCharge

  if (!deliveryCharge) {
    console.log('Delivery Charge not found', deliveryCharge)
    return Response.json({ error: 'Delivery Charge not found' }, { status: 404 })
  }

  console.log('response', deliveryCharge)

  return Response.json(deliveryCharge || null)
}
