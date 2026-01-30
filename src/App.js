import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.classList.add("dark-mode");
  } else {
    setMode("light");
    document.body.classList.remove("dark-mode");
  }
};


  return (
    <>
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Welcome To Textify" />
      </div>
    </>
  );
}

export default App;
