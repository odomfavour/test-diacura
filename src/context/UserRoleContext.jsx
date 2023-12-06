import { createContext, useState, useContext } from "react";

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
  const [role, setRole] = useState("DOCTOR");

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export default UserRoleContext;
