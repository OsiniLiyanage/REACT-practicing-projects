import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const buttonName = "Submit"

  const login = () => {
    setUser({ name: "Osini liyanage", email: "osini@gmail.com" });
  };

  const logout = () => setUser(null);
  return (
    
    <UserContext.Provider value={{ user, login, logout , buttonName}}>
      {children}
    </UserContext.Provider>
  );
};
