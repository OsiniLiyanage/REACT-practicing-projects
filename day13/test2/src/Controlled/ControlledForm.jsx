import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="name"></label>
      <input
        type="text"
        placeholder="your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <h3>Your name is {name}</h3>
    </div>
  );
};

export default ControlledForm;