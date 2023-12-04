import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const PatientMenuContext = createContext({});


const PatientSidebarContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mode, setMode] = useState("light");
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <PatientMenuContext.Provider
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
  </PatientMenuContext.Provider>
  )
}

PatientSidebarContext.propTypes = {
  children: PropTypes.element,
};

export const PatientMenuContextProvider = () => useContext(PatientMenuContext);

export default PatientSidebarContext