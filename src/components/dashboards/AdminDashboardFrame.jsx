import { AdminMenuContextProvider } from "../../context/AdminSidebarContext";
import AdminDashboardTab from "./AdminDashboardTab";
import UserManageMentsTab from "./UserManagementsTab.jsx";
import DoctorsKycTab from "./DoctorsKycTab";
import AnalyticsFeedbacksTab from "./AnalyticsFeedbacksTab";
import SettingsTab from "./SettingsTab";
import magnifier from "../../assets/icons/admin-dashboard/magnifier.svg";
import bell from "../../assets/icons/admin-dashboard/bell.svg";
import dot from "../../assets/icons/admin-dashboard/dot.svg";
import face from "../../assets/images/admin-dashboard/Face.svg";
import logo from "../../assets/images/admin-dashboard/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import ContentUpload from "./ContentUpload.jsx";


const AdminDashboardFrame = () => {
  const { activeTab, toggleNav, setToggleNav } = AdminMenuContextProvider();
  const [openProfile, setOpenProfile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="lg:py-[1.56rem] lg:pr-[2.12rem] lg:pl-[1.54rem] px-[1rem]">
        {/* header */}
        <header>
          <div className="flex lg:justify-between items-center md:py-[0.88rem] py-[1.5rem] md:mb-[1rem]">
            {/* mobile */}
            <div className="flex items-center gap-[0.7rem] lg:hidden">
              <FaBars
                className="text-xl cursor-pointer"
                onClick={() => setToggleNav(!toggleNav)}
              />
              <img src={logo} alt="Dia-cura Med logo" className="w-[120px]" />
            </div>

            {/* Desktop */}
            <h1 className="hidden lg:block text-[1.25rem] lg:text-[2.25rem] text-[#020D14] font-semibold leading-normal">
              {activeTab === "Content upload" ? "User Management" : activeTab}
            </h1>
            {/* Search box */}
            <div className="flex items-center gap-[1rem] md:gap-[2rem] xl:gap-[4rem] ml-auto mr-[1.2rem] xl:m-0">
              <div
                onClick={() => setOpenSearch(!openSearch)}
                className="xl:hidden"
              >
                <img src={magnifier} alt="search" className="w-[1.5rem]" />
              </div>
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
                  className={`flex items-center gap-[0.5rem] w-full xl:w-[25.875rem] h-[3.5rem] py-[0.125rem] pl-[1.5rem] pr-[2rem] rounded-[1rem] bg-dark-gray`}
                >
                  <img src={magnifier} alt="search" />
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search here..."
                    className="py-[1rem] px-[0.5rem] bg-transparent w-[90%] outline-none"
                  />
                </div>
              </div>
              <div className="relative flex w-[2.818rem] h-[3rem] bg-transparent-blue items-center justify-center rounded-[0.5rem]">
                <img src={bell} alt="bell" />
                <img
                  src={dot}
                  alt="notification"
                  className="absolute top-[0.7rem] right-[0.7rem]"
                />
              </div>
            </div>

            <div
              className={`w-[320px] md:w-fit bg-white px-[1rem] py-[2rem] md:p-0 absolute top-0 z-20 md:z-10 md:static  ${
                openProfile ? "right-0" : "-right-[30rem]"
              } flex items-center gap-[0.5rem] rounded-l-[0.5rem] lg:rounded-none  md:shadow-none shadow-lg transition-all duration-500`}
            >
              <div>
                <img
                  src={face}
                  alt="profile pictures"
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-base font-bold leading-normal text-[#262626]">
                  Godwin IsaacAdmin
                </h3>
                <p className="text-[0.875rem] font-semibold text-[#404040]">
                  Admin
                </p>
              </div>
              <AiOutlineClose
                className="text-xl cursor-pointer mb-5 md:hidden ml-auto"
                onClick={() => setOpenProfile(!openProfile)}
              />
            </div>
            <div onClick={() => setOpenProfile(true)} className="md:hidden">
              <img
                src={face}
                alt="profile pictures"
                className="rounded-full w-[2rem]"
              />
            </div>
          </div>

          {/* mobile */}
          <h1 className="lg:hidden mb-[1.5rem] text-[1.25rem] text-[#020D14] font-semibold leading-normal">
            {activeTab}
          </h1>
        </header>

        {/* Frame */}
        <div>
          {activeTab === "Dashboard" && <AdminDashboardTab />}
          {activeTab === "User Managements" && <UserManageMentsTab />}
          {activeTab === "Doctor's KYC" && <DoctorsKycTab />}
          {activeTab === "Analytics / Feedbacks" && <AnalyticsFeedbacksTab />}
          {activeTab === "Settings" && <SettingsTab />}
          {activeTab === "Content upload" && <ContentUpload />}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardFrame;
