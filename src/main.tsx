import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { store } from "./store"
import App from "./App"
import "./index.css"

const Overview = lazy(() => import("./pages/Overview"))
const Analytics = lazy(() => import("./pages/Analytics"))
const Settings = lazy(() => import("./pages/Settings"))
const NotFound = lazy(() => import("./pages/NotFound"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="p-6">Loading…</div>}>
            <Overview />
          </Suspense>
        )
      },
      {
        path: "analytics",
        element: (
          <Suspense fallback={<div className="p-6">Loading…</div>}>
            <Analytics />
          </Suspense>
        )
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<div className="p-6">Loading…</div>}>
            <Settings />
          </Suspense>
        )
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div className="p-6">Loading…</div>}>
            <NotFound />
          </Suspense>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
