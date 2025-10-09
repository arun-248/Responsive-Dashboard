import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { fetchMock } from "../slices/dataSlice"
import StatCard from "../components/StatCard"
import { LineChartCard, BarChartCard, PieChartCard } from "../components/Charts"
import ActivityFeed from "../components/ActivityFeed"
import CheckTable from "../components/CheckTable"
import ComplexTable from "../components/ComplexTable"
import Calendar from "../components/Calendar"
import Tasks from "../components/Tasks"
import TeamMembers from "../components/TeamMembers"
import PromoCard from "../components/PromoCard"

export default function Overview() {
  const dispatch = useAppDispatch()
  const status = useAppSelector((s) => s.data.status)
  const error = useAppSelector((s) => s.data.error)

  useEffect(() => {
    dispatch(fetchMock())
    const id = setInterval(() => dispatch(fetchMock()), 5000)
    return () => clearInterval(id)
  }, [dispatch])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {status === "loading" && (
        <div className="lg:col-span-4 text-sm text-gray-500">
          Refreshing data…
        </div>
      )}
      {status === "failed" && (
        <div className="lg:col-span-4 text-sm text-red-500">{error}</div>
      )}

      <StatCard title="Earnings" value="$350.04" />
      <StatCard title="Spend this Month" value="$682.5" />
      <StatCard title="Sales" value="$574.34" />
      <StatCard title="Balance" value="$1000" />

      <div className="lg:col-span-2">
        <LineChartCard />
      </div>
      <div className="lg:col-span-2">
        <BarChartCard />
      </div>

      <CheckTable />
      <PieChartCard />
      <ComplexTable />
      <ActivityFeed />

      <Tasks />
      <Calendar />
      <TeamMembers />
      <PromoCard />
    </div>
  )
}
