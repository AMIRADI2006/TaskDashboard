import { Toaster } from "react-hot-toast";
import { useTheme } from "../hooks/useTheme";

export default function ToastProvider() {
  const { dark } = useTheme();

  return (
    <Toaster
      position="bottom-left"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,

        style: {
          background: dark ? "#111827" : "#ffffff",
          color: dark ? "#ffffff" : "#111827",
          border: dark ? "1px solid #374151" : "1px solid #e5e7eb",
          borderRadius: "12px",
        },

        success: {
          iconTheme: {
            primary: "#10b981",
            secondary: "#fff",
          },
        },

        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}
