import { Link } from "react-router-dom";
import testimony from "../../assets/images/home/testimony.svg";
import testimony1 from "../../assets/images/home/testimony1.svg";
import quote from "../../assets/icons/home/quote.svg";
import vectors from "../../assets/icons/home/vectors.svg";

const Testimonials = () => {
  return (
    <section>
      <div className="relative lg:flex justify-between items-center bg-[#F5FBFE] pt-[5rem] pb-[7.0625rem] pr-[1.53125rem] pl-[1.46875rem] lg:gap-[8.62rem] lg:py-[8.56rem] xl:pl-[5.81rem] xl:pr-[6.12rem] text-center lg:text-left">
        <div className="lg:max-w-[29.375rem]">
          <h2 className="text-[1.5rem] xl:text-[2.5rem] text-[#020D14] font-bold leading-normal mb-[2rem] lg:mb-[2.44rem]">
            Check out what our clients are saying about us
          </h2>
          <p className="text-[1.25rem] lg:text-[1.125rem] text-[#666] font-semibold lg:font-bold leading-normal mb-[7.38rem] lg:mb-[3.06rem] lg:max-w-[16.3125rem]">
            So what are you waiting for join us now
          </p>
          <div className="absolute lg:static left-0 bottom-[7.06rem] flex justify-center lg:justify-start w-full">
            <Link
              to={"/"}
              className="flex items-center justify-center bg-[#107BC0] w-[9.0625rem] md:w-[11.25rem] h-[2.5rem] md:h-[3.5rem] px-[2rem] py-[0.75rem] md:py-[1.12rem] text-white text-[0.875rem] md:text-[1.25rem] font-bold leading-normal rounded-[0.25rem]"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="pb-[6.56rem] flex flex-col lg:flex-row gap-[3.38rem] lg:gap-[0.81rem] items-center">
          <div className="relative z-20 bg-white w-[19.625rem] rounded-[2.375rem] shadow-testimonialBox px-[2.75rem] pt-[6.81rem] text-center">
            <div className="flex flex-col gap-[0.69rem] items-center mb-[0.81rem] absolute top-[-1.88rem] left-0 w-full">
              <img src={testimony} alt="testimony" />
              <img src={quote} alt="quote" />
            </div>
            <div className="pb-[3.44rem] ">
              <h3 className="text-[1.25rem] text-[#020D14] font-bold leading-normal mb-[1.88rem]">
                John Eze
              </h3>
              <p className="text-base text-[#999] font-semibold leading-normal">
                &quot;Transformative! This app made managing my diabetes
                seamless. Personalized plans, expert guidance, and a supportive
                community. Grateful for this game-changer!&quot;
              </p>
            </div>
          </div>
          <div className="relative z-20 bg-white w-[19.625rem] rounded-[2.375rem] shadow-testimonialBox px-[2.75rem] pt-[6.81rem] text-center">
            <div className="flex flex-col gap-[0.69rem] items-center mb-[0.81rem] absolute top-[-1.88rem] left-0 w-full">
              <img src={testimony1} alt="testimony" />
              <img src={quote} alt="quote" />
            </div>
            <div className="pb-[3.44rem] ">
              <h3 className="text-[1.25rem] text-[#020D14] font-bold leading-normal mb-[1.88rem]">
                Sarah Alex
              </h3>
              <p className="text-base text-[#999] font-semibold leading-normal">
                &quot;As a long-time diabetes warrior, Diacura has
                revolutionized my approach. The comprehensive tracking, expert
                advice, and vibrant community inspire me daily.&quot;
              </p>
            </div>
          </div>
          {/* background vectors  */}
          <div className="hidden lg:block absolute right-0 top-[0.7rem] z-10">
            <img src={vectors} alt="background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
