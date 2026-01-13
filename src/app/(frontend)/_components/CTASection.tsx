'use client'

export default function CTASection() {
  const handleBuyNow = () => {
    const el = document.getElementById('checkout')
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <section className="text-center py-12 pb-24 ">
      <h3 className="text-[2.5rem] font-semibold font-playfair">Ready to Elevate Your Style?</h3>
      <p className="text-md text-(--secondary) mb-4 mt-1">
        {' '}
        Limited stock available. Purchase now before the offer ends.{' '}
      </p>
      <button
        onClick={handleBuyNow}
        className="bg-[linear-gradient(135deg,var(--secondary),var(--accent))] text-white px-6 py-3 rounded-full text-xl mt-5 cursor-pointer enroll_Now"
      >
        Buy Now & Save Today
      </button>
    </section>
  )
}
