import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center space-y-4">
        <div className="text-6xl font-bold">404</div>
        <p className="text-gray-500 dark:text-gray-400">Page not found</p>
        <Link to="/" className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white">Go Home</Link>
      </div>
    </div>
  )
}
