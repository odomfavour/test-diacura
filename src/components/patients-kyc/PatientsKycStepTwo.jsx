import logo from "../../assets/icons/patients-kyc/logo.svg";
import { progressBar } from "../../utils/data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsePatientKycContext } from "../../context/PatientKycContext";

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

  const handleOtherDiabetesTypes = (e) => {
    setOtherDiabetesTypes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate form
    if (diabetesType === "") {
      setFormError({ ...formError, diabetesTypeError: true });
    } else if (diabetesType === "Others") {
      if (!DIABETES_TYPE_REGEX.test(otherDiabetesTypes)) {
        setFormError({ ...formError, otherDiabetesTypeError: true });
      } else {
        setFormError({ ...formError, otherDiabetesTypeError: false });
        dispatch({ type: "ADD_DIABETES_TYPE", payload: otherDiabetesTypes });
        navigate("/patients-kyc-step-three")
      }
    } else {
      setFormError({ ...formError, diabetesTypeError: false });
      dispatch({ type: "ADD_DIABETES_TYPE", payload: diabetesType });
      navigate("/patients-kyc-step-three")
    }
  };

  return (
    <section>
      <div className="bg-[#F6FCFF] py-[1.75rem] px-[1.5rem] md:pt-[1.75rem] md:pb-[6rem] md:px-[3.75rem] ">
        {/* Header */}
        <div>
          <div className="pb-[1.5rem] md:pb-[2.5rem]">
            <img src={logo} alt="Dia-cura Med logo" />
          </div>
          <div className="max-w-[70.8125] mx-auto mb-[2.69rem] md:mb-[4rem] text-center">
            <h3 className="text-[#020D14] text-[1.1rem] md:text-[1.5rem] font-semibold leading-normal mb-[1rem]">
              Step 2 of 6
            </h3>

            {/* steps progress bar */}
            <ul className="flex items-center justify-center gap-[2px]">
              {progressBar.map((step) => (
                <li
                  key={step.step}
                  className={`max-w-[8.1875rem] w-1/6 h-[0.9375rem] ${
                    step.step <= 2
                    ? "bg-primary-color-light-blue-300"
                      : "bg-[#CFE5F2]"
                  }`}
                ></li>
              ))}
            </ul>
          </div>
        </div>

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
            <div className="flex justify-end items-center gap-[1rem]">
              <Link to={"/patients-kyc-step-one"}>
                <button
                  type="button"
                  className="w-[10rem] h-[3rem] md:h-[3.5rem] rounded-[0.25rem] border border-primary-color-light-blue-300 text-primary-color-light-blue-300 font-bold text-[1.25rem] hover:text-white hover:bg-primary-color-light-blue-300 transition-all duration-300 ease-in-out outline-none"
                >
                  Back
                </button>
              </Link>
              <button
                type="submit"
                className="w-[10rem] h-[3rem] md:h-[3.5rem] rounded-[0.25rem] border border-primary-color-light-blue-300 text-white font-bold text-[1.25rem] bg-primary-color-light-blue-300 hover:text-primary-color-light-blue-300 hover:bg-transparent outline-none"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PatientsKycStepTwo;
