import PatientKYC from "../../layouts/PatientKYC";
import { useState } from "react";
import Modal from "./Modal";
import { UsePatientKycContext } from "../../context/PatientKycContext";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const PatientsKycStepSix = () => {
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState("");
  const [formError, setFormError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const { state } = UsePatientKycContext();
  const navigate = useNavigate();

  // Validate patients KYC information 
  const validatePatientKyc = async (data) => {
    try {
      const response = await axios.post(
        "/api/user/patient-kyc",
        {
          ...data,
        },
        {
          headers: {
            "Content-Length": "appliction/json",
          },
        }
      );
      if (response.status === 200) {
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);

      //Set response error if any
      setServerError(true)
      setServerErrorMessage(error.message)
    }
  };

  const toDashboard = () => {
    setShowModal(!showModal);
    navigate("/patient-dashboard");
  };

  const onSubmitBtn = (e) => {
    e.preventDefault();

    if (consent.toLowerCase().includes(state.last_name.toLowerCase())) {
      setFormError(false);
      validatePatientKyc(state);
      setConsent("");
    } else {
      setFormError(true);
    }

    // A Quickfix for navigating to dashboard, since I don't have time to understand your code
    setTimeout(() => {
      console.log("This will run after a 2-second delay");
      // Call the next function here
      toDashboard();
    }, 2000);
  };

  return (
    <section>
      <PatientKYC current={6} heading={""}>
        <div className="max-w-[67.1875rem] mx-auto py-[2rem] px-[1.3rem] md:px-[1.5rem] lg:px-[3.75rem] md:py-[3rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
       {/* Server response errors */}
        <p className={`${serverError ? "block" : "hidden"} text-xl font-semibold text-red-600 text-center`}>{serverErrorMessage}</p>
        
          {/* Form container */}
          <form onSubmit={onSubmitBtn}>
            <div className=" ">
              <p className="lg:text-[24px] font-semibold font-Open-sans text-[#107BC0]">
                Consent and Agreement
              </p>
              <p className="font-Open-sans font-normal lg:text-[20px] lg:mt-[20px]">
                {" "}
                I,{" "}
                <span className="text-[#107BC0]">
                  [
                  <input
                    value={consent}
                    onChange={(e) => setConsent(e.target.value)}
                    className="text-[#107BC0] outline-none"
                    type="text"
                    placeholder="Your Full name"
                    required
                  />
                  ]
                </span>
                , hereby consent to Diacura-Med’s terms and conditions. I
                understand that the information provided is confidential and
                will be used for the purpose of managing my diabetes related
                services.{" "}
              </p>
              <span
                className={`text-red-600 md:text-lg ${
                  formError ? "block" : "hidden"
                }`}
              >
                Please enter your full name above
              </span>
              <div className="lg:flex gap-2 lg:mt-[40px] font-Open-sans">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <p className="font-Opens-sans">
                  I agree to receive important notifications and updates via
                  email.
                </p>
              </div>
              <div className="lg:flex gap-2 lg:mt-[20px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <p className="font-Open-sans">
                  I agree to receive promotional materials related to diabetes
                  management products and services.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:justify-end">
              <button className="bg-[#107BC0] lg:w-[273px] lg:h-[56px] lg:mt-[60px]  lg:text-[20px] text-[#ffff] rounded font-Open-sans font-bold">
                Finish
              </button>
            </div>
          </form>
        </div>
      </PatientKYC>
      {showModal && <Modal showModal={showModal} toDashboard={toDashboard} />}
    </section>
  );
};

export default PatientsKycStepSix;
