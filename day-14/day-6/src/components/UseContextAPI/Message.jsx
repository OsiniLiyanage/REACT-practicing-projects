import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../../index.css";

function Message() {
  const { user, login, logout } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <div className="msgdiv">
          <h3>Hello {user.name}</h3>
          <button className="logout" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button className="login" onClick={login}>Login Here..</button>
        </div>
      )}
      <hr />
    </div>
  );
}

export default Message;
