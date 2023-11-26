import React from "react";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import PatientsKycStepOne from "./components/patients-kyc/PatientsKycStepOne";
import PatientsKycStepTwo from "./components/patients-kyc/PatientsKycStepTwo";
import PatientsKycStepThree from "./components/patients-kyc/PatientsKycStepThree";
import PatientsKycStepFour from "./components/patients-kyc/PatientsKycStepFour";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ContactUs from "./components/ContactUs";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients-kyc-step-one" element={<PatientsKycStepOne />} />
      <Route path="/patients-kyc-step-two" element={<PatientsKycStepTwo />} />
      <Route path="/patients-kyc-step-three" element={<PatientsKycStepThree />} />
      <Route path="/patients-kyc-step-four" element={<PatientsKycStepFour/>} />
      <Route path="*" element={<NotFound />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>    
  )
}

export default App