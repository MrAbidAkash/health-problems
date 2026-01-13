export default function LuxurySection() {
  return (
    <section className="px-6 py-20 pb-24 text-center max-w-[900px] mx-auto flex flex-col items-center">
      <span className="inline-block bg-(--accent) text-md px-6 font-semibold py-2 rounded-full mb-4">
        Crafted for Elegance
      </span>

      <h2 className="text-5xl font-serif mb-3">Luxury, Redefined</h2>

      <p className="text-md text-(--secondary) leading-relaxed">
        Luxury is not about being noticed — it’s about being remembered.
      </p>

      <div className="mt-5 flex flex-col gap-4 text-gray-600 text-base">
        <p>
          Introducing the <strong>Classic Premium Turtleneck</strong> — a refined essential that
          defines luxury in every thread.
        </p>

        <p>
          {' '}
          Elegance lives in the details. From premium fabric to flawless finishing, this turtleneck
          transforms ordinary moments into iconic style.
        </p>

        <p className="font-semibold text-black text-sm">
          If you want to make every moment exclusive and look unforgettable — this is the right
          choice for you.
        </p>
      </div>
    </section>
  )
}
