import { Link } from "react-router-dom"
const PatientsKyc = () => {
    return (
        <section>

            <div className=" mx-auto lg:mt-[90px] lg:w-[1081px] lg:h-[539px] shadow-2xl rounded-[25px]" style={{ backgroundColor: 'rgba(207, 229, 242, 0.30)' }}>
                <div className=" flex lg:gap-9  p-[60px]">
                    <div className="  ">
                        <p className="lg:text-[24px] text-[#107BC0] font-open-sans font-semibold"> Blood glucose levels</p>
                        <div className="mt-5">
                            <button className="lg:w-[231px] lg:h-[56px] bg-[#FFF] text-[#666] font-dm-sans font-medium text-[14px]" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#FFFF' }}>mmol/L</button>
                            <button className="lg:w-[231px] lg:h-[56px]  bg-[#107BC0] text-[#ffff] font-dm-sans font-medium text-[14px] ">mg/dL</button>
                        </div>

                        <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px] font-open-sans font-semibold"> Do you have allergies?</p>
                        <div className="mt-5">
                            <button className="lg:w-[231px] lg:h-[56px] bg-[#FFF] text-[#666] text-[14px] font-dm-sans font-medium">Yes</button>
                            <button className="lg:w-[231px] lg:h-[56px]  bg-[#107BC0]   text-[#ffff] text-[14px] font-dm-sans font-medium">No</button>
                        </div>



                    </div>
                    <div>
                        <p className="lg:text-[24px] text-[#107BC0]  flex  justify-center mx-auto font-open-sans  font-normal"> Other units</p>
                        <div className="mt-5">
                            <button className="lg:w-[231px] lg:h-[56px] bg-[#FFF] text-[#666] text-[14px] font-dm-sans font-medium" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#FFFF' }}>METRIC (Kg, cm)</button>
                            <button className="lg:w-[231px] lg:h-[56px]  bg-[#107BC0] text-[14px] font-dm-sans font-medium text-[#ffff]">US (Lbs, inc)</button>
                        </div>
                        <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px] font-open-sans font-normal">If yes, kindly specify</p>

                        <div className=" lg:w-[449px] lg:h-[75px] border-b-4" style={{ borderColor: '#107BC0' }}>
                            <input className="lg:w-[423px] p-[20px] lg:h-[2px] mt-5 border-none" type="text" placeholder="please Specify" style={{ backgroundColor: 'rgba(207, 229, 242, 0.02)' }} />
                        </div>

                    </div>
                </div>
                <div className="mt-[-30px] lg:flex lg:justify-center lg:ml-[399px] lg:gap-6 p-[60px]">
                    <Link to="">
                        <button className="lg:w-[273px] lg:h-[56px] text-[#107BC0] border text-[20px] rounded font-open-sans  font-bold" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#107BC0' }}>Back</button>
                    </Link>

                    <Link to="/patientsmed">
                        <button className="lg:w-[273px] lg:h-[56px]  bg-[#107BC0] text-[20px] rounded text-[#ffff] font-open-sans  font-bold">Next</button></Link>

                </div>

            </div>

        </section>
    )
}

export default PatientsKyc
