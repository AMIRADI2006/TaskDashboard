import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useTheme } from "../hooks/useTheme";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const { dark, setDark } = useTheme();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
      {/* {Btn dark Mode} */}
      <button
        className="absolute top-8 left-8 text-xl"
        onClick={() => setDark(!dark)}
      >
        {dark ? "🌝" : "🌚"}
      </button>
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center dark:text-white">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 dark:text-white">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl p-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 dark:text-white">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="****"
                className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl p-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 cursor-pointer hover:scale-150"
              >
                {showPassword ? (
                  <FaEyeSlash className="transition-all ease-in-out" />
                ) : (
                  <FaEye className="transition-all ease-in-out" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
