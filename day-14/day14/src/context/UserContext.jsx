import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const buttonName = "Helloo"

  const login = () => {
    setUser({ name: "Ashan Herath", email: "ashan@gmail.com" });
  };

  const logout = () => setUser(null);
  return (
    <UserContext.Provider value={{ user, login, logout , buttonName}}>
      {children}
    </UserContext.Provider>
  );
};
