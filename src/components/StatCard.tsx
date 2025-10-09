type Props = {
  title: string
  value: string
}

export default function StatCard({ title, value }: Props) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  )
}
