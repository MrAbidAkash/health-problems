export default function ParcelInfo() {
  return (
    <section className="px-6 py-20  rounded-xl mx-6 w-full ">
      <div className="text-center">
        <h2 className="text-5xl mb-4 font-playfair ">Parcel Information</h2>
      </div>
      <div className="bg-white borer text-sm p-5 py-10 rounded-xl w-[95%] mx-auto min--40 flex flex-col gap-5 justify-center border-(--accent) border-l-6">
        <p>
          <strong>Parcel all over Bangladesh — 50৳ BDT advance (Delivered by Steadfast)</strong> –
        </p>
        <p>Please inspect the product carefully while the parcel person is still present.</p>
        <p>
          If you find any defects or issues with the product, it will be replaced and sent again.
        </p>
        <p>
          <strong>Note:</strong> The parcel is not returnable after the parcel person leaves.
          However, you can exchange the product within <strong>24 hours</strong>.
        </p>
      </div>
    </section>
  )
}
