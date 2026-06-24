export default function HighPriorityTasks({ tasks }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-5 dark:text-white">
        High Priority Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No high priority tasks</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="border-l-4 border-red-500 pl-4 py-2">
              <h4 className="font-semibold dark:text-white">{task.title}</h4>

              <p className="text-sm text-gray-500">
                {task.category ? task.category : "Other"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
