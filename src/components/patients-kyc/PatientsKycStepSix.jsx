import PatientKYC from "../../layouts/PatientKYC";
import { useState } from "react";
import Modal from "./Modal";

const PatientsKycStepSix = () => {
    const [showModal, setShowModal] = useState(false)

    const togglebtn = () => {
        setShowModal(!showModal)
    }


    return (
        <section>
            <PatientKYC current={6} heading={""}>
                <div className="max-w-[67.1875rem] mx-auto py-[2rem] px-[1.3rem] md:px-[1.5rem] lg:px-[3.75rem] md:py-[3rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
                    {/* Form container */}
                    <form>
                        <div className=" ">
                            <p className="lg:text-[24px] font-semibold font-Open-sans text-[#107BC0]">Consent and Agreement</p>
                            <p className="font-Open-sans font-normal lg:text-[20px] lg:mt-[20px]"> I, <span className="text-[#107BC0]">[<input className="text-[#107BC0] outline-none" type="text" placeholder="Your Full name" />]</span>, hereby consent to Diacura-Med’s terms and conditions. I understand that the information provided is confidential and will be used for the purpose of managing my diabetes related services.   </p>

                            <div className="lg:flex gap-2 lg:mt-[40px] font-Open-sans">
                                <input
                                    type="checkbox"
                                    className="w-[20px] h-[20px]"

                                />
                                <p className="font-Opens-sans">I agree to receive important notifications and updates via email.</p>
                            </div>
                            <div className="lg:flex gap-2 lg:mt-[20px]">
                                <input
                                    type="checkbox"
                                    className="w-[20px] h-[20px]"


                                />
                                <p className="font-Open-sans">I agree to receive promotional materials related to diabetes management products and services.</p>
                            </div>


                        </div>
                        <div className="lg:flex lg:justify-end">
                            <button onClick={togglebtn} className="bg-[#107BC0] lg:w-[273px] lg:h-[56px] lg:mt-[60px]  lg:text-[20px] text-[#ffff] rounded font-Open-sans font-bold">Finish</button>
                        </div>

                    </form>



                </div>
                {/* buttons container */}


            </PatientKYC>
            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}



        </section>
    )
}

export default PatientsKycStepSix
