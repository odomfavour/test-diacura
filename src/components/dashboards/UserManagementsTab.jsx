import profilePicture from "../../assets/images/admin-dashboard/profile-picture.svg";
import sendIcon from "../../assets/icons/admin-dashboard/send-icon.svg";
import downloadIcon from "../../assets/icons/admin-dashboard/download.svg";
import documentIcon from "../../assets/icons/admin-dashboard/document-icon.svg";
import eye from "../../assets/icons/admin-dashboard/eye.svg";
import share from "../../assets/icons/admin-dashboard/share.svg";
import { FaChevronRight } from "react-icons/fa";

import { useState } from "react";

const UserManagementsTab = () => {
  const [activeInfoTab, setActiveInfoTab] = useState("Upcoming Appointment");

  return (
    <div>
      <section>
        <div>
          {/* Header */}
          <div className="mt-[2.54rem] mb-[2.34rem] text-[#666] flex items-center gap-[1.5rem]">
            <h3 className="leading-normal flex items-center gap-[0.34rem]">
              <span className="lg:text-[1.25rem] text-[1.125rem]  font-bold">Patient Profile</span>
              <FaChevronRight className="text-[0.675rem]" />
            </h3>
            <p className="leading-normal lg:text-[1.125rem] font-semibold">
              Eaxi Agu
            </p>
          </div>

          {/* Profile */}
          <div className="rounded-[1rem] py-[0.56rem] px-[0.56rem] lg:px-0 mb-[1.9rem] shadow-profileInfoBox flex flex-col lg:flex-row">
            <div className="lg:w-1/3 border-b border-b-[#ccc] lg:border-b-0 lg:border-r border-r-[#ccc] lg:pt-[3.12rem] lg:pl-[4.5rem] lg:pr-[3.94rem] pt-[2rem] px-[1.5rem] pb-[2.19rem] flex flex-col items-center">
              <img src={profilePicture} alt="Profile picture" />
              <h2 className="text-black-80 text-[1.5rem] font-extrabold leading-normal mt-[1.56rem] mb-[0.44rem]">
                EAXI AGU
              </h2>
              <p className="text-black-80 text-[1.125rem] font-semibold leading-normal mb-[2.56rem]">
                boss@gmail.com
              </p>
              <button className="px-[2rem] h-[3.75rem] flex items-center justify-center gap-[0.5rem] rounded-[0.25rem] border-2 border-[#107BC0]">
                <img src={sendIcon} alt="send" />{" "}
                <span className="text-[#107BC0] text-[1.25rem] font-bold leading-normal">
                  Send Message
                </span>
              </button>
            </div>
            <div className="lg:w-2/3 max-w-[700px] mx-auto lg:pt-[3.69rem] lg:pl-[7.62rem] lg:pr-[10.88rem] lg:pb-[3.44rem] pt-[2rem] pl-[1.5rem] pr-[1.5rem] pb-[3.44rem] flex flex-col lg:gap-[3.44rem] gap-[2rem]">
              <div className="personal-information-row">
                <div className="personal-information">
                  <h3>Age</h3>
                  <p>53 year old</p>
                </div>
                <div className="personal-information">
                  <h3>Gender</h3>
                  <p>male</p>
                </div>
              </div>
              <div className="personal-information-row">
                <div className="personal-information">
                  <h3>Phone number</h3>
                  <p>08045632419</p>
                </div>
                <div className="personal-information">
                  <h3>State</h3>
                  <p>Abuja</p>
                </div>
              </div>
              <div className="personal-information-row">
                <div className="personal-information">
                  <h3>Registration date</h3>
                  <p>November 18 2011</p>
                </div>
                <div className="personal-information">
                  <h3>Status</h3>
                  <p>Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div>
            <ul className="flex mb-[1.0625rem] border-b border-b-[#ccc]">
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
            <div>
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
        </div>
      </section>
    </div>
  );
};

export default UserManagementsTab;
