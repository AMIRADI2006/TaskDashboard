import { useTask } from "../hooks/useTask";

import DashboardStats from "../components/dashboard/DashboardStats";
import ProgressCard from "../components/dashboard/ProgressCard";
import RecentTasks from "../components/dashboard/RecentTasks";
import CategoryStats from "../components/dashboard/CategoryStats";
import HighPriorityTasks from "../components/dashboard/HighPriorityTasks";

export default function Dashboard() {
  const { tasks } = useTask();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const recentTasks = [...tasks].reverse().slice(0, 5);

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High" && !task.completed,
  );

  const categoryStats = tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1;

    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>

      <div className="grid xl:grid-cols-3 gap-6">
        {/* Main Content */}

        <div className="xl:col-span-2 space-y-6">
          <DashboardStats
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            pendingTasks={pendingTasks}
            progress={progress}
          />

          <CategoryStats categoryStats={categoryStats} />

          <HighPriorityTasks tasks={highPriorityTasks} />
        </div>

        {/*Right Sidebar */}
        <div className="space-y-6">
          <ProgressCard
            progress={progress}
            totalTasks={totalTasks}
            completedTasks={completedTasks}
          />

          <RecentTasks tasks={recentTasks} />
        </div>
      </div>
    </div>
  );
}
