import { useState } from "react";
import "../index.css";


//activity 2

function DarkMode() {
  const [dark, setDark] = useState();

  const styles = {
    backgroundColor: dark ? "#000" : "#fff",
    height: "100vh",
  };

  function toggleMode() {
    setDark(!dark);
    toggleWord();
  }

 
  return (
    <div style={styles}>
      <h1>Hello Modes</h1>
      <button onClick={toggleMode}>Switch to {dark ? "Light" : "Dark"}</button>
    </div>
  );
}

export default DarkMode;