import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./css/output.css"
import CustomCursor from "./components/CustomCursor";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="relative">
      <CustomCursor />
      <App />
    </div>
  </React.StrictMode>
);
