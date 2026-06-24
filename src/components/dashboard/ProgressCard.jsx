export default function ProgressCard({ progress, totalTasks, completedTasks }) {
  const circumference = 283;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-6 dark:text-white">Progress</h2>

      <div className="relative flex justify-center">
        <svg width="220" height="120" viewBox="0 0 220 120">
          <path
            d="M20 100 A90 90 0 0 1 200 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="14"
          />

          <path
            d="M20 100 A90 90 0 0 1 200 100"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * progress) / 100}
          />
        </svg>

        <div className="absolute top-10 text-center">
          <h3 className="text-4xl font-bold dark:text-white">{progress}%</h3>

          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Tasks</span>

          <span className="font-medium dark:text-white">
            {completedTasks}/{totalTasks}
          </span>
        </div>

        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
