import PatientKYC from "../../layouts/PatientKYC";
import PatientsKycButtons from "./PatientsKycButtons";

const PatientsKycStepFour = () => {
  return (
    <section>
      <PatientKYC current={4} heading={""}>
        <div className="max-w-[67.1875rem] mx-auto py-[2rem] px-[1.3rem] md:px-[1.5rem] lg:px-[3.75rem] md:py-[3rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
          {/* Form container */}
          <h1>Patient&apos;s KYC 4</h1>
        </div>
        {/* buttons container */}
        <PatientsKycButtons previous={"patients-kyc-step-three"} />
      </PatientKYC>
    </section>
  );
};

export default PatientsKycStepFour;
