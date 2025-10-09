import { useState } from "react"

export default function Calendar() {
  const [selected, setSelected] = useState<number | null>(null)
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Calendar</h3>
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div
            key={day}
            onClick={() => setSelected(day)}
            className={`cursor-pointer flex items-center justify-center h-10 rounded-lg 
            ${selected === day ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700"}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}
