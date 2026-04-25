import React from "react";
import Child from "./Child";

function Parent({ user, login, logout }) {
  return (
    <div>
      <Child value={user} login={login} logout={logout} />
    </div>
  );
}

export default Parent;
