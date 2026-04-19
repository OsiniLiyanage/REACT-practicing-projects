import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Ashan", email: "ashandimanthalk@gmail.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Hello {user.name}</h3>
          <h4>Your email is {user.email}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
