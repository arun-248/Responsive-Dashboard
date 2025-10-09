import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts"
import { useAppSelector } from "../hooks"

type Point = { name: string; value: number }
type BarDatum = { name: string; sales: number }
type PieDatum = { name: string; value: number }

export function LineChartCard() {
  const data = useAppSelector(s => (s as any).data.line as Point[])
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-80">
      <h3 className="mb-4 text-lg font-semibold">User Activity</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BarChartCard() {
  const data = useAppSelector(s => (s as any).data.bar as BarDatum[])
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-80">
      <h3 className="mb-4 text-lg font-semibold">Sales Data</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#22C55E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PieChartCard() {
  const data = useAppSelector(s => (s as any).data.pie as PieDatum[])
  const colors = ["#6366F1","#22C55E","#F59E0B","#EF4444"]
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-80">
      <h3 className="mb-4 text-lg font-semibold">User Demographics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {data.map((_, i: number) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
