import { NavLink } from "react-router-dom";
import { FaHome, FaTasks, FaUser, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl transition ${
      isActive
        ? "bg-indigo-600 text-white"
        : "hover:bg-gray-100 hover:scale-105 dark:hover:bg-gray-800 dark:text-gray-200"
    }`;

  return (
    <aside
      className="
        sticky top-0
        w-64 h-screen p-5
        bg-white text-gray-900 
        border-r-2 border-r-indigo-600/50
        dark:bg-gray-900 dark:text-gray-100 dark:border-r-gray-700"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">TaskFlow</h1>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        <NavLink to="/dashboard" className={linkClass}>
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink to="/tasks" className={linkClass}>
          <FaTasks />
          Tasks
        </NavLink>

        <NavLink to="/profile" className={linkClass}>
          <FaUser />
          Profile
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <FaCog />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
