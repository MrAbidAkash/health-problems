import { Suspense } from 'react'
import PaymentSuccessClient from './_components/PaymentSuccessClient'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading payment...</div>}>
      <PaymentSuccessClient />
    </Suspense>
  )
}
