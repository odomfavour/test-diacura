import PatientKYC from "../../layouts/PatientKYC";
import PatientsKycButtons from "./PatientsKycButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UsePatientKycContext } from "../../context/PatientKycContext";

const PatientsKycStepFive = () => {
  const [medication1, setMedication1] = useState("");
  const [medication2, setMedication2] = useState("");
  const [medication3, setMedication3] = useState("");
  const [medication4, setMedication4] = useState("");
  const [medication5, setMedication5] = useState("");
  const [medication6, setMedication6] = useState("");
  const { dispatch } = UsePatientKycContext();

  const navigate = useNavigate();

  const onSubmitBtn = (e) => {
    e.preventDefault();
    const medicationsArray = [
      medication1,
      medication2,
      medication3,
      medication4,
      medication5,
      medication6,
    ];
    const validMedications = medicationsArray.filter(
      (medication) => medication.trim().length > 0
    );

    dispatch({
      type: "ADD_CURRENT_MEDICATIONS",
      payload: [...validMedications],
    });
    navigate("/patients-kyc-step-six")
  };

  return (
    <section>
      <PatientKYC current={5} heading={""}>
        <div className="max-w-[67.1875rem] mx-auto py-[2rem] px-[1.3rem] md:px-[1.5rem] lg:px-[3.75rem] md:py-[3rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
          {/* Form container */}
          <form onSubmit={onSubmitBtn}>
            <div className=" ">
              <p className="lg:text-[24px] text-[#107BC0] font-open-sans font-semibold">
                Current Medications
              </p>
              <p className="lg:text-[20px] md:text-[20px] text-[14px] text-[#107BC0] font-open-sans font-normal mt-3">
                List any medications you're currently taking.
              </p>

              <div className="lg:flex md:flex md:gap-[30px] flex  gap-4 lg:gap-[60px]">
                <div className="lg:flex lg:flex-col flex flex-col  gap-4">
                  <input
                    value={medication1}
                    onChange={(e) => setMedication1(e.target.value)}
                    className="mt-6 lg:w-[409px] md:w-[290px]  md:h-[44px] lg:h-[44px]  w-[139px] md:p-3 lg:p-2 rounded-md"
                    type="text"
                    placeholder="1"
                  />
                  <input
                    value={medication3}
                    onChange={(e) => setMedication3(e.target.value)}
                    className="mt-2 lg:w-[409px] md:w-[290px]   md:h-[44px]  lg:h-[44px]  w-[139px]  md:p-3 rounded-md lg:p-2"
                    type="text"
                    placeholder="3"
                  />
                  <input
                    value={medication5}
                    onChange={(e) => setMedication5(e.target.value)}
                    className="mt-2 lg:w-[409px] md:w-[290px]    md:h-[44px] lg:h-[44px]   w-[139px] md:p-3  rounded-md  lg:p-2"
                    type="text"
                    placeholder="5"
                  />
                </div>
                <div className="lg:flex lg:flex-col   flex flex-col  gap-4 lg:mb-[40px] mb-5">
                  <input
                    value={medication2}
                    onChange={(e) => setMedication2(e.target.value)}
                    className="mt-6 lg:w-[409px]  md:h-[44px]   md:w-[290px]  w-[139px] lg:h-[44px] md:p-3  rounded-md lg:p-2"
                    type="text"
                    placeholder="2"
                  />
                  <input
                    value={medication4}
                    onChange={(e) => setMedication4(e.target.value)}
                    className="mt-2 lg:w-[409px]  md:h-[44px]   md:w-[290px] w-[139px] lg:h-[44px] md:p-3  rounded-md lg:p-2"
                    type="text"
                    placeholder="4"
                  />
                  <input
                    value={medication6}
                    onChange={(e) => setMedication6(e.target.value)}
                    className="mt-2 lg:w-[409px]   md:h-[44px]  md:w-[290px] w-[139px] rounded-md  md:p-3 lg:h-[44px] lg:p-2"
                    type="text"
                    placeholder="6"
                  />
                </div>
              </div>
            </div>
            <PatientsKycButtons previous={"patients-kyc-step-four"} />
          </form>
        </div>
        {/* buttons container */}
      </PatientKYC>
    </section>
  );
};

export default PatientsKycStepFive;
