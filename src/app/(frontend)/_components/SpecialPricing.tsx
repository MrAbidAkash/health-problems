import CountdownTimer from './CountDownTimer'

export default function SpecialPricing() {
  return (
    <section className="text-center py-10 w-full mx-auto">
      <h2 className="text-5xl font-serif font-playfair font-semibold mb-3">Special Pricing</h2>
      <p className="text-md text-(--secondary) mb-4">Limited Time Offer</p>

      <div className="mt-8 gap-3  bg-[linear-gradient(135deg,var(--danger),#ff6b6b)] text-white px-6 py-6 rounded-xl md:w-[600px] max-sm:mx-2 flex flex-col items-center mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <h2 className="text-3xl font-seibold font-playfair">⏳ Offer Ends In</h2>

        <CountdownTimer />
      </div>
    </section>
  )
}
