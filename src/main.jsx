import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import TaskProvider from "./context/TaskContext";
import ToastProvider from "./components/ToastProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <TaskProvider>
        <App />
        <ToastProvider />
      </TaskProvider>
    </AuthProvider>
  </ThemeProvider>,
);
