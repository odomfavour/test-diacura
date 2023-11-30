import UserManagementProfile from "../../layouts/UserManagementProfile";
import downloadIcon from "../../assets/icons/admin-dashboard/download.svg";
import documentIcon from "../../assets/icons/admin-dashboard/document-icon.svg";
import { useState } from "react";

const ViewDoctorProfile = () => {
  const [activeInfoTab, setActiveInfoTab] = useState("Upcoming Appointment");
  const doctorProfile = {
    name: "Herbert Israel",
    email: "herbert_Israel@gmail.com",
    age: 38,
    gender: "male",
    phoneNumber: "08045632419",
    state: "Lagos",
    registrationDate: "October 18 2011",
    status: "Active",
    role: "Doctor",
  };

  return (
    <UserManagementProfile profile={doctorProfile}>
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
            onClick={() => setActiveInfoTab("Content")}
            className={`personal-information-tab ${
              activeInfoTab === "Content"
                ? "font-bold bg-[#ECF7FD] text-[#107BC0] border-b-[3px] border-b-[#107BC0]"
                : "text-[#999] font-normal"
            }`}
          >
            Content
          </li>
        </ul>
        
        {/* Frame */}
        <div className="min-w-[900px] ">
          {activeInfoTab === "Upcoming Appointment" && (
            <div className="flex flex-col gap-[1.0625rem]">
              <div className="pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC] w-full flex justify-between text-center">
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
                    Patient
                  </h3>
                  <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                    Isaac Odey
                  </p>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <img src={documentIcon} alt="Document" />
                  <p className="text-[1.125rem] text-[#666] font-semibold leading-normal">
                    Note
                  </p>
                </div>
              </div>

              <div className="pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC] w-full flex justify-between text-center">
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
                    Patient
                  </h3>
                  <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                    Zainab Azeez
                  </p>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <img src={documentIcon} alt="Document" />
                  <p className="text-[1.125rem] text-[#666] font-semibold leading-normal">
                    Note
                  </p>
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
          {activeInfoTab === "Content" && (
            <div className="flex flex-col gap-[1.0625rem]">
              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Content topic
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Solid principles: Diabetes
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Content type
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Article
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Author
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rubi
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Status
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Published
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Dated
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      11/16/2023 - 12:22
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center pl-[5.38rem] pr-[1.62rem] py-[0.62rem] bg-[#FAFBFC]">
                <div className="w-full flex justify-between text-center">
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Content topic
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Solid principles: Diabetes
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Content type
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Article
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Author
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Dr Rubi
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Status
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      Published
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] text-[#666] font-semibold leading-normal mb-[0.5rem]">
                      Dated
                    </h3>
                    <p className="text-[1.25rem] text-[#666] font-semibold leading-normal">
                      11/16/2023 - 12:22
                    </p>
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

export default ViewDoctorProfile;
