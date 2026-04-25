import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Osini", email: "osini@gmail.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Hello {user.name} !</h3>
          <h4>Ur email is {user.email}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Login Here</h4>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
