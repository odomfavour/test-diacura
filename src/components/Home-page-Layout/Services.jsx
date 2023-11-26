import doc from "/src/assets/images/doctor.png"

const Services = () => {
    return (
        <section>
            <div className="container mx-auto w-[85%] lg:flex lg:flex-row flex flex-col-reverse lg:pt-[90px] lg:gap-[340px] lg:mb-[90px] pt-6
            ">
                <div className="pt-[40px]">
                    <h2 className="font-Open-sans lg:text-[48px] font-bold ">Counselling Services</h2>

                    <p className="lg:w-[483px] lg:h-[165px] lg:mt-[50px] mt-4 lg:mb-0 mb-3 text-[16px] lg:text-[20px] font-normal font-Open-sans text-[#868686]">Detailed counseling on prescribed medications, including dosage instructions, potential side effects, and the importance of adherence to the prescribed treatment plan.</p>
                    <button className=" lg:flex lg:text-[20px] font-bold  lg:justify-center lg:px-3 pt-4 hidden lg:w-[179px] lg:h-[56px] text-[#FFFFFF] bg-[#107BC0] lg:mt-[90px] rounded-md">Learn More</button>
                </div>
                <div>
                    <img src={doc} alt="" />


                </div>


            </div>

        </section>
    )
}

export default Services
