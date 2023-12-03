import icon from "/src/assets/images/patient.png";
import icon2 from "/src/assets/images/Rec.png"
import icon3 from "/src/assets/images/Rec2.png"
import circle from "/src/assets/Icons/circle.png"


const Hero = () => {
    return (
        <section>
            <div className="container mx-auto w-[85%]">
                <div className="lg:flex lg:flex-row flex flex-col-reverse lg:pt-[90px] lg:gap-[340px] lg:mb-[90px] mb-[40px] pt-6">

                    <div>
                        <h3 className="lg:text-[20px] lg:mt-0 mt-3 font-Open-sans font-extrabold text-[14px] ">Welcome onboard</h3>
                        <h3 className="lg:w-[512px] lg:h-[108px] lg:leading-[50px]  leading-10 lg:text-[40px] text-[32px] lg:mt-4 mt-4 font-extrabold text-[#062D45]  font-Open-sans ">Get Expert Medical Help With Diabetes From Us</h3>

                        <p className="lg:w-[516px] lg:h-[108px] lg:mt-[50px] mt-4 lg:mb-0 mb-3 text-[16px] lg:text-[20px] font-normal font-Open-sans text-[#868686]  ">Welcome to DiaCura-Med, redefining diabetes management.
                            Discover personalized solutions, expert guidance,
                            and a supportive community.
                            Take control with intuitive tools.
                            Your wellness starts here.</p>

                        <button className=" lg:flex lg:text-[20px] font-bold  lg:justify-center lg:px-3 pt-4 hidden lg:w-[179px] lg:h-[56px] text-[#FFFFFF] bg-[#107BC0] lg:mt-[120px] rounded-md">Get Started</button>
                    </div>

                    <div>
                        <div className="relative">
                            <img className="lg:z-[1000] relative" src={icon} alt="patient" />
                            <img className=" lg:flex hidden  -z-10 absolute lg:top-[310px] lg:left-[280px]" src={icon2} alt="icon2" />
                            <img className=" lg:flex hidden absolute  -z-10 top-[-20px]  lg:left-[-30px]" src={icon3} alt="icon3 " />

                            <div className=" lg:w-[287px] w-[252px] lg:z-[1000]  absolute left-[60px] top-[230px]  h-[60px] lg:h-[79px] shadow-2xl lg:p-3 p-2 lg:absolute lg:top-[390px] lg:left-[-110px] bg-[#FFF] rounded">
                                <div className="flex gap-2">
                                    <img className="lg:w-[25px] lg:h-[25px] w-[15px] h-[15px]" src={circle} alt="circle" />
                                    <p className="lg:text-[16px] text-[14px] font-normal font-Open-sans text-[#868686] lg:mt-0 mt-[-2px]">Expert Doctors</p>
                                </div>
                                <div className="flex gap-2 lg:mt-2 mt-1">
                                    <img className="lg:w-[25px] lg:h-[25px] w-[15px] h-[15px]" src={circle} alt="circle" />
                                    <p className="lg:text-[16px]  text-[14px] font-normal font-Open-sans text-[#868686]">24/7 Healthcare Provision</p>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>






            </div>


        </section>
    )
}

export default Hero
