import { FaTasks, FaCheckCircle, FaClock, FaChartLine } from "react-icons/fa";

import StatCard from "./StatCard";

export default function DashboardStats({
  totalTasks,
  completedTasks,
  pendingTasks,
  progress,
}) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <StatCard title="Total Tasks" value={totalTasks} icon={<FaTasks />} />

      <StatCard
        title="Completed"
        value={completedTasks}
        icon={<FaCheckCircle />}
      />

      <StatCard title="Pending" value={pendingTasks} icon={<FaClock />} />

      <StatCard
        title="Progress"
        value={`${progress}%`}
        icon={<FaChartLine />}
      />
    </div>
  );
}
