import { useState } from "react";

import { useTask } from "../hooks/useTask";

import TaskCard from "../components/tasks/TaskCard";
import TaskForm from "../components/tasks/TaskForm";
import TaskSearchFilter from "../components/tasks/TaskSearchFilter";

export default function Tasks() {
  const { tasks, addTask, deleteTask, toggleTask, editTask } = useTask();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [newTask, setNewTask] = useState("");

  const [description, setDescription] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [category, setCategory] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [editText, setEditText] = useState("");

  const [priority, setPriority] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const searchMatch = task.title?.toLowerCase().includes(search.toLowerCase());

    const filterMatch =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed
          : !task.completed;

    const categoryMatch =
      categoryFilter === "all" ? true : task.category === categoryFilter;

    return searchMatch && filterMatch && categoryMatch;
  });

  const handleAddTask = () => {
    addTask({
      title: newTask,
      description,
      dueDate,
      category,
      priority,
    });

    setNewTask("");
    setDescription("");
    setDueDate("");
    setCategory("");
    setPriority("");
  };

  const startEdit = (task) => {
    setEditingId(task.id);

    setEditText(task.title);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;

    editTask(editingId, editText);

    setEditingId(null);

    setEditText("");
  };

  return (
    <div className="pb-20">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Tasks</h1>

      <TaskSearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        description={description}
        setDescription={setDescription}
        dueDate={dueDate}
        setDueDate={setDueDate}
        category={category}
        setCategory={setCategory}
        priority={priority}
        setPriority={setPriority}
        addTask={handleAddTask}
      />

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
            startEdit={startEdit}
            saveEdit={saveEdit}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
