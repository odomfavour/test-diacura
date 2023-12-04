
import success from "/src/assets/images/patient-dashboard/Success-icon.png"
const QuizModalMessage = () => {
    return (
        <section>
            <div className="lg:w-[322px] lg:h-[484px] shadow-lg bg-[#FFFF] rounded-md mt-5 p-4">
                <p>Great work!</p>
                <img src={success} alt="" />
                <p>Congratulations</p>
                <p>You score 4 out of 5 questions. </p>


                <p>Next question will be up in 10 minutes.</p>

                <button className="w-[260px] h-[40px] bg-[#107BC0] rounded">Go back to home</button>
            </div>


        </section>
    )
}

export default QuizModalMessage
