import { Link } from "react-router-dom";
import doctor from "../../assets/images/home/doctor.jpg";
import chevron_left from "../../assets/icons/home/chevron-left.svg";
import chevron_right from "../../assets/icons/home/chevron-right.svg";
import slide_count from "../../assets/icons/home/slide-count.svg";
import icon from "/src/assets/images/home/doc-layer.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';


const OurDoctors = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []); // Run this effect only once after the component mounts
  return (
    <section>
      <div className="max-w-[35rem] lg:max-w-[75.0625rem]  mx-auto px-[1.5rem] mb-[7.19rem] lg:mb-[11.81rem] mt-[6.25rem] lg:mt-[7.88rem]">
        <div className="text-center">
          <h2 className="text-[1.5rem] lg:text-[3rem] font-bold leading-normal mb-[3.5rem] lg:mb-[5.56rem]">
            Our Doctors
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[3rem] lg:gap-[3.38rem] lg:border lg:border-[#CCC] lg:rounded-[0.875rem] lg:shadow-bigBox ">
          <div className=" relative lg:w-[30.5rem] lg:h-[26.9325rem] z-[1000px]">
            <img
              src={doctor}
              alt="A doctor"
              className="w-full lg:h-full lg:rounded-l-[0.875rem] z-[1000px]"
            />
            <img className=" absolute top-[160px] z-[-80] left-[-214px] lg:flex md:flex hidden" src={icon} alt="" />
          </div>
          <div className="lg:w-[40.5625rem]">
            <h4 className="text-[#232323] text-[1.125rem] lg:text-[1.5rem] font-bold leading-normal mb-[0.5rem] lg:mb-[0.88rem]">
              Counsellor
            </h4>
            <h3 className="text-[#232323] text-[1.5rem] lg:text-[2.25rem] font-bold leading-normal mb-[1.5rem]">
              Dr. Michael Jons
            </h3>
            <p className="text-[#666] text-base lg:text-[1.25rem] font-semibold lg:font-normal leading-normal mb-[2.25rem] lg:mb-[2.5rem]">
              Provide expert advice on medical and healthcare issues to
              individuals, organizations, or healthcare facilities. Evaluate and
              suggest improvements to enhance the quality and efficiency of
              healthcare services.
            </p>
            <Link
              to={"/"}
              className="lg:flex items-center hover:bg-[#9353e5] lg:justify-center lg:mx-0 flex justify-center mx-auto bg-[#107BC0] w-[9.0625rem] md:w-[11.25rem] h-[2.5rem] md:h-[3.5rem] px-[2rem] py-[0.75rem] md:py-[1.12rem] text-white text-[0.875rem] md:text-[1.25rem] font-bold leading-normal rounded-[0.25rem]"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mt-[2.25rem] lg:mt-[3.75rem] flex items-center justify-between">
          <div className="w-[71px]"></div>
          <div className="">
            <img src={slide_count} alt="slide count" />
          </div>
          <div className="flex items-center gap-[1.12rem]">
            <button className="bg-[#062D45] w-[1.625rem] h-[1.625rem] rounded-full flex items-center justify-center">
              <img src={chevron_left} alt="left" />
            </button>
            <button className="bg-[#062D45] w-[1.625rem] h-[1.625rem] rounded-full flex items-center justify-center">
              <img src={chevron_right} alt="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
