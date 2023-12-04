import { PatientMenuContextProvider } from "../../../context/PatientSidebarContext";
import { TbLayoutGrid } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import {
  HiOutlineCog,
  HiClipboardCheck,
  HiBookOpen,
  HiChat,
} from "react-icons/hi";
import logo from "../../../assets/images/patient-dashboard/dashboard-logo.svg";
import logout from "../../../assets/icons/patient-dashboard/logout.svg";

const PatientsDashboardSideBar = () => {
  const { activeTab, setActiveTab, toggleNav, setToggleNav } =
    PatientMenuContextProvider();
  return (
    <aside className="relative">
      {/* Side bar */}
      <div
        className={`w-[18rem] md:min-h-[64rem] md:h-auto bg-[#062D45] md:pb-[5.25rem] pb-[2rem] absolute lg:static ${
          toggleNav ? "left-0" : "-left-[50rem]"
        } top-0 z-20 transition-all duration-500`}
      >
        {/* Logo container */}
        <div className="p-[1.5rem] lg:pt-[1.69rem] lg:pb-[4.75rem] lg:px-[2.1rem] flex items-center justify-between">
          <img src={logo} alt="Dia-cura Med logo" />
          <AiOutlineClose
            className="text-2xl cursor-pointer xl:hidden text-[#CFE5F2]"
            onClick={() => setToggleNav(false)}
          />
        </div>

        {/* Navigation container */}
        <div>
          {/* Navigation tabs */}
          <ul className="flex flex-col gap-[1rem] pl-[1.94rem] pr-[0.1rem] pb-[1rem] md:pb-[2rem] mb-[21.19rem]">
            <li
              onClick={() => setActiveTab("Dashboard")}
              className={`patient-dashboard-tab ${
                activeTab === "Dashboard"
                  ? "bg-[#CFE5F2] text-[#062D45]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="patient-dashboard-tab-button">
                <TbLayoutGrid className="text-[1.55rem]" />
                <span>Dashboard</span>
              </button>
            </li>
            <li
              onClick={() => setActiveTab("Appointments")}
              className={`patient-dashboard-tab ${
                activeTab === "Appointments"
                  ? "bg-[#CFE5F2] text-[#062D45]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="patient-dashboard-tab-button">
                <HiClipboardCheck className="text-[1.55rem]" />
                <span>Appointments</span>
                <span
                  className={`${
                    activeTab === "Appointments"
                      ? "bg-[#062D45] text-[#CFE5F2]"
                      : "bg-[#CFE5F2] text-[#062D45]"
                  } w-[2.5rem] h-[1.4375rem] flex items-center justify-center rounded-[6.25rem] ml-[1.3125rem] text-[0.75rem] font-semibold`}
                >
                  {"08"}
                </span>
              </button>
            </li>
            <li
              onClick={() => setActiveTab("Chat")}
              className={`patient-dashboard-tab ${
                activeTab === "Chat"
                  ? "bg-[#CFE5F2] text-[#062D45]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="patient-dashboard-tab-button">
                <HiChat className="text-[1.55rem]" />
                <span>Chat</span>
                <span
                  className={`${
                    activeTab === "Appointments"
                      ? "bg-[#062D45] text-[#CFE5F2]"
                      : "bg-[#CFE5F2] text-[#062D45]"
                  } w-[2.5rem] h-[1.4375rem] flex items-center justify-center rounded-[6.25rem] ml-[5.94rem] text-[0.75rem] font-semibold`}
                >
                  {"03"}
                </span>
              </button>
            </li>
            <li
              onClick={() => setActiveTab("Education")}
              className={`patient-dashboard-tab ${
                activeTab === "Education"
                  ? "bg-[#CFE5F2] text-[#062D45]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="patient-dashboard-tab-button">
                <HiBookOpen className="text-[1.55rem]" />
                <span>Education</span>
              </button>
            </li>
            <li
              onClick={() => setActiveTab("Settings")}
              className={`patient-dashboard-tab ${
                activeTab === "Settings"
                  ? "bg-[#CFE5F2] text-[#062D45]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="patient-dashboard-tab-button">
                <HiOutlineCog className="text-[1.55rem]" />
                <span>Settings</span>
              </button>
            </li>
          </ul>

          {/* Footer */}
          <div className="md:w-[15rem] w-[10rem] h-[4rem] flex justify-center ml-auto mr-[1.12rem] border border-white rounded-[0.625rem] px-[0.5rem] py-[1rem] ">
            <button
              type="button"
              className="patient-dashboard-tab-button justify-center text-[1.125rem] text-white"
            >
              <img src={logout} alt="Logout" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PatientsDashboardSideBar;
