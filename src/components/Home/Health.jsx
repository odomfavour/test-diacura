
import doc from "/src/assets/images/home/counsel.png"
import icon from "/src/assets/images/home/alert.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';


const Health = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init();
    }, []); // Run this effect only once after the component mounts
    return (
        <section className="overflow-x-clip">
            <div className=" relative container mx-auto w-[85%] lg:flex lg:flex-row flex flex-col lg:pt-[90px] lg:gap-[270px]  lg:mb-[90px] mb-[30px] pt-[50px]
            ">
                <div >
                    <img className="z-[50px] lg:ml-[-10px] " src={doc} alt="" data-aos="flip-left" data-aos-offset="300"
                        data-aos-easing="ease-in-sine" />
                    <img className=" lg:flex md:flex hidden absolute   z-[-50] top-[160px] left-[-114px]" src={icon} alt="icon" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" />

                </div>
                <div className="pt-[35px]">
                    <h2 className=" lg:w-[487px] text-[#232323] font-Open-sans lg:text-[48px]  text-[24px] font-bold " data-aos="fade-left">Health Education</h2>

                    <p className="lg:w-[500px] lg:h-[198px] lg:mt-[50px] mt-4 lg:mb-0 mb-3 text-[16px] lg:text-[24px]  font-normal font-Open-sans text-[#232323] lg:leading-10" data-aos="fade-left">Empower yourself with our app's Health Education. Access articles for insights on diabetes management, nutrition, and lifestyle. Your wellness journey starts with knowledge at your fingertips.
                    </p>
                    <button className="  hover:bg-[#9353e5] lg:flex lg:text-[20px] w-[145px] h-[40px] font-Open-sans font-bold lg:mx-0 justify-items-center flex mx-auto  lg:justify-center lg:px-3  lg:pt-4  px-5 pt-2 mt-[40px] lg:w-[180px] lg:h-[56px] text-[#FFFFFF] bg-[#107BC0] lg:mt-[60px] rounded-md">Learn More</button>
                </div>



            </div>

        </section>
    )
}

export default Health
