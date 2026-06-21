import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="relative hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-64 h-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />

            <button
              className="
              absolute top-0 left-58 
              cursor-pointer font-bold text-3xl text-red-400 
              hover:text-red-700"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 dark:bg-gray-950">
        <Navbar setIsOpen={setIsOpen} />

        <main className="p-6 dark:bg-gray-950">{children}</main>
      </div>
    </div>
  );
}
