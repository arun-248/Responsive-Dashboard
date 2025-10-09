export default function ComplexTable() {
  const rows = [
    { id: 1, name: "Alice", role: "Admin", email: "alice@example.com" },
    { id: 2, name: "Bob", role: "Editor", email: "bob@example.com" },
    { id: 3, name: "Charlie", role: "Viewer", email: "charlie@example.com" }
  ]
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-x-auto">
      <h3 className="mb-4 text-lg font-semibold">Complex Table</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Role</th>
            <th className="py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id} className="border-b dark:border-gray-700">
              <td className="py-2">{row.id}</td>
              <td className="py-2">{row.name}</td>
              <td className="py-2">{row.role}</td>
              <td className="py-2">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
