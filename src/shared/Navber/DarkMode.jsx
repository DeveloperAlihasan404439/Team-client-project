import { useEffect, useState } from "react";

import './DarkMode.css'
const DarkMode = () => {
  const [mode, setMode] = useState("light");
  const html = document.documentElement;
  const changeHeldelThime = () => {
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };
  useEffect(() => {
    const crrentMode = localStorage.getItem("mode") || "light";
    setMode(crrentMode);
    html.classList.add(crrentMode);
  }, []);
  return (
    <div onChange={changeHeldelThime} className="rounded-[50%] mr-5">
      <div className="toggle-border" title="Dark Mode">
        <input id="one" type="checkbox" />
        <label htmlFor="one">
          <div className="handle"></div>
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
