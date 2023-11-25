import PatientKYC from "../../layouts/PatientKYC";
import PatientsKycButtons from "./PatientsKycButtons";

const PatientsKycStepFour = () => {
  return (
    <section>
      <PatientKYC current={4} heading={""}>
        <div className="max-w-[67.1875rem] mx-auto py-[2rem] px-[1.3rem] md:px-[1.5rem] lg:px-[3.75rem] md:py-[3rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
          {/* Form container */}
          <div className=" lg:flex  md:flex lg:gap-9  md:gap-9">
            <div className="  ">
              <p className="lg:text-[24px] text-[20px] text-[#107BC0] font-open-sans font-semibold"> Blood glucose levels</p>
              <div className=" lg:flex  lg:mt-5  md:mt-5 mt-4">
                <button className="lg:w-[231px]  w-[130px]  h-[35px] lg:h-[56px] bg-[#FFF] text-[#666] font-dm-sans font-medium text-[14px]" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#FFFF' }}>mmol/L</button>
                <button className="lg:w-[231px]  w-[130px]   h-[35px] lg:h-[56px]  bg-[#107BC0] text-[#ffff] font-dm-sans font-medium text-[14px] ">mg/dL</button>
              </div>

              <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px] md:mt-7 mt-3 font-open-sans font-semibold"> Do you have allergies?</p>
              <div className="lg:mt-5 mt-4">
                <button className="lg:w-[231px] lg:h-[56px]   w-[130px]  h-[35px] bg-[#FFF] text-[#666] text-[14px] font-dm-sans font-medium">Yes</button>
                <button className="lg:w-[231px] lg:h-[56px]  w-[130px]  h-[35px] bg-[#107BC0]   text-[#ffff] text-[14px] font-dm-sans font-medium">No</button>
              </div>



            </div>
            <div>
              <p className="lg:text-[24px] text-[#107BC0] lg:mt-0  md:mt-4 mt-4  lg:flex  lg:justify-center mx-auto font-open-sans  font-normal"> Other units</p>
              <div className="lg:flex lg:mt-5 mt-4">
                <button className="lg:w-[231px] lg:h-[56px]  w-[130px]  h-[35px] bg-[#FFF] text-[#666] text-[14px] font-dm-sans font-medium" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#FFFF' }}>METRIC (Kg, cm)</button>
                <button className="lg:w-[231px] lg:h-[56px]  w-[130px]  h-[35px] bg-[#107BC0] text-[14px] font-dm-sans font-medium text-[#ffff]">US (Lbs, inc)</button>
              </div>
              <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px] font-open-sans font-normal  md:mt-5 mt-5">If yes, kindly specify</p>

              <div className=" lg:w-[449px] lg:h-[75px] border-b-4 lg:mb-[50px] lg:mt-0 md:mt-[-18px] mt-[-10px]  md:mb-9 mb-5" style={{ borderColor: '#107BC0' }}>
                <input className="lg:w-[423px] p-[20px] lg:h-[2px] lg:mt-5 md:mt-[5px] border-none" type="text" placeholder="please Specify" style={{ backgroundColor: 'rgba(207, 229, 242, 0.02)' }} />
              </div>

            </div>
          </div>


          <PatientsKycButtons previous={"patients-kyc-step-three"} />
        </div>
        {/* buttons container */}

      </PatientKYC>
    </section>
  );
};

export default PatientsKycStepFour;
