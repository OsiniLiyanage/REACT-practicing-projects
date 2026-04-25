import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../../index.css";

function Button() {
  const { buttonName } = useContext(UserContext);
  return (
    <div>
      <h2>Button</h2>
      
      <button className="btn">{buttonName}</button>
      <hr />
    </div>

  );
}



export default Button;
