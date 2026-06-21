import { useTheme } from "../hooks/useTheme";

export default function Settings() {
  const { dark, setDark } = useTheme();

  return (
    <div>
      <p>Dark: {dark ? "true" : "false"}</p>

      <button
        onClick={() => setDark(!dark)}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}
