import { Suspense } from 'react'
import PaymentFailedClient from './_components/PaymentFailedClient'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading payment...</div>}>
      <PaymentFailedClient />
    </Suspense>
  )
}
