import { AdminMenuContextProvider } from "../../context/AdminSidebarContext";
import logo from "../../assets/images/admin-dashboard/dashboard-logo.svg";
import logout from "../../assets/icons/admin-dashboard/logout.svg";
import cross from "../../assets/icons/admin-dashboard/cross.svg";
import separator from "../../assets/icons/admin-dashboard/separator.svg";
import { TbLayoutGrid } from "react-icons/tb";
import { FaRegUserCircle, FaChevronUp } from "react-icons/fa";
import {
  HiUserGroup,
  HiOutlineChartPie,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineFolderOpen,
} from "react-icons/hi";

const AdminDashboardSideBar = () => {
  const { activeTab, setActiveTab, toggleNav } = AdminMenuContextProvider();

  return (
    <aside className="relative">
      <div
        className={`w-[18.75rem] h-[64rem] bg-[#094063] pb-[5rem] absolute md:static ${
          toggleNav ? "left-0" : "-left-[50rem]"
        } top-0 z-20 transition-all duration-500`}
      >
        {/* Logo container */}
        <div className="pt-[5rem] pb-[5rem] pl-[2.44rem] pr-[2.55rem]">
          <img src={logo} alt="Dia-cura Med logo" />
        </div>

        {/* Navigation container */}
        <div>
          {/* Navigation tabs */}
          <ul className="flex flex-col gap-[1rem] pl-[1.69rem] pr-[0.1rem] pb-[2rem] min-h-[31rem]">
            <li
              onClick={() => setActiveTab("Dashboard")}
              className={`admin-dashboard-tab ${
                activeTab === "Dashboard"
                  ? "bg-[#CFE5F2] text-[#094063]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="admin-dashboard-tab-button">
                <TbLayoutGrid className="text-[1.55rem]" />
                <span>Dashboard</span>
              </button>
            </li>
            <li
              onClick={() => setActiveTab("User Managements")}
              className={`admin-dashboard-tab ${
                activeTab === "User Managements"
                  ? "bg-[#CFE5F2] text-[#094063]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="admin-dashboard-tab-button">
                <HiUserGroup className="text-[1.55rem]" />
                <span>User Managements</span>
                <FaChevronUp
                  className={`text-[1.55rem] ml-[1.8rem] transition-all duration-300 ${
                    activeTab === "User Managements" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </li>

            {/* User Managements drop down menu */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeTab === "User Managements" ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-[0.625rem] items-end text-[#CFE5F2]">
                <li className="user-managements-tab">
                  <button type="button" className="user-managements-tab-button">
                    <img src={cross} alt="cross" />
                    <span>Doctors</span>
                  </button>
                </li>
                <li className="user-managements-tab">
                  <button type="button" className="user-managements-tab-button">
                    <HiOutlineUsers className="text-[1.55rem]" />
                    <span>Patients</span>
                  </button>
                </li>
                <li className="user-managements-tab">
                  <button type="button" className="user-managements-tab-button">
                    <HiOutlineFolderOpen className="text-[1.55rem]" />
                    <span>Content management</span>
                  </button>
                </li>
              </ul>
            </div>
            <li
              onClick={() => setActiveTab("Doctor's KYC")}
              className={`admin-dashboard-tab ${
                activeTab === "Doctor's KYC"
                  ? "bg-[#CFE5F2] text-[#094063]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="admin-dashboard-tab-button">
                <FaRegUserCircle className="text-[1.55rem]" />
                <span>Doctor&apos;s KYC</span>
              </button>
            </li>
            <li
              onClick={() => setActiveTab("Analytics / Feedbacks")}
              className={`admin-dashboard-tab ${
                activeTab === "Analytics / Feedbacks"
                  ? "bg-[#CFE5F2] text-[#094063]"
                  : "text-[#CFE5F2]"
              }`}
            >
              <button type="button" className="admin-dashboard-tab-button">
                <HiOutlineChartPie className="text-[1.55rem]" />
                <span>Analytics / Feedbacks</span>
              </button>
            </li>
          </ul>

          {/* Footer */}
          <div>
            <img
              src={separator}
              alt="separator"
              className="w-[15.5625rem] mx-auto"
            />
            <ul>
              <li
                onClick={() => setActiveTab("Settings")}
                className={`flex gap-[0.5rem] pt-[1.19rem] pl-[1.19rem] pb-[1.31rem] rounded-l-[0.625rem] text-base w-[14.75rem] h-[4rem] ml-auto mr-[1.12rem] mb-[3.62rem] mt-[0.5rem] ${
                  activeTab === "Settings"
                    ? "bg-[#CFE5F2] text-[#094063]"
                    : "text-[#CFE5F2]"
                }`}
              >
                <button type="button" className="admin-dashboard-tab-button ">
                  <HiOutlineCog className="text-[1.55rem]" />
                  <span>Settings</span>
                </button>
              </li>
              <li className="w-[12.75rem] flex justify-center ml-auto mr-[3rem] border border-white rounded-[0.625rem] px-[0.5rem] py-[1rem] ">
                <button
                  type="button"
                  className="admin-dashboard-tab-button justify-center text-[1.125rem] text-white"
                >
                  <img src={logout} alt="Logout" />
                  <span>Log out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminDashboardSideBar;
