import { useState } from "react"
import { Link } from "react-router-dom"

type Props = { onToggleTheme: () => void }

export default function Header({ onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  const notifications = [
    { id: 1, text: "New user registered" },
    { id: 2, text: "Server rebooted successfully" },
    { id: 3, text: "New sale: $120" }
  ]

  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 relative z-20">
      <div className="flex items-center gap-2 lg:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          ≡
        </button>
      </div>
      <div className="hidden lg:block font-bold text-lg">Dashboard</div>
      <div className="flex items-center gap-3 relative">
        <input
          aria-label="Search"
          placeholder="Search..."
          className="hidden md:block px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm outline-none"
        />
        <button
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm"
        >
          Theme
        </button>
        <div className="relative">
          <button
            aria-label="Notifications"
            onClick={() => setNotifOpen(!notifOpen)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700"
          >
            🔔
          </button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
              <div className="px-4 py-2 font-semibold border-b dark:border-gray-600">
                Notifications
              </div>
              <ul className="max-h-48 overflow-y-auto">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {n.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            aria-label="Profile menu"
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
          >
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
              A
            </span>
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Settings
              </Link>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 lg:hidden">
          <nav className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Overview
            </Link>
            <Link
              to="/analytics"
              className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Analytics
            </Link>
            <Link
              to="/settings"
              className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Settings
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
