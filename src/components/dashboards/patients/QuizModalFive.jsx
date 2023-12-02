
import { FaLongArrowAltLeft } from "react-icons/fa";
import QuizModalMessage from "./QuizModalMessage";

const QuizModalFive = () => {
    return (
        <section>
            <div className="lg:w-[322px] lg:h-[484px] shadow-lg bg-[#FFFF] rounded-md mt-5 p-4">
                <p className="text-[16px] font-Open-sans font-bold text-[#094063]">Topic: Nutrition Knowledge</p>
                <p>Question 4 of 5</p>
                <p>What is the glycemic index, and how does it impact blood sugar levels?</p>

                <form>
                    <div className="lg:flex gap-2 lg:mt-[40px] font-Open-sans">
                        <input
                            type="checkbox"
                            className="w-[20px] h-[20px]"

                        />
                        <p className="font-Opens-sans">Measures the sweetness of food
                        </p>
                    </div>
                    <div className="lg:flex gap-2 lg:mt-[20px] font-Open-sans">
                        <input
                            type="checkbox"
                            className="w-[20px] h-[20px]"

                        />
                        <p className="font-Opens-sans">Ranks how quickly a food causes blood sugar to rise</p>
                    </div>
                    <div className="lg:flex gap-2 lg:mt-[20px] font-Open-sans">
                        <input
                            type="checkbox"
                            className="w-[20px] h-[20px]"

                        />
                        <p className="font-Opens-sans">Indicates the calorie content of a food</p>


                    </div>
                    <div className="flex  gap-3 mt-4 justify-end">
                        <button className="border w-[48px] h-[40px] border-[#107BC0] rounded p-3"><FaLongArrowAltLeft /></button>
                        <button className="bg-[#CFE5F2] w-[198px] h-[40px] rounded ">Next</button>

                    </div>

                </form>
                <QuizModalMessage />
            </div>

        </section>
    )
}

export default QuizModalFive
