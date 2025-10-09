export default function Tasks() {
  const tasks = [
    { id: 1, name: "Landing Page Design", done: true },
    { id: 2, name: "Dashboard Builder", done: false },
    { id: 3, name: "Mobile App Design", done: false },
    { id: 4, name: "Promotional UI", done: true }
  ]
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Tasks</h3>
      <ul className="space-y-3">
        {tasks.map(t => (
          <li key={t.id} className="flex items-center gap-3">
            <input type="checkbox" checked={t.done} readOnly className="w-4 h-4" />
            <span className={t.done ? "line-through text-gray-400" : ""}>{t.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
