import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Avatar from "../components/Avatar";

import { useTask } from "../hooks/useTask";

export default function Profile() {
  const { tasks } = useTask();

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState(() => ({
    name: localStorage.getItem("name") || "Amir Mohammad",
    email: localStorage.getItem("email") || "amir@example.com",
    role: "Frontend Developer",
    joinedAt: "2025-01-15",
  }));

  useEffect(() => {
    localStorage.setItem("name", user.name);

    localStorage.setItem("email", user.email);

    localStorage.setItem("avatar", avatar);
  }, [user, avatar]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image");

      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);

      toast.success("Profile photo updated");
    };

    reader.readAsDataURL(file);
  };

  const removeAvatar = () => {
    setAvatar("");

    localStorage.removeItem("avatar");

    toast.success("Photo removed");
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Profile</h1>

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow p-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar
              name={user.name}
              image={avatar}
              size="w-32 h-32"
              textSize="text-4xl"
            />

            <label
              className="
                absolute
                bottom-1
                right-1
                w-10
                h-10
                rounded-full
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                flex
                items-center
                justify-center
                cursor-pointer
                shadow-lg
              "
            >
              📷
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>

          <h2 className="text-2xl font-bold mt-5 dark:text-white">
            {user.name}
          </h2>

          <p className="text-gray-500">{user.email}</p>

          <span className="mt-3 px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            {user.role}
          </span>

          {avatar && (
            <button
              onClick={removeAvatar}
              className="mt-4 text-red-500 hover:text-red-600 cursor-pointer"
            >
              Remove Photo
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard title="Total Tasks" value={totalTasks} />

        <StatCard title="Completed" value={completedTasks} />

        <StatCard title="Pending" value={pendingTasks} />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow p-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold dark:text-white">
              Account Information
            </h3>

            <p className="text-gray-500 mt-2">Joined: {user.joinedAt}</p>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              px-6
              py-3
              rounded-xl
              cursor-pointer
            "
          >
            Edit Profile
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-5 dark:text-white">
              Edit Profile
            </h2>

            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
              placeholder="Full Name"
              className="
                w-full
                border
                dark:border-gray-700
                dark:bg-gray-800
                dark:text-white
                p-3
                rounded-xl
                mb-4
              "
            />

            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              placeholder="Email"
              className="
                w-full
                border
                dark:border-gray-700
                dark:bg-gray-800
                dark:text-white
                p-3
                rounded-xl
                mb-6
              "
            />

            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="
                  flex-1
                  bg-gray-300
                  dark:bg-gray-700
                  dark:text-white
                  py-3
                  rounded-xl
                  cursor-pointer
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  toast.success("Profile updated successfully");

                  setIsEditing(false);
                }}
                className="
                  flex-1
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  py-3
                  rounded-xl
                  cursor-pointer
                "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow">
      <h3 className="text-gray-500 dark:text-gray-400">{title}</h3>

      <p className="text-3xl font-bold mt-3 dark:text-white">{value}</p>
    </div>
  );
}
