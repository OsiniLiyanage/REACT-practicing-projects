import React, { useState } from "react";

function Greeting({}) {
  const [login, setLogin] = useState(false);
  if (login) {
    return <h1>Welcome back!</h1>;
  }
  return (
    <div>
      <h1>Please log in</h1>
      <button onClick={() => setLogin(true)}>LogIn</button>
    </div>
  );
}

export default Greeting;
