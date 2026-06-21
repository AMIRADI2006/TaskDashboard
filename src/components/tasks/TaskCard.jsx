import { useState, useEffect, useRef } from "react";

import { getTaskStatus } from "../../utils/taskStatus";

export default function TaskCard({
  task,
  editingId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
  toggleTask,
  deleteTask,
}) {
  const status = getTaskStatus(task.dueDate);

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative grid grid-cols-2 items-start p-4 rounded-xl  shadow transition-all
      ${task.completed ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
    >
      {/* LEFT SIDE */}
      <div className="flex gap-3 items-start min-w-0">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          disabled={editingId === task.id}
          onChange={() => toggleTask(task.id)}
          className="
            accent-purple-600
             w-4 h-4 mt-1
             cursor-pointer
             disabled:cursor-not-allowed
             disabled:opacity-50"
        />

        <div className="flex-1 min-w-0">
          {editingId === task.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="
                border
                border-gray-300
                bg-transparent 
                p-2 
                rounded 
                w-full 
                outline-none 
                focus:border-2
                focus:border-indigo-500
                dark:border-gray-700 
                dark:text-white"
            />
          ) : (
            <>
              <p
                className={`text-sm sm:text-base font-semibold truncate ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {task.title}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 w-40 xl:w-80">
                {task.description}
              </p>
            </>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative ml-auto flex items-center gap-3 ">
        {/* Priority */}

        <div className="flex flex-col gap-3 items-center sm:flex-row md:flex-col lg:flex-row">
          {task.priority && !task.completed && (
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs mr-2 ${
                task.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : task.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
              }`}
            >
              {task.priority}
            </span>
          )}

          {status && (
            <span
              className={`flex items-center px-3 py-1 rounded-full text-xs whitespace-nowrap ${status.color}`}
            >
              <span className="hidden lg:inline">Status :</span>
              {status.text}
            </span>
          )}
        </div>
        {/* Category and dueDate*/}
        <div className="flex flex-col gap-3 items-center lg:flex-row">
          <span
            className={`px-3 py-1 rounded-full text-xs
          ${
            task.category === "Study"
              ? "bg-emerald-100 text-emerald-700"
              : task.category === "Work"
                ? "bg-yellow-200/40 text-yellow-700 dark:bg-yellow-200/80"
                : task.category === "Personal"
                  ? "bg-cyan-100 text-cyan-700"
                  : task.category === "Gym"
                    ? "bg-red-200/40 text-red-700 dark:bg-red-200"
                    : "bg-gray-200 text-gray-600"
          }`}
          >
            {task.category || "Other"}
          </span>
          {task.dueDate && (
            <span className="w-max text-xs text-gray-400">{task.dueDate}</span>
          )}
        </div>

        {/* Kbab Menu */}
        {!task.completed ? (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl px-2 dark:text-white"
            >
              ⋮
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden z-10">
                <button
                  onClick={() => {
                    startEdit(task);
                    setMenuOpen(false);
                  }}
                  className="
                  block
                  w-full
                  text-left
                  px-3 py-2
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                  dark:text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                    deleteTask(task.id);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Delete
                </button>

                {editingId === task.id && (
                  <button
                    onClick={() => {
                      saveEdit();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Save
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => {
              deleteTask(task.id);
              setMenuOpen(false);
            }}
            className="
            block w-fit text-left
             px-3 py-1 text-red-500
             rounded-xl text-2xl
              hover:bg-gray-100

               dark:hover:bg-gray-700"
          >
            🗑
          </button>
        )}
      </div>
    </div>
  );
}
