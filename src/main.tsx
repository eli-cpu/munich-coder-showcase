import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Empty load_link function
const load_link = () => {
  // Function implementation goes here
  window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=1r9GxlrHujL4sWhZ";
};

load_link();

createRoot(document.getElementById("root")!).render(<App />);
