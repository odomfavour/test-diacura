import AdminDashboardSideBar from "./AdminDashboardSideBar";
import AdminDashboardFrame from "./AdminDashboardFrame";
import UserManagementFrame from "./UserManagementFrame";
import { AdminMenuContextProvider } from "../../context/AdminSidebarContext";

export const AdminDashboard = () => {
  const { activeTab } = AdminMenuContextProvider();
  const renderFrame = () => {
    if (
      activeTab === "Doctors" ||
      activeTab === "Patients" ||
      activeTab === "Content management"
    ) {
      return <UserManagementFrame />;
    } else return <AdminDashboardFrame />;
  };
  return (
    <>
      <main className="flex items-start">
        <AdminDashboardSideBar />
        {renderFrame()}
      </main>
    </>
  );
};
