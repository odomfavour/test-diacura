import { createContext, useContext, useReducer} from "react";
import PropTypes from "prop-types";
export const PatientKycStore = createContext();

const defaultPatientInfo = {
    diabetes_type: "",
    diabetes_info: {},
    current_medications: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PERSONAL_INFORMATION":
            return {
                ...state, ...action.payload
            }
        case "ADD_DIABETES_TYPE":
            return {
                ...state,
                diabetes_type: action.payload
            }
        case "ADD_DIABETES_DIAGNOSIS_INFO":
          return {
            ...state,
            diabetes_info: {...action.payload}
          }
          case "ADD_ALLERGIES_INFO":
            return {
              ...state,
              diabetes_info: {...state.diabetes_info, ...action.payload}
            }
            case "ADD_CURRENT_MEDICATIONS":
              return {
                ...state,
                current_medications: [...action.payload]
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
  children: PropTypes.element,
};
export default PatientKycContext;
