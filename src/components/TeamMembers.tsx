export default function TeamMembers() {
  const members = [
    { id: 1, name: "Adela Parkson", role: "Creative Director" },
    { id: 2, name: "Christian Mad", role: "Product Designer" },
    { id: 3, name: "Jason Statham", role: "UI Designer" }
  ]
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Team Members</h3>
      <ul className="space-y-3">
        {members.map(m => (
          <li key={m.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{m.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
