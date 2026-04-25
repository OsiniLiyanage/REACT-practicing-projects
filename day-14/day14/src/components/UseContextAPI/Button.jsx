import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Button() {
  const { buttonName } = useContext(UserContext);
  return (
    <div>
      this is button
      <button>{buttonName}</button>
    </div>
  );
}

export default Button;
