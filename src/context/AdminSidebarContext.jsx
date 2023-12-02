import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const AdminMenuContext = createContext({});

const AdminSidebarContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mode, setMode] = useState("light");
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <AdminMenuContext.Provider
      value={{
        activeTab,
        setActiveTab,
        mode,
        setMode,
        toggleNav,
        setToggleNav,
      }}
    >
      {children}
    </AdminMenuContext.Provider>
  );
};

AdminSidebarContext.propTypes = {
  children: PropTypes.element,
};

export const AdminMenuContextProvider = () => useContext(AdminMenuContext);

export default AdminSidebarContext;
