import { useAppSelector } from "../hooks"

type Activity = { id: string | number; message: string }

export default function ActivityFeed() {
  const feed = useAppSelector(s => (s as any).data.feed as Activity[])
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-80 overflow-y-auto">
      <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
      <ul className="space-y-3">
        {feed?.map((item: Activity) => (
          <li key={item.id} className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
            {item.message}
          </li>
        ))}
      </ul>
    </div>
  )
}
