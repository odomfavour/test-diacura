import dashboardBgDesktop from "/src/assets/images/home/dashboard.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';



const OurDashboard = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []); // Run this effect only once after the component mounts
  return (
    <section className="overflow-x-clip">
      <div className="bg-[#094063] px-[2.19rem] py-[4.38rem] lg:pt-[5.31rem] lg:pb-[9.06rem] lg:pr-[8.25rem] lg:pl-[9.94rem] flex flex-col items-center gap-[3.5rem] lg:gap-[6rem] text-center">
        <div className="text-white">
          <h2 className="text-[1.5rem] font-bold leading-normal mb-[1.88rem] lg:text-[3rem] lg:font-extrabold">
            Our Dashboard
          </h2>
          <p className="max-w-[56.75rem] text-base font-semibold leading-normal lg:text-[1.5rem] lg:font-normal">
            We offer in-depth healthcare to individuals of all kinds suffering
            from Diabetes via diagnosis, treatment prescriptions, follow-up and
            even health education
          </p>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="3000">
          <img
            src={dashboardBgDesktop}
            alt="Dashboard"
            className="w-full max-w-[72.6875rem] max-h-[47.6875rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurDashboard;
