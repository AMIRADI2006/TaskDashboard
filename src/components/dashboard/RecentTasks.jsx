export default function RecentTasks({ tasks }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-5 dark:text-white">Recent Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3"
            >
              <div>
                <h4 className="font-medium dark:text-white">{task.title}</h4>

                <p className="text-sm text-gray-500">{task.category}</p>
              </div>

              <span>{task.completed ? "✅" : "⭕"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
