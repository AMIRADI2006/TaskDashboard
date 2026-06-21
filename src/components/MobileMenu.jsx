import { FaBars } from "react-icons/fa";

export default function MobileMenu({ setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(true)} className="md:hidden">
      <FaBars size={22} />
    </button>
  );
}
