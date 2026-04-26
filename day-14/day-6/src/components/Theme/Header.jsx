import React from "react";
import { useThemeStore } from "../../context/useThemeStore";

function Header() {
  const { theme } = useThemeStore();
  return (
    <div>
      <h4>
        Current theme is : {theme} {theme == "light" ? "🌝" : "🌚"}
      </h4>
      
    </div>
  );
}

export default Header;