/* eslint-disable react/jsx-key */
import icon from "/src/assets/images/patient-dashboard/Gluscose-graph.png";
import tab from "/src/assets/images/patient-dashboard/tab-progress.png";
import tab2 from "/src/assets/images/patient-dashboard/blood-stream.png";
import elispe from "/src/assets/images/patient-dashboard/Ellipse.png";
import elispe2 from "/src/assets/images/patient-dashboard/Ellipse-tab.png";
import frame from "/src/assets/images/patient-dashboard/frame.png";
import btn from "/src/assets/images/patient-dashboard/Frame-gamebtn.png";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { PiArrowLineDownBold } from "react-icons/pi";
import doctor from "/src/assets/images/patient-dashboard/doctor.png";
import QuizModalTwo from "./QuizModalTwo";
import QuizModalThree from "./QuizModalThree";
import QuizModalFour from "./QuizModalFour";
import QuizModalFive from "./QuizModalFive";
import QuizModalMessage from "./QuizModalMessage";
import { useState } from "react";


const PatientDashboardTab = () => {

  const [showModal, setShowModal] = useState(false)
  const [showQuestionModal, setShowQuestionModal] = useState([]);// Array to hold modal sequence
  const [currentModalIndex, setCurrentModalIndex] = useState(0); // Index to track current modal

  // Function to start showing the modal sequence
  const showModalsInSequence = () => {
    // eslint-disable-next-line react/jsx-key
    setShowQuestionModal(
      [<QuizModalTwo />,
      <QuizModalThree />,
      <QuizModalFour />,
      <QuizModalFive />,
      <QuizModalMessage />,]);
    setCurrentModalIndex(0); // Start from the first modal
    setShowModal(true);
  };

  // Function to display the next modal in sequence
  const displayNextModal = () => {
    if (currentModalIndex < showQuestionModal.length - 1) {
      setCurrentModalIndex(currentModalIndex + 1);
    } else {
      // Reset the modals or perform any other actions when the sequence ends
      setShowQuestionModal([]);
      setCurrentModalIndex(0);
      setShowModal(false);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      showModalsInSequence();
    }
  };


  return (
    <section>
      <div>
        <p className="text-[24px] font-Open_Sans font-bold">
          Hello, Godwin! Welcome Back
        </p>
        <p className="text-[#666] font-Open-sans text-[16px] font-normal mt-2">
          Last seen: 20/11/2021 21:28
        </p>
      </div>

      <div className="flex gap-[100px] mt-5">
        <div className="lg:w-[608px]  shadow-lg rounded-2xl lg:h-[314px] bg-[#FFF]">
          <div className="flex p-10 justify-between">
            <div>
              <div className="flex gap-4">
                <img src={tab2} alt="tab" />
                <p className="font-bold font-Open-sans text-[16px]">
                  Blood Glucose level
                </p>
              </div>
              <div className="relative mt-7">
                <img src={elispe} alt="" />
                <div className=" absolute top-[15px] left-[40px] rounded-full lg:w-[108px] shadow-2xl bg-[#FFF] lg:h-[108px] p-8">
                  <p className="font-bold text-[16px] text-[#107BC0]">80/130</p>
                  <span className="font-medium  text-[12px] text-[#107BC0] mt-3">
                    mg/dL
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-4 ">
                <img src={tab} alt="tab" />
                <p className=" font-bold font-Open-sans text-[16px]">
                  Medication Adherence
                </p>
              </div>

              <div className="relative mt-3">
                <img src={elispe2} alt="" />
                <div className=" absolute top-[38px] left-[40px] rounded-full lg:w-[108px] shadow-2xl bg-[#FFF] lg:h-[108px] p-8">
                  <p className="font-bold text-[16px] text-[#107BC0]">90/100</p>
                  <span className="font-medium  text-[12px] text-[#107BC0] mt-3">
                    Per (%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={icon} alt="" />
        </div>
      </div>

      <div className="flex gap-[100px] ">
        <div>
          <div className=" lg:w-[756px] shadow-lg lg:h-[237px] bg-[#FFF] rounded-md mt-5 p-6">
            <div className="flex gap-3">
              <p className="font-bold text-[16px] font-Open-sans text-[#3891CA] border border-b-lime-950">
                Medical Prescription
              </p>
              <p className="w-[14px] h-[16px] shadow-lg rounded-full bg-[#ECF7FD] text-[12px] font-bold">
                03
              </p>
              <p className="font-bold text-[16px] font-Open-sans text-[#CCC]">
                Treatment plans
              </p>
              <p className="w-[14px] h-[16px] shadow-lg rounded-full bg-[#ECF7FD] text-[12px] font-bold">
                05
              </p>
            </div>

            <div className="flex  mt-[20px] gap-[80px]">
              <div>
                <div className="flex gap-4">
                  <p className="lg:w-[79px] lg:h-[24px] bg-[#D9F2E5] text-[10px] rounded-xl p-1 px-3">
                    Oral usage
                  </p>
                  <p className="lg:w-[79px] lg:h-[24px] bg-[#FFF5CC] text-[10px]  rounded-xl p-1 px-5">
                    Injection
                  </p>
                </div>
                <p className=" lg:w-[211px] lg:h-[27px] text-[20px] font-bold font-Open-sans">
                  Diacura drug 1000mg
                </p>
                <p className="text-[12px] font-semibold font-Open-sans mt-2">
                  To regulate the blood sugar level
                </p>
                <p className="text-[10px] font-semibold font-Open-sans text-[#999] mt-2">
                  {" "}
                  Note: To be taken after each meals
                </p>
              </div>
              <div className="">
                <img src={frame} alt="" />
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <p>1 0f 3</p>
              <MdKeyboardArrowLeft />
              <MdKeyboardArrowRight />

            </div>

          </div>
          <div className="flex gap-4">
            <div className="lg:w-[357px] lg:h-[232px] shadow-lg bg-[#FFFF] rounded-md mt-3 p-5">
              <div className="flex justify-between">
                <p>Recent Report</p>
                <p> 23 Nov 2023</p>
              </div>
              <div className=" mt-4 lg:w-[325px] lg:h-[144px] shadow-lg bg-[#FFFF] ">
                <p>Diabetes Management Update</p>
                <p>diabetic Type 2, follows treatment plan. Recent visit shows stable blood sugar. Continue meds, diet, and monitoring.
                </p>
                <button > <PiArrowLineDownBold />DownLoad</button>

              </div>
            </div>

            <div className="lg:w-[382px] lg:h-[232px] shadow-lg bg-[#FFFF] rounded-md mt-3 ">
              <div className="flex justify-between">
                <div className="flex p-4">
                  <p>Available doctors</p>
                  <p>03</p>
                </div>

                <p className="flex p-4">see more</p>
              </div>
              <div className=" lg:w-[344px] lg:h-[150px] shadow-lg bg-[#FFFF] p-4 ">
                <div className="flex">
                  <div >
                    <img className="rounded-md" src={doctor} alt="" />

                  </div>
                  <div>
                    <p>Dr. Michael Jons</p>
                    <p>Endocrinologist / Generalist.s</p>

                    <div>
                      <p></p>
                      <p>4.8</p>
                      <p>(1,200)</p>

                    </div>
                  </div>
                </div>

                <button>Book appointment</button>

              </div>


            </div>
          </div>
        </div>
        <div className="relative">


          <div className="lg:w-[322px] lg:h-[484px] shadow-lg bg-[#FFFF] rounded-md mt-5 p-4">
            <p className="lg:w-[156px] lg:h-[80px] text-[48px]  mt-3  text-[#094063] flex justify-center mx-auto font-extrabold font-Open-sans leading-10 text-center">
              Game Quiz
            </p>
            <p className="  font-semibold text-[14px] flex justify-center mx-auto mt-6 text-center lg:w-[217px] lg:h-[57px]">
              Test your knowledge about medicine and drugs and win an amazing
              reward.{" "}
            </p>
            <p className="mt-[70px] font-semibold text-[14px] text-center lg:w-[168px] lg:h-[38px] flex justify-center mx-auto">
              Click the “PLAY” button to start playing.
            </p>
            <button onClick={toggleModal} className="mt-8 flex justify-center mx-auto">
              <img src={btn} alt="" />
            </button>

            <p className="mt-5 flex justify-center mx-auto font-bold text-[12px] font-Open-sans text-[#3891CA]">
              Terms and conditions apply
            </p>
          </div>
          {showModal && <QuizModalTwo displayNextModal={displayNextModal} />}





        </div>


      </div>
    </section>
  );
};

export default PatientDashboardTab;
