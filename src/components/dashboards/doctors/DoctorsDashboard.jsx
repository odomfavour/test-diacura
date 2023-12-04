import DoctorSidebarContext from "../../../context/DoctorSidebarContext";
import DashboardFrame from "./DashboardFrame";
import DashboardSidebar from "./DashboardSidebar";

const DoctorsDashboard = () => {
  return (
    <DoctorSidebarContext>
      <main className="flex items-start">
        <DashboardSidebar />
        <DashboardFrame />
      </main>
    </DoctorSidebarContext>
  );
};

export default DoctorsDashboard;
