import UserManagementProfile from "../../layouts/UserManagementProfile";
import downloadIcon from "../../assets/icons/admin-dashboard/download.svg";
import documentIcon from "../../assets/icons/admin-dashboard/document-icon.svg";
import eye from "../../assets/icons/admin-dashboard/eye.svg";
import share from "../../assets/icons/admin-dashboard/share.svg";
import { useState } from "react";

const ViewPatientProfile = () => {
  const [activeInfoTab, setActiveInfoTab] = useState("Upcoming Appointment");
  const patientProfile = {
    name: "EAXI AGU",
    email: "boss@gmail.com",
    age: 53,
    gender: "male",
    phoneNumber: "08045632419",
    state: "Abuja",
    registrationDate: "November 18 2011",
    status: "Active",
    role: "Patient",
  };

  return (
    <UserManagementProfile profile={patientProfile}>
      <div className="overflow-auto w-full">
        {/* Tabs */}
        <ul className="min-w-[900px] flex mb-[1.0625rem] border-b border-b-[#ccc]">
          <li
            onClick={() => setActiveInfoTab("Upcoming Appointment")}
            className={`personal-information-tab ${
              activeInfoTab === "Upcoming Appointment"
                ? "font-bold bg-[#ECF7FD] text-[#107BC0] border-b-[3px] border-b-[#107BC0]"
                : "text-[#999] font-normal"
            }`}
          >
            Upcoming Appointment
          </li>
          <li
            onClick={() => setActiveInfoTab("Past Appointment")}
            className={`personal-information-tab ${
              activeInfoTab === "Past Appointment"
                ? "font-bold bg-[#ECF7FD] text-[#107BC0] border-b-[3px] border-b-[#107BC0]"
                : "text-[#999] font-normal"
            }`}
          >
            Past Appointment
          </li>
          <li
            onClick={() => setActiveInfoTab("Medical Record")}
            className={`personal-information-tab ${
              activeInfoTab === "Medical Record"
                ? "font-bold bg-[#ECF7FD] text-[#107BC0] border-b-[3px] border-b-[#107BC0]"
                : "text-[#999] font-normal"
            }`}
          >
            Medical Record
          </li>
        </ul>
        
        {/* Frame */}
        <div className="min-w-[900px] ">
          {activeInfoTab === "Upcoming Appointment" && (
            <div className="flex flex-col gap-[1.0625rem]">
              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[1.25rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      01 June 20
                    </h3>
                    <p className="text-[#666] leading-normal">9:00AM</p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Type
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Consultation
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Doctor
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rubi
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <img src={documentIcon} alt="Document" />
                    <p className="text-[1.125rem] text-[#666] font-semibold leading-normal">
                      Report
                    </p>
                  </div>
                </div>

                <div className="w-fit px-[2rem]">
                  <img src={downloadIcon} alt="Download" />
                </div>
              </div>

              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[1.25rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      01 June 20
                    </h3>
                    <p className="text-[#666] leading-normal">9:00AM</p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Type
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Consultation
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Doctor
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rubi
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <img src={documentIcon} alt="Document" />
                    <p className="text-[1.125rem] text-[#666] font-semibold leading-normal">
                      Report
                    </p>
                  </div>
                </div>

                <div className="w-fit px-[2rem]">
                  <img src={downloadIcon} alt="Download" />
                </div>
              </div>
            </div>
          )}
          {activeInfoTab === "Past Appointment" && (
            <div className="flex flex-col gap-[1.0625rem]">
              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[1.25rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      01 June 20
                    </h3>
                    <p className="text-[#666] leading-normal">9:00AM</p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Type
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Consultation
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Doctor
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rubi
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <img src={documentIcon} alt="Document" />
                    <p className="text-[1.125rem] text-[#666] font-semibold leading-normal">
                      Report
                    </p>
                  </div>
                </div>

                <div className="w-fit px-[2rem]">
                  <img src={downloadIcon} alt="Download" />
                </div>
              </div>

              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[1.25rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      01 June 20
                    </h3>
                    <p className="text-[#666] leading-normal">9:00AM</p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Type
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Consultation
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Doctor
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rubi
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <img src={documentIcon} alt="Document" />
                    <p className="text-[1.125rem] text-[#666] font-semibold leading-normal">
                      Report
                    </p>
                  </div>
                </div>

                <div className="w-fit px-[2rem]">
                  <img src={downloadIcon} alt="Download" />
                </div>
              </div>
            </div>
          )}
          {activeInfoTab === "Medical Record" && (
            <div className="flex flex-col gap-[1.0625rem]">
              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Medical Problem
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Type 1
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Specialty
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Diabetes mellitus
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Doctor
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rubi
                    </p>
                  </div>
                  <div className="flex items-center gap-[1.5rem]">
                    <button type="button">
                      <img src={documentIcon} alt="Document" />
                    </button>
                    <button type="button">
                      <img src={eye} alt="View" />
                    </button>
                    <button type="button">
                      <img src={share} alt="Share" />
                    </button>
                    <button type="button">
                      <img src={downloadIcon} alt="Download" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Medical Problem
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Type 1
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Specialty
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Diabetes mellitus
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Doctor
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rodo
                    </p>
                  </div>
                  <div className="flex items-center gap-[1.5rem]">
                    <button type="button">
                      <img src={documentIcon} alt="Document" />
                    </button>
                    <button type="button">
                      <img src={eye} alt="View" />
                    </button>
                    <button type="button">
                      <img src={share} alt="Share" />
                    </button>
                    <button type="button">
                      <img src={downloadIcon} alt="Download" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </UserManagementProfile>
  );
};

export default ViewPatientProfile;
