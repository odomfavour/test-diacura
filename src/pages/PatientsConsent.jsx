import { Link } from "react-router-dom"
const PatientsConsent = () => {
    return (
        <section>
            <div className=" mx-auto lg:mt-[90px] lg:w-[1081px] lg:h-[539px] shadow-2xl rounded-[25px]" style={{ backgroundColor: 'rgba(207, 229, 242, 0.30)' }}>
                <div className="  p-[80px]">
                    <p className="lg:text-[24px] text-[#107BC0] font-open-sans font-semibold">Current Medications</p>
                    <p className="lg:text-[20px] text-[#107BC0] font-open-sans font-normal mt-3">List any medications you're currently taking.</p>

                    <div className="flex gap-[60px]">
                        <div className="flex flex-col gap-4">
                            <input className="mt-6 lg:w-[409px] lg:h-[44px]  lg:p-2 rounded-md" type="text" placeholder="1" />
                            <input className="mt-2 lg:w-[409px]  lg:h-[44px] rounded-md lg:p-2" type="text" placeholder="3" />
                            <input className="mt-2 lg:w-[409px]  lg:h-[44px] rounded-md  lg:p-2" type="text" placeholder="5" />

                        </div>
                        <div className="flex flex-col gap-4">
                            <input className="mt-6 lg:w-[409px]  lg:h-[44px] rounded-md lg:p-2" type="text" placeholder="2" />
                            <input className="mt-2 lg:w-[409px]  lg:h-[44px] rounded-md lg:p-2" type="text" placeholder="4" />
                            <input className="mt-2 lg:w-[409px] rounded-md lg:h-[44px] lg:p-2" type="text" placeholder="6" />
                        </div>

                    </div>


                </div>
                <div className="mt-[-70px] lg:flex lg:justify-center lg:ml-[200px] lg:gap-[40px] p-[60px]">
                    <Link to="/patients">
                        <button className="lg:w-[273px] lg:h-[56px] text-[#107BC0] border text-[20px] rounded font-open-sans  font-bold" style={{ borderColor: '#107BC0' }}>Back</button>
                    </Link>

                    <Link to="/patientcon">
                        <button className="lg:w-[273px] lg:h-[56px]  bg-[#107BC0] text-[20px] rounded text-[#ffff] font-open-sans  font-bold">Next</button></Link>
                </div>

            </div>

        </section>)
}

export default PatientsConsent
