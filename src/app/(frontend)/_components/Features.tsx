export default function Features() {
  return (
    <section className="md:px-6 md:py-12  md:max-w-150 flex flex-col justify-center items-center gap-7">
      <div className="text-center">
        <h3 className="text-5xl font-playfair font-semibold mb-3">Premium Features</h3>
        <p className="text-md text-(--secondary) mb-6">Built for Comfort & Style</p>
      </div>
      <div className="md:w-130">
        <ul className="text-base textgray-600 space-y-5 mx-auto">
          <li>
            <span className="text-(--accent) mr-2">✔</span> 2/2 Honeycomb Rib Fabric
          </li>
          <li>
            <span className="text-(--accent) mr-2">✔</span> 100% Export Quality Material
          </li>
          <li>
            <span className="text-(--accent) mr-2">✔</span> No Color Fading, Guaranteed
          </li>
          <li>
            <span className="text-(--accent) mr-2">✔</span> GSM 320–350 Premium Thickness
          </li>
        </ul>
      </div>
    </section>
  )
}
