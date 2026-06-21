export default function xTaskSearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  setCategoryFilter,
}) {
  return (
    <div
      className="flex flex-col mb-6 
     lg:flex-row lg:items-start lg:gap-4 lg:justify-between"
    >
      {/* Search and Filter */}
      <div
        className="flex flex-col gap-4 mb-6 flex-1
      sm:flex-row md:flex-col lg:flex-row lg:justify-between"
      >
        {/* Search box */}
        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          flex-1 p-3 rounded-xl
          border border-gray-300
          bg-white text-gray-900
          outline-none transition

          focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-500/20

          dark:bg-gray-900
          dark:border-gray-700
          dark:text-white
          dark:placeholder:text-gray-400
        "
        />

        {/* Filter btn */}
        <button
          onClick={() => setFilter("all")}
          className={`
          px-4 py-3 rounded-xl
          bg-indigo-50 text-indigo-700

          hover:bg-gray-200
          hover:text-gray-700
          transition

          dark:bg-gray-800
          dark:text-gray-200
          dark:hover:bg-gray-700
          dark:hover:text-gray-200
        ${filter === "all" && "bg-indigo-100 dark:bg-indigo-800"}`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`
          px-4 py-3 rounded-xl
          bg-indigo-50 text-indigo-700

          hover:bg-green-200
          hover:text-green-700
          transition

          dark:bg-green-900/30
          dark:text-green-400
          dark:hover:bg-green-900/50
        ${filter === "completed" && "bg-indigo-100 dark:bg-indigo-800"}`}
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={`
          px-4 py-3 rounded-xl
          bg-indigo-50 text-indigo-700

          hover:bg-yellow-200
          hover:text-yellow-700
          transition

          dark:text-yellow-400
          dark:hover:bg-yellow-900/50
        ${filter === "pending" ? "bg-indigo-100 dark:bg-indigo-800" : "dark:bg-yellow-900/30"}`}
        >
          Pending
        </button>
      </div>

      {/* CategoryFilter */}
      <select
        onChange={(e) => setCategoryFilter(e.target.value)}
        className=" 
          px-4 py-4 rounded-xl mb-3 outline-none
          bg-indigo-100 text-indigo-700

          hover:bg-gray-200
          hover:text-gray-700
          transition cursor-pointer

          dark:bg-gray-800
          dark:text-gray-200
          dark:hover:bg-gray-700
          dark:hover:text-gray-200 "
      >
        <option value="all">All Categories</option>

        <option value="Study">Study</option>

        <option value="Work">Work</option>

        <option value="Personal">Personal</option>

        <option value="Gym">Gym</option>
      </select>
    </div>
  );
}
