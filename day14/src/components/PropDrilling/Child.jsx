import React from "react";

function Child({ value, login, logout }) {
  return (
    <div>
      {value ? (
        <div>
          {/* chain validation */}
          <h3>Child User is : {value?.name} </h3>
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

export default Child;
