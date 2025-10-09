export default function CheckTable() {
  const rows = [
    { id: 1, name: "Project Alpha", status: "Active" },
    { id: 2, name: "Project Beta", status: "Pending" },
    { id: 3, name: "Project Gamma", status: "Completed" }
  ]
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Check Table</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id} className="border-b dark:border-gray-700">
              <td className="py-2">{row.id}</td>
              <td className="py-2">{row.name}</td>
              <td className="py-2">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
