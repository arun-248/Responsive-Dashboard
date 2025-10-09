import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./hooks"
import { setTheme, toggleTheme } from "./slices/themeSlice"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

function App() {
  const mode = useAppSelector((s) => s.theme.mode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setTheme(mode))
  }, [dispatch, mode])

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="min-h-screen grid lg:grid-cols-[260px_1fr] grid-rows-[64px_1fr_56px] bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Sidebar />
        <Header onToggleTheme={() => dispatch(toggleTheme())} />
        <main className="p-4 lg:p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
