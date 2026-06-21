import { useTask } from "../hooks/useTask";

export default function Dashboard() {
  const { tasks } = useTask();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const recentTasks = [...tasks].reverse().slice(0, 5);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
          <h3 className="text-gray-500 dark:text-white">Total Tasks</h3>

          <p className="text-4xl font-bold mt-3 dark:text-gray-200">
            {totalTasks}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
          <h3 className="text-gray-500 dark:text-white">Completed</h3>

          <p className="text-4xl font-bold mt-3 text-indigo-600 dark:text-green-700">
            {completedTasks}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
          <h3 className="text-gray-500 dark:text-white">Pending</h3>

          <p className="text-4xl font-bold mt-3 text-orange-500 dark:text-yellow-400">
            {pendingTasks}
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold dark:text-white">Progress</h2>

          <span className="font-bold dark:text-white">{progress}%</span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-500 "
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Recent Tasks */}

      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-5 dark:text-white">Recent Tasks</h2>

        {recentTasks.length === 0 ? (
          <p className="text-gray-500 dark:text-white">No tasks found.</p>
        ) : (
          <div className="space-y-3">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2"
              >
                <span
                  className={` dark:text-white ${task.completed ? "line-through" : ""}`}
                >
                  {task.title}
                </span>

                <span>{task.completed ? "✅" : "⭕"}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
