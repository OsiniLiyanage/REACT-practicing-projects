import React from "react";
import { useThemeStore } from "../../context/useThemeStore";
import "../../index.css";

//activity 3

function ThemeToggle() {
    //we can use any way we want..second nes easier to remembertho
  // const toggleTheme = useThemeStore(state => state.toggleTheme);

  const { toggleTheme } = useThemeStore();
  return (
    <div>
      <button className="btn" onClick={toggleTheme}>Toggle Mode</button>
      <br />
      <br />
    </div>
  );
}

export default ThemeToggle;