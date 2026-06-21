export const getTaskStatus = (dueDate) => {
  if (!dueDate) return null;

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const taskDate = new Date(dueDate);

  taskDate.setHours(0, 0, 0, 0);

  const diff = (taskDate - today) / (1000 * 60 * 60 * 24);

  if (diff < 0)
    return {
      text: "Overdue",
      color: "bg-red-100 text-red-700",
    };

  if (diff === 0)
    return {
      text: "Today",
      color: "bg-green-100 text-green-700",
    };

  if (diff === 1)
    return {
      text: "Tomorrow",
      color: "bg-yellow-100 text-yellow-700",
    };

  return {
    text: "Upcoming",
    color: "bg-gray-100 text-gray-700",
  };
};
