export default function PromoCard() {
  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-sm flex flex-col justify-between h-full">
      <h3 className="text-lg font-semibold mb-2">Control card security in-app with a tap</h3>
      <p className="text-sm mb-4">Discover your card benefits with one tap.</p>
      <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium w-max">
        Learn More
      </button>
    </div>
  )
}
