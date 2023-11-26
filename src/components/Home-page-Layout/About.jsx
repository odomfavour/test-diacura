import { Data } from "./Data"

const About = () => {
    return (
        <section className="bg-[#094063]">

            <div className="container mx-auto w-[85%]">

                <h4 className="lg:pt-[40px] lg:w-[512px] lg:h-[98px] lg:flex lg:justify-center text-center mx-auto lg:text-[36px] font-Open-sans font-extrabold text-[#FFFFFF]  ">Why should you trust us ?
                    Get to know about us</h4>

                <div className="lg:flex lg:flex-nowrap lg:justify-center lg:gap-5 flex flex-wrap ">
                    {Data.map((info) => {

                        const { id, Image, rating, content } = info
                        return (<>
                            <div className="bg-[#FFFFFF] lg:w-[254px] lg:h-[286px] shadow-lg rounded-2xl lg:mt-[90px] p-5" key={id}>
                                <div className="bg-[#CFE5F2] lg:w-[60px] lg:h-[60px] rounded-full flex justify-center mx-auto">
                                    <img className="  pt-3 w-[37px] h-[37px]" src={Image} alt="image" />
                                </div>

                                <p className="flex  mt-2 justify-center mx-auto font-Open-sans text-[32px] text-[#062D45] font-extrabold">{rating}</p>
                                <p>{content}</p>
                                <p></p>


                            </div>


                        </>)
                    })}
                </div>


            </div>

        </section>
    )
}

export default About


