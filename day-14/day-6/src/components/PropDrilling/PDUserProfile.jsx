import React, { useState } from "react";
import Parent from "./Parent";

function PDUserProfile() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Ashan", email: "ashandimanthalk@gmail.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <Parent user={user} login={login} logout={logout} />
    </div>
  );
}

export default PDUserProfile;
