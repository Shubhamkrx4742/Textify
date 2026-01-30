import React from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch({ mode, toggleMode }) {
  return (
    <div className={`toggle-container ${mode}`} onClick={toggleMode}>
      <div className="toggle-circle">
        {mode === "dark" ? "🌙" : "☀️"}
      </div>
    </div>
  );
}
