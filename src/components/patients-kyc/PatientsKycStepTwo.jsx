import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsePatientKycContext } from "../../context/PatientKycContext";
import PatientKYC from "../../layouts/PatientKYC";
import PatientsKycButtons from "./PatientsKycButtons";

const PatientsKycStepTwo = () => {
  const [diabetesType, setDiabetesType] = useState("");
  const [otherDiabetesTypes, setOtherDiabetesTypes] = useState("");
  const [formError, setFormError] = useState({
    diabetesTypeError: false,
    otherDiabetesTypeError: false,
  });
  const { dispatch } = UsePatientKycContext();
  const navigate = useNavigate();

  //Form validation regular expression
  const DIABETES_TYPE_REGEX = /^[a-zA-Z][a-zA-Z]{2,}$/;

  //Set other diabetics types not listed
  const handleOtherDiabetesTypes = (e) => {
    setOtherDiabetesTypes(e.target.value);
  };

  //Handle form submission and validate form data
  const handleSubmit = (e) => {
    e.preventDefault();

    if (diabetesType === "") {
      setFormError({ ...formError, diabetesTypeError: true });
    } else if (diabetesType === "Others") {
      if (!DIABETES_TYPE_REGEX.test(otherDiabetesTypes)) {
        setFormError({ ...formError, otherDiabetesTypeError: true });
      } else {
        setFormError({ ...formError, otherDiabetesTypeError: false });
        dispatch({ type: "ADD_DIABETES_TYPE", payload: otherDiabetesTypes });
        navigate("/patients-kyc-step-three");
      }
    } else {
      setFormError({ ...formError, diabetesTypeError: false });
      dispatch({ type: "ADD_DIABETES_TYPE", payload: diabetesType });
      navigate("/patients-kyc-step-three");
    }
  };

  return (
    <section>
      <PatientKYC current={2} heading={""}>
        {/* Diabetes Type */}
        <div className="max-w-[67.125rem] mx-auto py-[2rem] px-[1.3rem] md:px-[2rem] lg:px-[3.81rem] md:py-[5rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
          <h2 className="text-primary-color-light-blue-300 text-[1.2rem] md:text-[1.5rem] font-semibold leading-normal mb-[2rem] md:mb-[3.38rem]">
            Diabetes Type
          </h2>

          {/* Form container */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[1.5rem] md:gap-[2.62rem] mb-[2.5rem] md:mb-[5rem]">
              <div className="diabetes-type-input-row">
                <div
                  className={`diabetes-type-input-col ${
                    formError.diabetesTypeError ? "border border-red-600" : ""
                  }`}
                >
                  <label
                    htmlFor="type1Diabetes"
                    className="diabetes-type-label"
                  >
                    Type 1 diabetes
                  </label>
                  <input
                    type="radio"
                    className="diabetes-type-radio-input"
                    id="type1Diabetes"
                    name="diabetesType"
                    onClick={() => setDiabetesType("Type 1 diabetes")}
                  />
                </div>
                <div
                  className={`diabetes-type-input-col ${
                    formError.diabetesTypeError ? "border border-red-600" : ""
                  }`}
                >
                  <label
                    htmlFor="type2Diabetes"
                    className="diabetes-type-label"
                  >
                    Type 2 diabetes
                  </label>
                  <input
                    type="radio"
                    className="diabetes-type-radio-input"
                    id="type2Diabetes"
                    name="diabetesType"
                    onClick={() => setDiabetesType("Type 2 diabetes")}
                  />
                </div>
              </div>
              <div className="diabetes-type-input-row">
                <div
                  className={`diabetes-type-input-col ${
                    formError.diabetesTypeError ? "border border-red-600" : ""
                  }`}
                >
                  <label
                    htmlFor="impairedGlucoseTolerance"
                    className="diabetes-type-label"
                  >
                    Impaired glucose tolerance
                  </label>
                  <input
                    type="radio"
                    className="diabetes-type-radio-input"
                    id="impairedGlucoseTolerance"
                    name="diabetesType"
                    onClick={() =>
                      setDiabetesType("Impaired glucose tolerance")
                    }
                  />
                </div>
                <div
                  className={`diabetes-type-input-col ${
                    formError.diabetesTypeError ? "border border-red-600" : ""
                  }`}
                >
                  <label
                    htmlFor="gestationalDiabetes"
                    className="diabetes-type-label"
                  >
                    Gestational diabetes
                  </label>
                  <input
                    type="radio"
                    className="diabetes-type-radio-input"
                    id="gestationalDiabetes"
                    name="diabetesType"
                    onClick={() => setDiabetesType("Gestational diabetes")}
                  />
                </div>
              </div>
              <div className="diabetes-type-input-row">
                <div
                  className={`diabetes-type-input-col ${
                    formError.diabetesTypeError ? "border border-red-600" : ""
                  }`}
                >
                  <label htmlFor="others" className="diabetes-type-label">
                    Others
                  </label>
                  <input
                    type="radio"
                    className="diabetes-type-radio-input"
                    id="others"
                    name="diabetesType"
                    onClick={() => setDiabetesType("Others")}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="Please Specify"
                    className="w-full text-[#666] text-[1.1rem] md:text-[1.25rem] leading-normal px-[1rem] py-[0.85rem] md:px-[1.2rem] md:py-[1.3rem] lg:px-[3.125rem] lg:py-[1.5rem] bg-transparent border-b border-b-primary-color-light-blue-300 outline-none"
                    required={diabetesType === "Others"}
                    disabled={diabetesType !== "Others"}
                    value={otherDiabetesTypes}
                    onChange={handleOtherDiabetesTypes}
                  />
                  <span
                    className={`text-red-600 md:text-lg ${
                      formError.otherDiabetesTypeError ? "block" : "hidden"
                    }`}
                  >
                    Please enter a valid diabetes type
                  </span>
                </div>
              </div>
              <span
                className={`text-red-600 md:text-lg ${
                  formError.diabetesTypeError ? "block" : "hidden"
                }`}
              >
                Please select a valid diabetes type
              </span>
            </div>

            {/* buttons container */}
            <PatientsKycButtons previous={"patients-kyc-step-one"} />
          </form>
        </div>
      </PatientKYC>
    </section>
  );
};

export default PatientsKycStepTwo;
