import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function CustomerHook() {
  const [name, setName] = useLocalStorage("", "");

  return (
    <div>
      <h6>Customer Hook Example 2</h6>
      <input
        type="text"
        placeholder="enter the name"
        onChange={(e) => setName(e.target.value)}
      />
      <h4>Entered name is: {name}</h4>
    </div>
  );
}

export default CustomerHook;
