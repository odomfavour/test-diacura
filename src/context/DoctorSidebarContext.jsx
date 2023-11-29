import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const DoctorMenuContext = createContext({});

const DoctorSidebarContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mode, setMode] = useState("light");
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <DoctorMenuContext.Provider
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
  </DoctorMenuContext.Provider>
  )
}

DoctorSidebarContext.propTypes = {
  children: PropTypes.element,
};

export const DoctorsMenuContextProvider = () => useContext(DoctorMenuContext);

export default DoctorSidebarContext