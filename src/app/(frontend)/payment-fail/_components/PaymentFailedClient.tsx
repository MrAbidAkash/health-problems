'use client'

// file: app/payment-success/page.tsx

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const PaymentFailedClient = () => {
  const searchParams = useSearchParams()
  const paymentId = searchParams.get('paymentID')
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center flex flex-col">
        <CheckCircle className="mx-auto mb-4 text-red-500" size={64} />
        <h1 className="text-3xl font-bold text-red-600 mb-2">Payment Failed!</h1>
        <p className="text-gray-600 mb-6">Your payment has been failed.</p>

        <div className="bg-red-100 text-red-800 py-2 px-4 rounded-full mb-6 inline-block">
          Payment ID: <br /> <span className="font-mono">{paymentId}</span>
        </div>

        <Link
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Go to page
        </Link>
      </div>
    </div>
  )
}

export default PaymentFailedClient
