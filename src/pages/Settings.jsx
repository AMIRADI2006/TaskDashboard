import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useTheme } from "../hooks/useTheme";
import { useTask } from "../hooks/useTask";

export default function Settings() {
  const { dark, setDark } = useTheme();

  const { setTasks } = useTask();

  const [taskReminder, setTaskReminder] = useState(
    JSON.parse(localStorage.getItem("taskReminder")) || false,
  );

  const [emailNotify, setEmailNotify] = useState(
    JSON.parse(localStorage.getItem("emailNotify")) || false,
  );

  useEffect(() => {
    localStorage.setItem("taskReminder", JSON.stringify(taskReminder));

    localStorage.setItem("emailNotify", JSON.stringify(emailNotify));
  }, [taskReminder, emailNotify]);

  const clearAllTasks = () => {
    const confirmDelete = window.confirm("Delete all tasks?");

    if (!confirmDelete) return;

    setTasks([]);

    toast.success("All tasks deleted");
  };

  const logout = () => {
    toast.success("Logged out");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Settings</h1>

      {/* Appearance */}

      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
        <h2 className="text-xl font-bold mb-5 dark:text-white">Appearance</h2>

        <div className="flex justify-between items-center">
          <span className="dark:text-white">Dark Mode</span>

          <button
            onClick={() => setDark(!dark)}
            className={`
              px-4 py-2 rounded-xl text-white
              ${dark ? "bg-green-600" : "bg-gray-500"}
            `}
          >
            {dark ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* Notifications */}

      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
        <h2 className="text-xl font-bold mb-5 dark:text-white">
          Notifications
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="dark:text-white">Task Reminder</span>

            <input
              type="checkbox"
              checked={taskReminder}
              onChange={() => setTaskReminder(!taskReminder)}
            />
          </div>

          <div className="flex justify-between">
            <span className="dark:text-white">Email Notifications</span>

            <input
              type="checkbox"
              checked={emailNotify}
              onChange={() => setEmailNotify(!emailNotify)}
            />
          </div>
        </div>
      </div>

      {/* Account */}

      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
        <h2 className="text-xl font-bold mb-5 dark:text-white">Account</h2>

        <div className="flex flex-col gap-3">
          <button className="bg-indigo-600 text-white py-3 rounded-xl">
            Change Password
          </button>

          <button
            onClick={logout}
            className="bg-orange-500 text-white py-3 rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Danger Zone */}

      <div className="bg-red-50 dark:bg-red-950 rounded-2xl p-6 shadow border border-red-300">
        <h2 className="text-xl font-bold text-red-600 mb-5">Danger Zone</h2>

        <button
          onClick={clearAllTasks}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
        >
          Delete All Tasks
        </button>
      </div>
    </div>
  );
}
