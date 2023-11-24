import { AdminMenuContextProvider } from "../../context/AdminSidebarContext";
import AdminDashboardTab from "./AdminDashboardTab";
import UserManageMentsTab from "./UserManageMentsTab";
import DoctorsKycTab from "./DoctorsKycTab";
import AnalyticsFeedbacksTab from "./AnalyticsFeedbacksTab";
import SettingsTab from "./SettingsTab";
import magnifier from "../../assets/icons/admin-dashboard/magnifier.svg";
import bell from "../../assets/icons/admin-dashboard/bell.svg";
import face from "../../assets/images/admin-dashboard/Face.svg";

const AdminDashboardFrame = () => {
  const { activeTab } = AdminMenuContextProvider();

  return (
    <section className="w-full">
      <div className="px-[1.56rem]">
        {/* header */}
        <header>
          <div className="flex justify-between items-center py-[0.88rem] mb-[1rem]">
            <h1 className="text-[2.25rem] text-[#020D14] font-semibold leading-normal">
              {activeTab}
            </h1>
            <div className="flex items-center gap-[4rem]">
              <div className="flex items-center gap-[0.5rem] w-[25.875rem] h-[3.5rem] py-[0.125rem] pl-[1.5rem] pr-[2rem] rounded-[1rem] bg-dark-gray">
                <img src={magnifier} alt="search" className="" />
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  className="py-[1rem] px-[0.5rem] bg-transparent w-[90%] outline-none"
                />
              </div>
              <div className="w-[2.818rem] h-[3rem] bg-transparent-blue flex items-center justify-center rounded-[0.5rem]">
                <img src={bell} alt="bell" />
              </div>
            </div>
            <div className="flex items-center gap-[0.5rem]">
                <div>
                    <img src={face} alt="profile pictures"  className="rounded-full"/>
                </div>
                <div>
                    <h3 className="text-base font-bold leading-normal text-[#262626]">Godwin IsaacAdmin</h3>
                    <p className="text-[0.875rem] font-semibold text-[#404040]">Admin</p>
                </div>
            </div>
          </div>
        </header>

        {/* Frame */}
        <div>
          {activeTab === "Dashboard" && <AdminDashboardTab />}
          {activeTab === "User Managements" && <UserManageMentsTab />}
          {activeTab === "Doctor's KYC" && <DoctorsKycTab />}
          {activeTab === "Analytics / Feedbacks" && <AnalyticsFeedbacksTab />}
          {activeTab === "Settings" && <SettingsTab />}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardFrame;
