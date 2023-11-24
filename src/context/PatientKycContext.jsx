import { createContext, useContext, useReducer} from "react";
import PropTypes from "prop-types";
export const PatientKycStore = createContext();

const defaultPatientInfo = {
    personalInformation: {},
    diabetesType: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PERSONAL_INFORMATION":
            return {
                ...state, personalInformation: {...action.payload}
            }
        case "ADD_DIABETES_TYPE":
            return {
                ...state,
                diabetesType: action.payload
            }
        case "ADD_DIABETES_DIAGNOSIS_DETAILS":
          return {
            ...state,
            diabetesDiagnosisDetails: {...action.payload}
          }
        default:
            break;
    }
}

const PatientKycContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultPatientInfo);

  return (
    <PatientKycStore.Provider value={{dispatch, state}}>{children}</PatientKycStore.Provider>
  );
};

export const UsePatientKycContext = () => {
  return useContext(PatientKycStore);
};

PatientKycContext.propTypes = {
  children: PropTypes.node,
};
export default PatientKycContext;
