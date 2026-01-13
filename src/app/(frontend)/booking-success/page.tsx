import { Suspense } from 'react'
import BookingSuccess from './_components/BookingSuccess'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading payment...</div>}>
      <BookingSuccess />
    </Suspense>
  )
}
