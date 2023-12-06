import PatientKYC from "../../layouts/PatientKYC";
import PatientsKycButtons from "./PatientsKycButtons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsePatientKycContext } from "../../context/PatientKycContext";

const defaultErrors = {
  unit: false,
  anyAllergies: false,
};

const PatientsKycStepFour = () => {
  const [unit, setUnit] = useState("");
  const [allergies, setAllergies] = useState("");
  const [anyAllergies, setAnyAllergies] = useState("");
  const [formError, setFormError] = useState(defaultErrors);
  const { dispatch } = UsePatientKycContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let validateForm = {};
    let isFormValidated = true;

    if (unit === "") {
      validateForm = { ...validateForm, unit: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, unit: false };
    }

    if (anyAllergies === "") {
      validateForm = { ...validateForm, anyAllergies: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, anyAllergies: false };
    }
    setFormError(validateForm);

    const allergies_info = {
      blood_glucose_level: unit,
      have_allergies: anyAllergies,
      specify_allergies: allergies,
    };

    if (isFormValidated) {
      dispatch({
        type: "ADD_ALLERGIES_INFO",
        payload: { ...allergies_info },
      });
      navigate("/patients-kyc-step-five");
    }
  };

  return (
    <section>
      <PatientKYC current={4} heading={""}>
        <div className="max-w-[67.1875rem] mx-auto py-[2rem] px-[1.3rem] md:px-[1.5rem] lg:px-[3.75rem] md:py-[3rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
          {/* Form container */}
          <form onSubmit={handleSubmit}>
            <div className=" lg:flex  md:flex lg:gap-9  md:gap-9">
              <div className="  ">
                <p className="lg:text-[24px] text-[20px] text-[#107BC0] font-open-sans font-semibold">
                  {" "}
                  Blood glucose levels
                </p>

                {/* units */}
                <div className=" lg:flex  lg:mt-5  md:mt-5 mt-4">
                  <button
                    onClick={() => setUnit("mmol/L")}
                    type="button"
                    className={`lg:w-[231px]  w-[130px]  h-[35px] lg:h-[56px]  font-dm-sans font-medium text-[14px] ${
                      unit === "mmol/L"
                        ? "bg-[#107BC0] text-[#fff]"
                        : "bg-[#FFF] text-[#666]"
                    }`}
                    style={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "#FFFF",
                    }}
                  >
                    mmol/L
                  </button>
                  <button
                    onClick={() => setUnit("mg/dL")}
                    type="button"
                    className={`lg:w-[231px]  w-[130px]  h-[35px] lg:h-[56px]  font-dm-sans font-medium text-[14px] ${
                      unit === "mg/dL"
                        ? "bg-[#107BC0] text-[#fff]"
                        : "bg-[#FFF] text-[#666]"
                    }`}
                  >
                    mg/dL
                  </button>
                </div>
                <span
                  className={`text-red-600 md:text-lg ${
                    formError.unit ? "block" : "hidden"
                  }`}
                >
                  Please select your blood glucose level unit
                </span>
                <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px] md:mt-7 mt-3 font-open-sans font-semibold">
                  {" "}
                  Do you have allergies?
                </p>

                <div className="lg:mt-5 mt-4">
                  <button
                    type="button"
                    onClick={() => setAnyAllergies("yes")}
                    className={`lg:w-[231px] lg:h-[56px] w-[130px]  h-[35px]  text-[14px] font-dm-sans font-medium ${
                      anyAllergies === "yes"
                        ? "bg-[#107BC0] text-[#fff]"
                        : "bg-[#FFF] text-[#666]"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnyAllergies("no")}
                    className={`lg:w-[231px] lg:h-[56px] w-[130px]  h-[35px]  text-[14px] font-dm-sans font-medium ${
                      anyAllergies === "no"
                        ? "bg-[#107BC0] text-[#fff]"
                        : "bg-[#FFF] text-[#666]"
                    }`}
                  >
                    No
                  </button>
                </div>
                <span
                  className={`text-red-600 md:text-lg ${
                    formError.anyAllergies ? "block" : "hidden"
                  }`}
                >
                  Please select if you have allergies or not.
                </span>
              </div>
              {/* other units */}
              <div>
                <p className="lg:text-[24px] text-[#107BC0] lg:mt-0  md:mt-4 mt-4  lg:flex  lg:justify-center mx-auto font-open-sans  font-normal">
                  {" "}
                  Other units
                </p>
                <div className="lg:flex lg:mt-5 mt-4">
                  <button
                    onClick={() => setUnit("kg/cm")}
                    type="button"
                    className={`lg:w-[231px]  w-[130px]  h-[35px] lg:h-[56px]  font-dm-sans font-medium text-[14px] ${
                      unit === "kg/cm"
                        ? "bg-[#107BC0] text-[#fff]"
                        : "bg-[#FFF] text-[#666]"
                    }`}
                    style={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "#FFFF",
                    }}
                  >
                    METRIC (Kg, cm)
                  </button>
                  <button
                    onClick={() => setUnit("Lbs/inc")}
                    type="button"
                    className={`lg:w-[231px]  w-[130px]  h-[35px] lg:h-[56px]  font-dm-sans font-medium text-[14px] ${
                      unit === "Lbs/inc"
                        ? "bg-[#107BC0] text-[#fff]"
                        : "bg-[#FFF] text-[#666]"
                    }`}
                  >
                    US (Lbs, inc)
                  </button>
                </div>
                <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px] font-open-sans font-normal  md:mt-5 mt-5">
                  If yes, kindly specify
                </p>

                <div
                  className=" lg:w-[449px] lg:h-[75px] border-b-4 lg:mb-[50px] lg:mt-0 md:mt-[-18px] mt-[-10px]  md:mb-9 mb-5"
                  style={{ borderColor: "#107BC0" }}
                >
                  <input
                    className="lg:w-[423px] p-[20px] lg:h-[2px] lg:mt-5 md:mt-[5px] border-none outline-none"
                    type="text"
                    placeholder="please Specify"
                    disabled={anyAllergies === "yes" ? false : true}
                    onChange={(e) => setAllergies(e.target.value)}
                    value={allergies}
                    required={anyAllergies === "yes"}
                    style={{ backgroundColor: "rgba(207, 229, 242, 0.02)" }}
                  />
                </div>
              </div>
            </div>
            <PatientsKycButtons previous={"patients-kyc-step-three"} />
          </form>
        </div>
        {/* buttons container */}
      </PatientKYC>
    </section>
  );
};

export default PatientsKycStepFour;
