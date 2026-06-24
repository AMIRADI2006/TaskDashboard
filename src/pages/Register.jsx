import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import { useTheme } from "../hooks/useTheme";

export default function Register() {
  const { dark, setDark } = useTheme();

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      toast.error("Full name is required");
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Minimum 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      toast.error("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      toast.error("Password is required");
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
      toast.error("Passwords do not match");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    toast.success("Account created successfully 🚀");

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
      {/* btn Dark Mode */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-8 left-8 text-xl"
      >
        {dark ? "🌝" : "🌚"}
      </button>

      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center dark:text-white">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Register to start managing your tasks
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-2 dark:text-white">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Amir mohammad"
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl p-3 outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 dark:text-white">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl p-3 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 ml-1">
                  {errors.password}
                </p>
              )}

              {/* btn Password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 dark:text-white">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl p-3 outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}

              {/* btn Password */}
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-4 cursor-pointer"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold cursor-pointer transition"
          >
            Create Account
          </button>
        </form>
        <p className="text-center mt-5 text-gray-500">
          Already have an account?
          <Link to="/" className="text-indigo-600 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
