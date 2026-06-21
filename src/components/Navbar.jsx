import MobileMenu from "./MobileMenu";
import { FaBell } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export default function Navbar({ setIsOpen }) {
  const { dark, setDark } = useTheme();
  return (
    <header
      className="
      flex justify-between 
      border-b px-6 py-4 
      bg-white
     dark:bg-gray-900 dark:text-gray-100 dark:border-b-gray-700"
    >
      <div className="flex items-center gap-4">
        <MobileMenu setIsOpen={setIsOpen} />

        <h2 className="font-bold text-xl">Welcome Back 👋</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className=" text-xl" onClick={() => setDark(!dark)}>
          {dark ? "🌝" : "🌚"}
        </button>
        <FaBell />

        <img src="https://i.pravatar.cc/40" className="rounded-full" />
      </div>
    </header>
  );
}
