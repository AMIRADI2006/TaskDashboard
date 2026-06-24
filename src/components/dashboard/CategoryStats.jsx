export default function CategoryStats({ categoryStats }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-5 dark:text-white">Categories</h2>

      <div className="space-y-4">
        {Object.entries(categoryStats).map(([category, count]) => (
          <div key={category} className="flex justify-between items-center">
            <span className="dark:text-white">
              {category ? category : "Other"}
            </span>

            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              {count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
