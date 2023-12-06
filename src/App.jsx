import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import PatientsKycStepOne from "./components/patients-kyc/PatientsKycStepOne";
import PatientsKycStepTwo from "./components/patients-kyc/PatientsKycStepTwo";
import PatientsKycStepThree from "./components/patients-kyc/PatientsKycStepThree";
import PatientsKycStepFour from "./components/patients-kyc/PatientsKycStepFour";
import PatientsKycStepFive from "./components/patients-kyc/PatientsKycStepFive";
import PatientsKycStepSix from "./components/patients-kyc/PatientsKycStepSix";
import { AdminDashboard } from "./components/dashboards/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Faq from "./pages/Faq";
import ContactUs from "./components/ContactUs";
// import PatientsKycStepFive from "./components/patients-kyc/PatientsKycStepFive";
// import PatientsKycStepSix from "./components/patients-kyc/PatientsKycStepSix";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PatientsDashboard from "./components/dashboards/patients/PatientsDashboard";
import DoctorsDashboard from "./components/dashboards/doctors/DoctorsDashboard";
import DoctorsKycStep3 from "./components/doctors-kyc/DoctorsKycStep3";
import DoctorsKycStep4 from "./components/doctors-kyc/DoctorsKycStep4";
import DoctorsKycStep5 from "./components/doctors-kyc/DoctorsKycStep5";
import DoctorsKycStep6 from "./components/doctors-kyc/DoctorsKycStep6";
import DoctorsKYCwelcome from "./components/doctors-kyc/DoctorsKYCwelcome";
import DoctorsKYCStepOne from "./components/doctors-kyc/DoctorsKYCStepOne";
import DoctorsKYCTwo from "./components/doctors-kyc/DoctorsKYCTwo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients-kyc-step-one" element={<PatientsKycStepOne />} />
      <Route path="/patients-kyc-step-two" element={<PatientsKycStepTwo />} />
      <Route
        path="/patients-kyc-step-three"
        element={<PatientsKycStepThree />}
      />
      <Route path="/patients-kyc-step-four" element={<PatientsKycStepFour />} />
      <Route path="/patients-kyc-step-five" element={<PatientsKycStepFive />} />
      <Route path="/patients-kyc-step-six" element={<PatientsKycStepSix />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/patient-dashboard" element={<PatientsDashboard />} />
      <Route path="/doctor-dashboard" element={<DoctorsDashboard />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/patients-kyc-step-five" element={<PatientsKycStepFive />} />
      <Route path="/patients-kyc-step-six" element={<PatientsKycStepSix />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/doctors-kyc-step-3" element={<DoctorsKycStep3 />} />
      <Route path="/doctors-kyc-step-4" element={<DoctorsKycStep4 />} />
      <Route path="/doctors-kyc-step-5" element={<DoctorsKycStep5 />} />
      <Route path="/doctors-kyc-step-6" element={<DoctorsKycStep6 />} />
      <Route path="/doctor-kyc-welcome" element={<DoctorsKYCwelcome />} />
      <Route path="/doctors-kyc-one" element={<DoctorsKYCStepOne />} />
      <Route path="/doctor-kyc-two" element={<DoctorsKYCTwo />} />
    </Routes>
  );
};

export default App;
