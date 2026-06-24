export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 dark:text-gray-400">{title}</p>

          <h3 className="text-3xl font-bold mt-2 dark:text-white">{value}</h3>
        </div>

        <div className="text-3xl text-indigo-600">{icon}</div>
      </div>
    </div>
  );
}
