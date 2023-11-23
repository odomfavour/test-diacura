import logo from "../../assets/icons/patients-kyc/logo.svg";
import { progressBar } from "../../utils/data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsePatientKycContext } from "../../context/PatientKycContext";

//Default form and form error values
const defaultDiagnosisDetails = {
  diagnosisDate: "",
  trackInsulin: "",
  insulinTherapy: "",
}

const defaultDiagnosisErrors = {
  diagnosisDate: false,
  trackInsulin: false,
  insulinTherapy: false,
}

const PatientsKycStepThree = () => {
  const [diabetesDiagnosisDetails, setDiabetesDiagnosisDetails] = useState(defaultDiagnosisDetails)
  const [formError, setFormError] = useState(defaultDiagnosisErrors);
  const { dispatch } = UsePatientKycContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()

    let validateForm = {};
    let isFormValidated = true;

    if (!diabetesDiagnosisDetails.diagnosisDate) {
      validateForm = { ...validateForm, diagnosisDate: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, diagnosisDate: false };
    }

    if (diabetesDiagnosisDetails.trackInsulin === "") {
      validateForm = { ...validateForm, trackInsulin: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, trackInsulin: false };
    }

    if (diabetesDiagnosisDetails.insulinTherapy === "") {
      validateForm = { ...validateForm, insulinTherapy: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, insulinTherapy: false };
    }
    setFormError(validateForm)

    if(isFormValidated) {
      dispatch({ type: "ADD_DIABETES_DIAGNOSIS_DETAILS", payload: diabetesDiagnosisDetails });
      navigate("/patients-kyc-step-four")
    }
    // validate form
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
              Step 3 of 6
            </h3>

            {/* steps progress bar */}
            <ul className="flex items-center justify-center gap-[2px]">
              {progressBar.map((step) => (
                <li
                  key={step.step}
                  className={`max-w-[8.1875rem] w-1/6 h-[0.9375rem] ${
                    step.step <= 3
                      ? "bg-primary-color-light-blue-300"
                      : "bg-[#CFE5F2]"
                  }`}
                ></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Date of Diabetes Diagnosis*/}
        <div className="max-w-[67.1875rem] mx-auto py-[2rem] px-[1.3rem] md:px-[1.5rem] lg:px-[3.75rem] md:py-[3rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
          {/* Form container */}
          <form  onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[1.5rem] md:gap-[3.5rem] mb-[1.38rem]">
              <div className="flex flex-col md:flex-row items-start gap-[1.5rem] lg:gap-[6.5rem]">
                <div className="max-w-[28.8125rem] w-full">
                  <label
                    htmlFor="diagnosisDate"
                    className="block text-primary-color-light-blue-300 text-[1.2rem] lg:text-[1.5rem] font-semibold leading-normal mb-[1.2rem] md:mb-[2rem]"
                  >
                    Date of Diabetes Diagnosis
                  </label>
                  <input
                    type="date"
                    id="diagnosisDate"
                    className={`w-full px-[0.75rem] py-[1rem] rounded-[0.5rem] ${formError.diagnosisDate ? " border border-red-600 " : ""}`}
                    value={diabetesDiagnosisDetails.diagnosisDate}
                    onChange={(e) => setDiabetesDiagnosisDetails({...diabetesDiagnosisDetails, diagnosisDate: e.target.value})}
                  />
                <span
                    className={`text-red-600 md:text-lg ${
                      formError.diagnosisDate ? "block" : "hidden"
                    }`}
                  >
                    Please enter date of Diabetes Diagnosis
                  </span>  
                </div>
                <div className="">
                  <label className="block text-primary-color-light-blue-300 text-[1.2rem] lg:text-[1.5rem] font-semibold leading-normal mb-[1.2rem] md:mb-[2.5rem]">
                    Do you track your insulin?
                  </label>
                  <div className="flex gap-[1.25rem]">
                    <div className={`w-[7.3125rem] md:w-[8.3125rem] h-[3rem] py-[1rem] px-[0.875rem] rounded-[0.625rem] bg-white flex items-center justify-between gap-[0.5] ${formError.trackInsulin ? "border border-red-600 " : ""}`}>
                      <input
                        type="radio"
                        id="yes"
                        name="trackInsulin"
                        className="w-[1.5rem] h-[1.5rem]"
                        onClick={() => setDiabetesDiagnosisDetails({...diabetesDiagnosisDetails, trackInsulin: true})}
                      />
                      <label htmlFor="yes" className="diabetes-type-label">
                        Yes
                      </label>
                    </div>
                    <div className={`w-[7.3125rem] md:w-[8.3125rem] h-[3rem] py-[1rem] px-[0.875rem] rounded-[0.625rem] bg-white flex items-center justify-between gap-[0.5] ${formError.trackInsulin ? "border border-red-600 " : ""}`}>
                      <input
                        type="radio"
                        id="no"
                        name="trackInsulin"
                        className="w-[1.5rem] h-[1.5rem]"
                        onClick={() => setDiabetesDiagnosisDetails({...diabetesDiagnosisDetails, trackInsulin: false})}
                      />
                      <label htmlFor="no" className="diabetes-type-label">
                        No
                      </label>
                    </div>
                  </div>
                  <span
                    className={`text-red-600 md:text-lg ${
                      formError.trackInsulin ? "block" : "hidden"
                    }`}
                  >
                    Select yes or no to track your insulin
                  </span> 
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-primary-color-light-blue-300 text-[1.2rem] lg:text-[1.5rem] font-semibold leading-normal mb-[1.2rem] md:mb-[2rem]"
                >
                  What is your insulin therapy?
                </label>
                <div className="flex flex-col gap-[1.25rem]">
                  <div className={`w-full max-w-[28.0625rem] px-[1rem] py-[0.85rem] md:px-[1.3rem] md:py-[1.3rem] lg:px-[3.125rem] lg:py-[1.5rem] rounded-[0.625rem] bg-white flex items-center justify-between gap-[0.5] ${formError.insulinTherapy ? "border border-red-600 " : ""}`}>
                    <label
                      htmlFor="penSyringes"
                      className="diabetes-type-label"
                    >
                      Pen / Syringes
                    </label>
                    <input
                      type="radio"
                      name="insulinTherapy"
                      id="penSyringes"
                      className="diabetes-type-radio-input"
                      onClick={() => setDiabetesDiagnosisDetails({...diabetesDiagnosisDetails, insulinTherapy: "Pen Syringes"})}
                    />
                  </div>
                  <div className={`w-full max-w-[28.0625rem] px-[1rem] py-[0.85rem] md:px-[1.3rem] md:py-[1.3rem] lg:px-[3.125rem] lg:py-[1.5rem] rounded-[0.625rem] bg-white flex items-center justify-between gap-[0.5] ${formError.insulinTherapy ? "border border-red-600 " : ""}`}>
                    <label htmlFor="pump" className="diabetes-type-label">
                      Pump
                    </label>
                    <input
                      type="radio"
                      name="insulinTherapy"
                      id="pump"
                      className="diabetes-type-radio-input"
                      onClick={() => setDiabetesDiagnosisDetails({...diabetesDiagnosisDetails, insulinTherapy: "Pump"})}
                    />
                  </div>
                  <div className={`w-full max-w-[28.0625rem] px-[1rem] py-[0.85rem] md:px-[1.3rem] md:py-[1.3rem] lg:px-[3.125rem] lg:py-[1.5rem] rounded-[0.625rem] bg-white flex items-center justify-between gap-[0.5] ${formError.insulinTherapy ? "border border-red-600 " : ""}`}>
                    <label htmlFor="noInsulin" className="diabetes-type-label">
                      No Insulin
                    </label>
                    <input
                      type="radio"
                      name="insulinTherapy"
                      id="noInsulin"
                      className="diabetes-type-radio-input"
                      onClick={() => setDiabetesDiagnosisDetails({...diabetesDiagnosisDetails, insulinTherapy: "No Insulin"})}
                    />
                  </div>
                </div>
                <span
                    className={`text-red-600 md:text-lg ${
                      formError.insulinTherapy ? "block" : "hidden"
                    }`}
                  >
                    Please select your insulin therapy.
                  </span>
              </div>
            </div>

            {/* buttons container */}
           <div className="flex justify-end items-center gap-[1rem]">
              <Link to={"/patients-kyc-step-two"}>
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

export default PatientsKycStepThree;
