import MobileMenu from "./MobileMenu";
import { FaBell } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import Avatar from "./Avatar";

export default function Navbar({ setIsOpen }) {
  const { dark, setDark } = useTheme();

  const user = {
    name: "AmirMohammad",
  };
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

        <Avatar name={user.name} size="w-7 h-7" textSize="text-lg" />
      </div>
    </header>
  );
}
