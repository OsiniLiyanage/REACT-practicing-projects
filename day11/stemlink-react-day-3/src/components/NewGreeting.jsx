import React, { useState } from "react";

function NewGreeting({}) {
  const [login, setLogin] = useState(false);
  return (
    <h1>
      {login ? (
        "Welcome back!"
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={() => setLogin(true)}>LogIn</button>
        </div>
      )}
    </h1>
  );
}
export default NewGreeting;
