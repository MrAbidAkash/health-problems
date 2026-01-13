export default function SizeChart() {
  return (
    <section className="px-6 py-24  max-w-200">
      <div className="text-center">
        <h3 className="text-5xl font-playfair text-center mb-3">Size Chart</h3>
        <p className="text-center mb-6 text-(--secondary)">
          Find your perfect fit before placing the purchase
        </p>
      </div>

      <div className="py-5">
        <p className="text-center mb-6 text-sm text-gray-600">
          Our <strong>Classic Premium Turtleneck</strong> is designed with a regular fit. Please
          check the measurements carefully. If you prefer a relaxed or loose fit, we recommend
          choosing one size up.
        </p>
      </div>

      <table className="w-[80%] text-md border borer-gray-100! mx-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-center">Size</th>
            <th className="border p-2 text-center">Bodu (Chest)</th>
            <th className="border p-2 text-center">Length</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-center">M</td>
            <td className="border p-2 text-center">38&quot;</td>
            <td className="border p-2 text-center">27&quot;</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">L</td>
            <td className="border p-2 text-center">40&quot;</td>
            <td className="border p-2 text-center">28&quot;</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">XL</td>
            <td className="border p-2 text-center">42&quot;</td>
            <td className="border p-2 text-center">29&quot;</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-10 text-gray-600 text-center text-sm">
        <p>⚠️ Measurement tolerance ±0.5 inch due to manual measurement.</p>
      </div>
    </section>
  )
}
