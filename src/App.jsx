import React from "react";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import PatientsKycStepOne from "./components/patients-kyc/PatientsKycStepOne";
import PatientsKycStepTwo from "./components/patients-kyc/PatientsKycStepTwo";
import PatientsKycStepThree from "./components/patients-kyc/PatientsKycStepThree";
import PatientsKycStepFour from "./components/patients-kyc/PatientsKycStepFour";
import { AdminDashboard } from "./components/dashboards/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Faq from "./pages/FAQ";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients-kyc-step-one" element={<PatientsKycStepOne />} />
      <Route path="/patients-kyc-step-two" element={<PatientsKycStepTwo />} />
      <Route path="/patients-kyc-step-three" element={<PatientsKycStepThree />} />
      <Route path="/patients-kyc-step-four" element={<PatientsKycStepFour/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>    
  )
}

export default App