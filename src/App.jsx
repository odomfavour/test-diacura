
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PatientsKycStepOne from "./components/patients-kyc/PatientsKycStepOne";
import PatientsKycStepTwo from "./components/patients-kyc/PatientsKycStepTwo";
import PatientsKycStepThree from "./components/patients-kyc/PatientsKycStepThree";
import PatientsKycStepFour from "./components/patients-kyc/PatientsKycStepFour";
<<<<<<< HEAD
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
=======
import PatientsKyc from "./pages/PatientsKyc";
<<<<<<< HEAD
>>>>>>> 3deb7d9 (update)
=======
import PatientsKycMed from './pages/PatientsKycMed';
>>>>>>> a619d2f (update-page)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients-kyc-step-one" element={<PatientsKycStepOne />} />
      <Route path="/patients-kyc-step-two" element={<PatientsKycStepTwo />} />
      <Route path="/patients-kyc-step-three" element={<PatientsKycStepThree />} />
      <Route path="/patients-kyc-step-four" element={<PatientsKycStepFour />} />
<<<<<<< HEAD
      <Route path="patients" element={<PatientsKyc />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
=======
      <Route path="*" element={<NotFound />} />
      <Route path="/patients" element={<PatientsKyc />} />
      <Route path="/patientsmed" element={<PatientsKycMed />} />
>>>>>>> a619d2f (update-page)
    </Routes>


  )
}

export default App