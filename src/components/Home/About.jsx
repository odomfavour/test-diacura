import { Data } from "./Data"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const About = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init();
    }, []); // Run this effect only once after the component mounts
    return (
        <section className="bg-[#094063]">

            <div className="container mx-auto w-[85%] lg:mb-3 pb-[80px]">

                <h4 className="lg:pt-[40px]  pt-5 text-[20px] w-[267px] h-[54px] lg:w-[512px] lg:h-[98px] lg:flex lg:justify-center text-center mx-auto lg:text-[36px] font-Open-sans font-extrabold text-[#FFFFFF]  ">Why should you trust us ?
                    Get to know about us</h4>

                <div className="lg:flex lg:flex-nowrap  lg:justify-center lg:gap-5 gap-3  flex flex-wrap  " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    {Data.map((info) => {


                        const { id, Image, rating, content, text } = info
                        return (<>
                            <div className="bg-[#FFFFFF] lg:w-[254px] w-[48%]  h-[211px] lg:h-[286px] shadow-lg rounded-2xl mt-8 lg:mt-[90px] lg:mb-[60px] p-5" key={id}>
                                <div className="bg-[#CFE5F2] lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-full lg:rounded-full flex justify-center mx-auto">
                                    <img className=" mx-auto lg:pt-4 pt-2 w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]" src={Image} alt="image" />
                                </div>

                                <p className="flex  mt-6 justify-center mx-auto font-Open-sans lg:text-[32px] text-[20px] text-[#062D45] font-extrabold">{rating}</p>
                                <p className=" flex justify-center lg:text-[20px] text-[14px] font-bold font-Open-sans text-[#062D45]">{content}</p>
                                <p className=" flex justify-center mt-2 lg:text-[16px] text-[12px] font-normal font-Open-sans text-[#062D45]">{text}</p>


                            </div>


                        </>)
                    })}
                </div>


            </div>

        </section>
    )
}

export default About


