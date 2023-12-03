import PatientSidebarContext from "../../../context/PatientSidebarContext"
import PatientsDashboardFrame from "./PatientsDashboardFrame"
import PatientsDashboardSideBar from "./PatientsDashboardSideBar"

const PatientsDashboard = () => {
  return (
    <>
    <PatientSidebarContext>
      <main className="flex">
        <PatientsDashboardSideBar />
        <PatientsDashboardFrame />
      </main>
      </PatientSidebarContext>
  </>
  )
}

export default PatientsDashboard