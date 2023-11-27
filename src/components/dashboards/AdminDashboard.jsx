import AdminDashboardSideBar from "./AdminDashboardSideBar";
import AdminDashboardFrame from "./AdminDashboardFrame";
import AdminSidebarContext from "../../context/AdminSidebarContext";

export const AdminDashboard = () => {
  return (
    <>
      <AdminSidebarContext>
        <main className="flex items-start">
          <AdminDashboardSideBar />
          <AdminDashboardFrame />
        </main>
      </AdminSidebarContext>
    </>
  );
};
