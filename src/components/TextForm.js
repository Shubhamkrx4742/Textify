import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");   // 🗑️ Clear text
  };

  const handleExtraSpaces = () => {
  let newText = text.split(/\s+/).join(" ");
  setText(newText);
};

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyClick = () => {
  navigator.clipboard.writeText(text);
  alert("Text copied to clipboard!");
};
const [mode, setMode] = useState("light");

const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "#121212";
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
  }
};


  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-4 p-4 textform-card">
        <h2 className="mb-3">{props.heading}</h2>

        {/* Textarea */}
        <textarea
          className="form-control modern-textarea"
          value={text}
          onChange={handleOnChange}
          rows="8"
          placeholder="Enter your text here..."
        ></textarea>

        {/* Buttons */}
        <div className="mt-3 d-flex align-items-center gap-2">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert To Uppercase
          </button>

          <button className="btn btn-secondary" onClick={handleLowClick}>
            Convert To Lowercase
          </button>

          {/* Dustbin Button */}
          <button className="btn btn-danger clear-btn" onClick={handleClearClick}>
            🗑
          </button>

          <button className="btn btn-success" onClick={handleCopyClick}>
  📋 Copy Text
</button>
<button className="btn btn-warning" onClick={handleExtraSpaces}>
  Remove Extra Spaces
</button>
        </div>
      </div>

      {/* Summary */}
      <div className="container my-4 p-4 textform-card">
        <h3>📊 Text Summary</h3>
        <p className="summary-text">
          {wordCount} words • {text.length} characters
        </p>
        <p>⏱ {0.008 * wordCount} Minutes read</p>
      </div>

      {/* Preview */}
      <div className="container my-4 p-4 textform-card">
        <h3>👀 Preview</h3>
        <p className="preview-box">{text || "Nothing to preview..."}</p>
      </div>
    </>
  );
}
