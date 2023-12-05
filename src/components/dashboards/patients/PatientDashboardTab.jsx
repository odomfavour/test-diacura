/* eslint-disable react/jsx-key */
import icon from "/src/assets/images/patient-dashboard/Gluscose-graph.png";
import tab from "/src/assets/images/patient-dashboard/tab-progress.png";
import tab2 from "/src/assets/images/patient-dashboard/blood-stream.png";
import elispe from "/src/assets/images/patient-dashboard/Ellipse.png";
import elispe2 from "/src/assets/images/patient-dashboard/Ellipse-tab.png";
import btn from "/src/assets/images/patient-dashboard/Frame-gamebtn.png";
import { PiArrowLineDownBold } from "react-icons/pi";
import doctor from "/src/assets/images/patient-dashboard/doctor.png";
import QuizModalTwo from "./QuizModalTwo";
import QuizModalThree from "./QuizModalThree";
import QuizModalFour from "./QuizModalFour";
import QuizModalFive from "./QuizModalFive";
import QuizModalMessage from "./QuizModalMessage";
import { useState } from "react";
import Morning from "../../../assets/morning.svg";
import Noon from "../../../assets/noon.svg";
import Night from "../../../assets/night.svg";
import CaretRight from "../../../assets/caret-right.svg";
import CaretLeft from "../../../assets/caret-left.svg";
import FullStar from "../../../assets/full-star.svg"
import HalfStar from "../../../assets/half-star.svg"

const PatientDashboardTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState([]); // Array to hold modal sequence
  const [currentModalIndex, setCurrentModalIndex] = useState(0); // Index to track current modal

  // Function to start showing the modal sequence
  const showModalsInSequence = () => {
    // eslint-disable-next-line react/jsx-key
    setShowQuestionModal([
      <QuizModalTwo />,
      <QuizModalThree />,
      <QuizModalFour />,
      <QuizModalFive />,
      <QuizModalMessage />,
    ]);
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
        <p className="lg:text-[24px]  md:text-[24px] text-[14px] font-Open_Sans font-bold">
          Hello, Godwin! Welcome Back
        </p>
        <p className="text-[#666] font-Open-sans text-[16px] font-normal mt-2">
          Last seen: 20/11/2021 21:28
        </p>
      </div>

      <div className=" lg:flex lg:flex-row lg:gap-[75px]  md:gap-[10px] gap-3 mt-5 md:flex md:flex-row flex flex-col ">
        <div className="lg:w-[708px] md:w-[428px] md:h-[204px] w-[340px] shadow-lg rounded-2xl lg:h-[314px]  bg-[#FFF]">
          <div className="flex lg:p-10 p-2  lg:gap-[140px] ">
            <div>
              <div className="flex lg:gap-4 md:gap-4 gap-2">
                <img className="lg:w-[24px] md:w-[24px] w-[14px] lg:h-[24px] md:h-[24px] h-[14px]" src={tab2} alt="tab" />
                <p className="font-bold font-Open-sans  lg:text-[16px] md:text-[16px] text-[12px] w-[222px]">
                  Blood Glucose level
                </p>
              </div>
              <div className="relative lg:mt-7 md:mt-2 mt-7 ">
                <img className="lg:w-[182px] lg:h-[182px] md:w-[162px] md:h-[162px] w-[100px] " src={elispe} alt="" />
                <div className=" absolute lg:top-[30px] lg:left-[40px]  md:top-[20px] md:left-[30px] top-[5px] left-[20px] rounded-full lg:w-[108px] md:w-[108px] md:h-[108px] w-[62px] h-[62px] shadow-2xl bg-[#FFF] lg:h-[108px] p-3 md:p-5 lg:p-8">
                  <p className="font-bold lg:text-[16px] md:text-[16px] text-[12px] text-[#107BC0]">80/130</p>
                  <span className="font-medium  text-[12px] text-[#107BC0] mt-3">
                    mg/dL
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex lg:gap-4  md:gap-4 gap-1 ">
                <img className="lg:w-[24px] md:w-[24px] w-[14px] lg:h-[24px] md:h-[24px] h-[14px]" src={tab} alt="tab" />
                <p className=" font-bold font-Open-sans lg:text-[16px] md:text-[16px] text-[12px] w-[222px]">
                  Medication Adherence
                </p>
              </div>

              <div className="relative lg:mt-7 md:mt-2 mt-7 ">
                <img className="lg:w-[182px] lg:h-[182px] md:w-[162px] md:h-[162px] w-[100px] " src={elispe2} alt="" />
                <div className=" absolute lg:top-[38px] lg:left-[40px] md:top-[30px] md:left-[30px] top-[22px] left-[20px] rounded-full lg:w-[108px]  md:w-[98px] md:h-[98px] w-[62px] h-[62px] shadow-2xl bg-[#FFF] lg:h-[108px] md:p-5 p-2 lg:p-8">
                  <p className="font-bold lg:text-[16px] md:text-[16px] text-[12px] text-[#107BC0]">90/100</p>
                  <span className="font-medium  text-[12px] text-[#107BC0] mt-3">
                    Per (%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="lg:w-[610px] lg:h-[314px]" src={icon} alt="" />
        </div>


      </div>

      {/* second layer */}
      <div className="lg:flex  lg:flex-row  md:flex md:flex-col flex flex-col gap-2 lg:gap-[70px] lg:mt-[-10px] mt-4">
        <div>
          <div className="lg:col-span-3 col-span-4 row-span-1 lg:order-1 order-1 lg:w-[926px] lg:mt-[40px] bg-white p-4 rounded-[1.25rem]">
            <div className="flex gap-1 lg:w-3/5 w-full items-center">
              <div className="flex lg:gap-2 md:gap-2 gap-0 w-3/4 items-center justify-center p-2 py-1 border-b border-[#d9d9d9]">
                <p className="lg:text-md text-[11px] text-[#cccccc] font-bold">
                  Medical Prescription
                </p>
                <p className="flex items-center justify-center w-[1.4rem] h-[1.4rem] bg-[#f3f3f3] text-xs text-[#999999] rounded-full font-bold">
                  03
                </p>
              </div>
              <div className="flex lg:gap-2 md:gap-2 gap-0 w-3/4 items-center justify-center p-2 py-1 border-b border-[#d9d9d9]">
                <p className="lg:text-md text-[11px] text-[#cccccc] font-bold">
                  Treatment Plans
                </p>
                <p className="flex items-center justify-center w-[1.4rem] h-[1.4rem] bg-[#f3f3f3] text-xs text-[#999999] rounded-full font-bold">
                  05
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-row md:flex md:flex-row  flex flex-col lg:gap-6 mt-8">
              <div className="px-2">
                <div className="flex gap-3 mb-3">
                  <p className="text-sm text-[#262626] font-bold bg-[#d9f2e5] rounded-3xl text-center px-4 py-1">
                    Oral Usage
                  </p>
                  <p className="text-sm text-[#262626] font-bold bg-[#fff5cc] rounded-3xl text-center px-4 py-1">
                    Injection
                  </p>
                </div>
                <p className="font-bold text-xl">Diacura drug 1000mg</p>
                <p className="font-semibold text-sm text-[#666666] mb-2">
                  To regulate the blood sugar level
                </p>
                <p className="font-semibold text-xs text-[#666666]">
                  Note: To be taken after each meals
                </p>
              </div>
              <div className=" lg:w-[65%] md:w-[65%] w-[100%] bg-[#f7fcff] lg:mt-0 md:mt-0 mt-3 py-4 px-4 rounded-lg">
                <div className="flex justify-between text-[#787879]">
                  <div className="text-center">
                    <p className="text-sm font-semibold">Day</p>
                    <p className="text-xs font-semibold">(7am - 10am)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold">Night</p>
                    <p className="text-xs font-semibold">(7pm - 10pm)</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-6 my-2">
                  <img src={Morning} alt="" />
                  <div className="border-b-2 w-[10rem] border-[#2494e4]"></div>
                  <img src={Noon} alt="" />
                  <div className="border-dashed border-b-2 w-[10rem]"></div>
                  <img src={Night} alt="" />
                </div>
                <div className="flex justify-between px-3">
                  <p className="text-xs text-[#666666] font-bold">1 tablet</p>
                  <p className="text-xs text-[#666666] font-bold">
                    3hrs: 30mins Remaining
                  </p>
                  <p className="text-xs text-[#666666] font-bold">1 tablet</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 justify-end mt-3 me-5">
              <p className="font-semibold">1 of 3</p>
              <div className="flex items-center gap-6">
                <img className="cursor-pointer" src={CaretLeft} alt="" />
                <img className="cursor-pointer" src={CaretRight} alt="" />
              </div>
            </div>

            <div>


            </div>

          </div>
          <div className="lg:flex lg:justify-normal md:justify-normal justify-center  lg:flex-row md:flex md:flex-row flex flex-col lg:gap-[40px]">
            <div className="lg:w-[444px] lg:h-[232px] shadow-lg bg-[#FFFF] rounded-md mt-3 p-5">
              <div className="flex justify-between">
                <p className="font-open-sans font-bold text-[18px]">Recent Report</p>
                <p className="font-open-sans font-semibold text-[12px] lg:mt-1 text-[#666]"> 23 Nov 2023</p>
              </div>
              <div className=" mt-4 lg:w-[405px] lg:h-[144px] w-[295px]  p-4 shadow-xxl bg-[#FFFF] rounded-2xl ">
                <p className="font-open-sans font-bold text-[14px] text-[#666]">Diabetes Management Update</p>
                <p className="font-open-sans font-bold text-[12px] lg:w-[290px] mt-2 lg:h-[64px]">diabetic Type 2, follows treatment plan. Recent visit shows stable blood sugar. Continue meds, diet, and monitoring.
                </p>
                <button className="flex gap-2 lg:ml-[250px] md:ml-[140px] ml-[160px] lg:mt-0 md:mt-3 mt-3 justify-end text-[#107BC0]"> <PiArrowLineDownBold />
                  <span className="font-open-sans text-[14px] font-bold ">DownLoad</span></button>

              </div>
            </div>

            <div className="lg:w-[444px] lg:h-[232px] shadow-lg bg-[#FFFF] rounded-2xl mt-4 ">
              <div className="flex justify-between">
                <div className=" lg:flex lg:p-3 md:flex md:p-3 flex p-3 gap-3">
                  <p className="font-open-sans font-bold text-[18px]">Available doctors</p>
                  <p className="flex items-center justify-center w-[1.4rem] h-[1.4rem] bg-[#f3f3f3] text-xs text-[#999999] rounded-full font-bold">03</p>
                </div>

                <p className="flex p-4 font-open-sans text-[14px] font-bold text-[#3891CA]">see more</p>
              </div>

              <div className="flex   shadow-xxl  rounded-2xl lg:mt-[5px] p-2  bg-[#FFFF] lg:gap-6 gap-2  px-5 lg:ml-2 lg:h-[144px] lg:w-[420px]">
                <div className="h-full lg:w-[9rem] w-[6rem] p-2">
                  <img className="rounded-xl w-full" src={doctor} alt="" />
                </div>
                <div className="w-[16rem]">
                  <p className="font-bold lg:text-[1rem] text-sm">Dr. Michael Jons</p>
                  <p className="font-semibold text-xs text-[#666] w-[10rem]">Endocrinologist / Generalist.</p>
                  <div className="flex lg:gap-4 gap-2 lg:my-2 my-1">
                    <div className="flex items-center">
                      <img className="h-3" src={FullStar} alt="" />
                      <img className="h-3" src={FullStar} alt="" />
                      <img className="h-3" src={FullStar} alt="" />
                      <img className="h-3" src={FullStar} alt="" />
                      <img className="h-3" src={HalfStar} alt="" />
                    </div>
                    <p className="text-[#999] font-bold text-xs">4.8</p>
                    <p className="text-[#999] font-semibold text-xs">(1,200)</p>
                  </div>
                  <button className="hidden lg:block bg-[#107bc0] text-white text-sm font-bold py-3 px-6 rounded-md lg:mt-2 outline-none border-none" onClick={() => bookAppointment(index)}>
                    Book Appointment
                  </button>
                </div>
              </div>






            </div>
          </div>

        </div>


        <div className="relative">


          <div className="lg:w-[392px] lg:h-[504px] shadow-lg bg-[#FFFF] rounded-2xl lg:mt-[40px] p-4">
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
            <button onClick={showModalsInSequence} className="mt-8 flex justify-center mx-auto">
              <img src={btn} alt="" />
            </button>

            <p className="mt-5 flex justify-center mx-auto font-bold text-[12px] font-Open-sans text-[#3891CA]">
              Terms and conditions apply
            </p>
          </div>
          {showModal && <QuizModalTwo displayNextModal={displayNextModal} showModalsInSequence={showModalsInSequence} setCurrentModalIndex={setCurrentModalIndex} currentModalIndex={currentModalIndex} setShowQuestionModal={setShowQuestionModal} showQuestionModal={showQuestionModal} />}





        </div>






      </div>

      {/* <div className="lg:flex lg:flex-row md:flex md:flex-row  flex flex-col lg:gap-[100px] ">
        <div>
          

          </div>
          
        </div>
       


      </div> */}
    </section>
  );
};

export default PatientDashboardTab;
