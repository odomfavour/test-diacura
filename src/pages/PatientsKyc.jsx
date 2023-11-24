
const PatientsKyc = () => {
    return (
        <section>

            <div className=" mx-auto lg:mt-[90px] lg:w-[1081px] lg:h-[539px] rounded" style={{ backgroundColor: 'rgba(207, 229, 242, 0.30)' }}>
                <div className=" flex lg:gap-4  p-[60px]">
                    <div className="  ">
                        <p className="lg:text-[24px] text-[#107BC0]"> Blood glucose levels</p>
                        <div className="mt-5">
                            <button className="lg:w-[231px] lg:h-[56px] bg-[#FFF] text-[14px]">mmol/L</button>
                            <button className="lg:w-[231px] lg:h-[56px]  bg-[#107BC0] text-[14px]">mg/dL</button>
                        </div>

                        <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px]"> Do you have allergies?</p>
                        <div className="mt-5">
                            <button className="lg:w-[231px] lg:h-[56px] bg-[#FFF] text-[14px]">Yes</button>
                            <button className="lg:w-[231px] lg:h-[56px]  bg-[#107BC0] text-[14px]">No</button>
                        </div>



                    </div>
                    <div>
                        <p className="lg:text-[24px] text-[#107BC0]  flex  justify-center mx-auto"> Other units</p>
                        <div className="mt-5">
                            <button className="lg:w-[231px] lg:h-[56px] bg-[#FFF] text-[14px]">METRIC (Kg, cm)</button>
                            <button className="lg:w-[231px] lg:h-[56px]  bg-[#107BC0] text-[14px]">US (Lbs, inc)</button>
                        </div>
                        <p className="lg:text-[24px] text-[#107BC0] lg:mt-[60px]">If yes, kindly specify</p>

                        <div className="border border-black lg:w-[449px] lg:h-[75px]">
                            <input className="lg:w-[423px] p-[20px]" type="text" placeholder="please Specify" />
                        </div>

                    </div>
                </div>
                <div className="mt-[-30px] lg:flex lg:justify-end lg:gap-4 p-[60px]">
                    <button className="lg:w-[231px] lg:h-[56px] text-[#107BC0] bg-[#FFF] text-[20px] rounded">Back</button>
                    <button className="lg:w-[231px] lg:h-[56px]  bg-[#107BC0] text-[20px] rounded text-[#ffff]">Next</button>
                </div>

            </div>

        </section>
    )
}

export default PatientsKyc
