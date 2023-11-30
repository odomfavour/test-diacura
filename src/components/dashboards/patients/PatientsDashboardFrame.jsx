import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { PatientMenuContextProvider } from "../../../context/PatientSidebarContext";
import logo from "../../../assets/images/patient-dashboard/logo.svg";
import PatientDashboardTab from "./PatientDashboardTab";
import PatientSettingsTab from "./PatientSettingsTab";
import EducationTab from "./EducationTab";
import ChatTab from "./ChatTab";
import AppointmentsTab from "./AppointmentsTab";
import { HiBell, HiCalendar } from "react-icons/hi";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const PatientsDashboardFrame = () => {
  const { activeTab, toggleNav, setToggleNav } = PatientMenuContextProvider();
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F5]">
      <div className="lg:pt-[1.25rem] lg:pl-[1.25rem] lg:pb-[1rem] lg:pr-[2.88rem] md:px-[1rem]">
        {/* header */}
        <header>
          <div className="flex lg:justify-between items-center px-[1rem] md:pt-[1.19rem] md:pb-[0.75rem] md:pr-[2.5rem] md:pl-[1.88rem] py-[1.5rem] mb-[1rem] bg-white md:rounded-[1.25rem]">
            {/* mobile */}
            <div className="flex items-center gap-[0.5rem] lg:hidden">
              <FaBars
                className="text-xl cursor-pointer"
                onClick={() => setToggleNav(!toggleNav)}
              />
              <img src={logo} alt="Dia-cura Med logo" className="w-[120px]" />
            </div>

            {/* Desktop */}
            <h1 className="hidden lg:block text-[1.25rem] lg:text-[2.25rem] text-[#020D14] font-semibold leading-normal">
              {activeTab}
            </h1>
            {/* Search box */}
            <div className="flex items-center gap-[1rem] md:gap-[2rem] xl:gap-[4rem] ml-auto mr-[1.2rem] xl:m-0">
              <div
                className={`w-full xl:w-fit bg-white p-[1rem] xl:p-0 absolute right-0 z-20 xl:static ${
                  openSearch ? "top-0" : "-top-[30rem]"
                } rounded-[0.5rem] lg:rounded-none shadow-lg lg:shadow-none transition-all duration-500`}
              >
                <AiOutlineClose
                  className="text-xl cursor-pointer mb-5 xl:hidden ml-auto"
                  onClick={() => setOpenSearch(!openSearch)}
                />
                <div
                  className={`flex items-center gap-[0.5rem] w-full xl:w-[25.875rem] h-[3.5rem] py-[0.125rem] pl-[1.5rem] pr-[2rem] rounded-[1rem] border border-[#ccc]`}
                >
                  <FaMagnifyingGlass className="text-[20px] text-[#262626]" />
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search here..."
                    className="py-[1rem] px-[0.5rem] bg-transparent w-[90%] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center lg:gap-[3.5rem]">
              {/* Search icon mobile */}
              <div
                onClick={() => setOpenSearch(!openSearch)}
                className="xl:hidden"
              >
                <FaMagnifyingGlass className="text-[20px] text-[#0D67A0] mr-[0.3rem]" />
              </div>

              {/* Notifications */}
              <div className="relative flex w-[2.5rem] text-[#0D67A0] h-[3rem] items-center justify-center rounded-[0.5rem]">
                <HiBell className="text-[24px]" />
                <GoDotFill className="text-[0.75rem] absolute top-[0.4rem] right-[0.3rem]" />
              </div>
              <div className="relative flex w-[2.5rem] text-[#0D67A0] h-[3rem] items-center justify-center rounded-[0.5rem]">
                <HiChatBubbleOvalLeft className="text-[24px]" />
                <GoDotFill className="text-[0.75rem] absolute top-[0.4rem] right-[0.3rem]" />
              </div>
              <div className="relative flex w-[2.5rem] text-[#0D67A0] h-[3rem] items-center justify-center rounded-[0.5rem]">
                <HiCalendar className="text-[24px]" />
                <GoDotFill className="text-[0.75rem] absolute top-[0.4rem] right-[0.1rem]" />
              </div>
            </div>
          </div>

          {/* mobile */}
          <h1 className="lg:hidden mb-[1.5rem] px-[1rem] text-[1.25rem] text-[#020D14] font-semibold leading-normal">
            {activeTab}
          </h1>
        </header>

        {/* Frame */}
        <div className="px-[1rem] md:px-0">
          {activeTab === "Dashboard" && <PatientDashboardTab />}
          {activeTab === "Appointments" && <AppointmentsTab />}
          {activeTab === "Chat" && <ChatTab />}
          {activeTab === "Education" && <EducationTab />}
          {activeTab === "Settings" && <PatientSettingsTab />}
        </div>
      </div>
    </section>
  );
};

export default PatientsDashboardFrame;
