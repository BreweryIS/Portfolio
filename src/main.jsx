import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ResumeProvider from "./context/ResumeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ResumeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ResumeProvider>
);
