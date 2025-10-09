import { LineChartCard, BarChartCard, PieChartCard } from "../components/Charts"

export default function Analytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <LineChartCard />
      <BarChartCard />
      <PieChartCard />
    </div>
  )
}
