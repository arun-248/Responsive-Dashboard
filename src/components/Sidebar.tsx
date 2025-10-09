import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="hidden lg:block row-span-3 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="h-16 px-6 flex items-center text-lg font-semibold">Dashboard</div>
      <nav className="px-3 space-y-1">
        <NavLink to="/" className={({isActive})=>`block px-3 py-2 rounded-lg ${isActive?"bg-gray-200 dark:bg-gray-700":"hover:bg-gray-200 dark:hover:bg-gray-700"}`}>Overview</NavLink>
        <NavLink to="/analytics" className={({isActive})=>`block px-3 py-2 rounded-lg ${isActive?"bg-gray-200 dark:bg-gray-700":"hover:bg-gray-200 dark:hover:bg-gray-700"}`}>Analytics</NavLink>
        <NavLink to="/settings" className={({isActive})=>`block px-3 py-2 rounded-lg ${isActive?"bg-gray-200 dark:bg-gray-700":"hover:bg-gray-200 dark:hover:bg-gray-700"}`}>Settings</NavLink>
      </nav>
    </aside>
  )
}
