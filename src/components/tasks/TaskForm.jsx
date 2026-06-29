import { FaCalendarAlt } from "react-icons/fa";
export default function TaskForm({
  newTask,
  setNewTask,
  description,
  setDescription,
  dueDate,
  setDueDate,
  category,
  setCategory,
  addTask,
  priority,
  setPriority,
}) {
  return (
    <div className="flex flex-col space-y-4 mb-6 ">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Task title..."
        maxLength={24}
        className="
          w-full p-3 rounded-xl
          border border-gray-300
          bg-white text-gray-900
          outline-none transition

          focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-500/20

          dark:bg-gray-900
          dark:border-gray-700
          dark:text-white
          dark:placeholder:text-gray-400"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
        className="
          w-full p-3 rounded-xl
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

      <div className="relative">
        <input
          // type="datetime-local
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="
          w-full p-3 rounded-xl
          border border-gray-300
          bg-white text-gray-900
          outline-none transition
          cursor-pointer

          focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-500/20

          dark:bg-gray-900
          dark:border-gray-700
          dark:text-white"
        />
        <FaCalendarAlt
          className="
          absolute 
          right-4 
          top-1/2 
          -translate-y-1/2 
          text-purple-500 
          pointer-events-none"
        />
      </div>
      <div className="flex justify-between">
        {/* {Select Categort} */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
          w-fit p-3 rounded-xl
          border border-gray-300
          bg-white text-gray-900
          outline-none transition cursor-pointer

          focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-500/20

          dark:bg-gray-900
          dark:border-gray-700
          dark:text-white"
        >
          <option value="">Select Category</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Gym">Gym</option>
        </select>
        {/* {Priority} */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="
          w-fit p-3 rounded-xl
          border border-gray-300
          bg-white text-gray-900
          outline-none transition cursor-pointer

          focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-500/20

          dark:bg-gray-900
          dark:border-gray-700
          dark:text-white"
        >
          <option value="">Select Priority</option>
          <option value={"Low"}>Low Priority</option>
          <option value={"Medium"}>Medium Priority</option>
          <option value={"High"}>High Priority</option>
        </select>
      </div>

      <button
        onClick={addTask}
        className="
          w-fit
          px-5 py-3 rounded-xl
          bg-indigo-600 text-white
          transition
          self-end

          hover:bg-indigo-700
          active:scale-95"
      >
        Add Task
      </button>
    </div>
  );
}
