import DoctorsKYC from "/src/layouts/DoctorsKYC";
import { MdAccessTime } from "react-icons/md";
import one from "/src/assets/icons/doctors-kyc/one.svg";
import two from "/src/assets/icons/doctors-kyc/two.svg";
import three from "/src/assets/icons/doctors-kyc/three.svg";
import four from "/src/assets/icons/doctors-kyc/four.svg";
import { BiIdCard } from "react-icons/bi";
import { LuCamera } from "react-icons/lu";
import { Link } from "react-router-dom";

const steps = [
    {
        id: 1,
        src: one,
        title: 'Fill in your personal information'
    },
    {
        id: 2,
        src: two,
        title: 'Upload a proof of identity'
    },
    {
        id: 3,
        src: three,
        title: 'Take a selfie'
    },
    {
        id: 4,
        src: four,
        title: 'Take an evaluation test'
    }
]

const DoctorsKYCwelcome = () => {
  return (
    <DoctorsKYC>
        <div className=" w-full xl:w-[85%] mx-auto mb-[2.69rem] md:mb-[3.81rem] text-center">
            <h1 className="text-primary-color-light-blue-300 text-[1.4rem] md:text-[2rem] font-semibold leading-normal mb-[1.5rem] md:mb-[2rem]">
                Welcome to Diacura-Med, in order to proceed, you need to tell us about yourself !
            </h1>
        </div>
        <div className="bg-[#cfe5f271] shadow-xxl p-5 xl:p-10 rounded-[20px] w-full xl:w-[85%] mx-auto">
            <div>
                <h3 className="text-[#107BC0] font-semibold text-lg xl:text-2xl mb-5">Start your verification</h3>
                <h5 className="text-[#404040] font-normal text-base xl:text-lg mb-4">
                    Go through a guided process to verify your identity.
                </h5>
                <div className="flex items-center gap-4 mb-4">
                    <MdAccessTime  className="text-xl"/>
                    <p className="small-text">This will take about 5 minutes to complete</p>
                </div>
                <div className="xl:flex items-center justify-between w-full">
                    {
                        steps.map((step) => (
                            <div key={step.id} className="mb-2 xl:mb-0 flex items-center gap-2">
                                <img src={step.src} alt="Step one" />
                                <p className="small-text">{step.title}</p>
                            </div>
                        ))
                    }                    
                </div>
            </div>
            <div className="my-14">
                <h4 className="text-[#107BC0] font-semibold text-xl mb-5">Before you proceed;</h4>
                <div className="flex items-center gap-2 bg-white p-4 mb-4">
                    <BiIdCard className="text-5xl xl:text-xl text-[#0D67A0]" />
                    <p className="small-text">
                        Ensure you have a valid document (e.g a hospital identity card, Original medical certificate and National Identity card).
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-white p-4">
                    <LuCamera className="text-xl text-[#0D67A0]" />
                    <p className="small-text">
                        Ensure your camera works perfectly.
                    </p>
                </div>
            </div>
            <div className="flex items-center xl:justify-end">
              <div className="w-full xl:w-3/5 flex gap-2">
                  <div className="w-1/2">
                      <button className="border border-[#107BC0] text-[#107BC0] w-full rounded-[4px] py-[18px]">Back</button>
                  </div>
                  <Link to="/doctors-kyc-one" className="w-1/2">
                      <button className="text-white bg-[#107BC0] w-full rounded-[4px] py-[18px]">Next</button>
                  </Link>
              </div>                
            </div>
        </div>
    </DoctorsKYC>
  )
}

export default DoctorsKYCwelcome