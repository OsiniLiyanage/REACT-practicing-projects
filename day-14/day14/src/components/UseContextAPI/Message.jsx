import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Message() {
  const { user, login, logout } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <div>
          <h3>Hello {user.name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Message;
