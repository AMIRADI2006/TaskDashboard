/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1781781518979,
            title: "study", 
            description: "test study",
            dueDate: "2026-06-19",
            category: "Study",
            priority: "",
            completed: false,
          },
          {
            id: 1781781545883,
            title: "work",
            description: "test work",
            dueDate: "2026-07-25",
            category: "Work",
            priority: "",
            completed: false,
          },
          {
            id: 1781781566339,
            title: "personal",
            description: "test personal",
            dueDate: "2026-06-20",
            category: "Personal",
            priority: "",
            completed: false,
          },
          {
            id: 1781781589315,
            title: "GYM",
            description: "test gym",
            dueDate: "2026-06-19",
            category: "Gym",
            priority: "",
            completed: false,
          },
          {
            id: 1781781617923,
            title: "Other",
            description: "test Other",
            dueDate: "2026-06-20",
            category: "",
            priority: "",
            completed: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ title, description, dueDate, category, priority }) => {
    if (!title.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
        dueDate,
        category,
        priority,
        completed: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle,
            }
          : task,
      ),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
