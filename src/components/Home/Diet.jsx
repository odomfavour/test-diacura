import doc from "/src/assets/images/home/diet.png"
import icon from "/src/assets/images/home/dash.png"


const Diet = () => {
    return (
        <section>
            <div className=" relative container mx-auto w-[85%] lg:flex lg:flex-row flex flex-col-reverse lg:pt-[90px] lg:gap-[250px]  lg:mb-[90px] mb-[60px] pt-[80px]
            ">
                <div className="pt-[35px]">
                    <h2 className=" lg:w-[487px] text-[#232323] font-Open-sans lg:text-[48px]  text-[24px] font-bold ">Diet plans</h2>

                    <p className="lg:w-[483px] lg:h-[165px] lg:mt-[50px] mt-4 lg:mb-0 mb-3 text-[16px] lg:text-[24px]  font-normal font-Open-sans text-[#232323] lg:leading-10">Tailor your diabetes journey with personalized diet plans on our app. Access curated, diabetes-friendly recipes, and nutritional tips to help you make informed choices for a healthier lifestyle.</p>
                    <button className="  lg:flex lg:text-[20px] w-[145px] h-[40px] font-Open-sans font-bold lg:mx-0 justify-items-center flex mx-auto  lg:justify-center lg:px-3  lg:pt-4  px-5 pt-2 mt-[20px] lg:w-[180px] lg:h-[56px] text-[#FFFFFF] bg-[#107BC0] lg:mt-[60px] rounded-md">Learn More</button>
                </div>
                <div>
                    <img className="z-[50px] lg:ml-10 " src={doc} alt="" />
                    <img className=" lg:flex md:flex hidden absolute z-[-50] top-[290px] right-[-117px]" src={icon} alt="icon" />

                </div>


            </div>

        </section>
    )
}

export default Diet
