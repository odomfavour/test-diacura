import icon from "/src/assets/images/doctors-dashboard/patients-tab.png"
import icon2 from "/src/assets/images/doctors-dashboard/clipboard-list.png"
import icon3 from "/src/assets/images/doctors-dashboard/user-group.png"
import icon4 from "/src/assets/images/doctors-dashboard/trending-up.png"
import icon5 from "/src/assets/images/doctors-dashboard/list.png"
import doc from "/src/assets/images/doctors-dashboard/doctor.png"
import clock from "/src/assets/images/doctors-dashboard/clock.png"
import chat from "/src/assets/images/doctors-dashboard/chat-tab.png"
import message from "/src/assets/images/doctors-dashboard/document-text.png"
import list from "/src/assets/images/doctors-dashboard/chat-list.png"
import arrow from "/src/assets/images/doctors-dashboard/arrow-right.png"
import trash from "/src/assets/images/doctors-dashboard/trash.png"

const DoctorsDashboardTab = () => {
  return (
    <section>
      <p className="font-open-sans lg:text-[24px] md:text-[24px] text-[20px] font-bold text-[#020D14]"> Hello, Godwin! Welcome Back</p>
      <p className="font-open-sans lg:text-[16px] md:text-[16px] text-[20px] font-bold text-[#666]">Last seen: 20/11/2021 21:28</p>

      <div className="lg:mt-4  mt-4 md:mt-4 lg:flex  md:flex md:flex-wrap flex flex-wrap lg:gap-[90px]">
        {/* layer one */}
        <div>
          <div className=" lg:flex lg:flex-row md:flex md:flex-row flex flex-col lg:gap-[20px] gap-5">
            <div className=" relative shadow-lg lg:w-[461px] md:w-[361px] lg:h-[180px] md:h-[180px] p-6 bg-[#D9F2E5] rounded-xl">
              <div className=" flex lg:gap-[10px] ">
                <img src={icon5} alt="icon5" />
                <p className="lg:text-[16px] font-Open-sans font-bold">Total Appointments</p>
              </div>
              <h2 className="lg:text-[48px] font-Open-sans font-bold  "> 2,300</h2>
              <div className=" flex gap-[10px]">
                <img src={icon4} alt="icon4" />
                <p>35% higher than yesterday</p>
              </div>

              <img className=" lg:flex md:flex hidden absolute top-0 left-[270px]" src={icon2} alt="icon2" />
            </div>

            <div className=" relative shadow-lg lg:w-[461px] md:w-[361px] lg:h-[180px] md:h-[180px] bg-[#D0EAFB] p-5 rounded-xl">
              <div className=" flex lg:gap-[10px]">
                <img src={icon5} alt="icon5" />
                <p className="lg:text-[16px] font-Open-sans font-bold">Total Appointments</p>
              </div>
              <h2 className="lg:text-[48px] font-Open-sans font-bold  "> 2,300</h2>
              <div className=" flex gap-[10px]">
                <img src={icon4} alt="icon4" />
                <p>35% higher than yesterday</p>
              </div>
              <img className=" lg:flex md:flex hidden absolute top-0 left-[300px]" src={icon3} alt="icon2" />
            </div>

          </div>

          <div className="shadow-lg lg:w-[961px] md:w-[361px] lg:h-[287px] md:h-[180px] w-[341px] bg-[#FFFF] rounded-xl p-5 mt-4 lg:mt-5">
            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="font-open-sans lg:text-[18px] text-[14px]">
                  Upcoming  appointments
                </div>
                <div className="w-[14px] h-[16px] bg-[#CFE5F2] rounded ">10</div>
              </div>
              <div className="flex gap-5">
                <p className="font-open-sans lg:text-[18px] text-[14px] text-[#107BC0]">See More</p>
                <img src={arrow} alt="" />

              </div>

            </div>
            <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-[43px] lg:mt-4">
              <div >
                <div className="flex gap-[30px] mt-2">
                  <div>
                    <img className="" src={doc} alt="doc" />
                  </div>
                  <div>
                    <p className="font-open-sans lg:text-[16px] text-[12px] font-bold mt-2">Mrs. Promise Okohlame</p>
                    <p className="font-open-sans lg:text-[12px]  text-[12px] font-semibold  mt-2">Suffering from diabetic Type-A</p>
                    <p className="font-open-sans lg:text-[10px] text-[10px]  font-semibold  mt-2">Age: 45 years  | Sex: Female  </p>
                  </div>
                  <img className="lg:w-[24px] lg:h-[24px] h-[18px] w-[18px]" src={list} alt="list" />

                </div>
                <div className=" flex gap-5 mt-5">
                  <button className="font-open-sans font-bold lg:text-[14px]  text-[10px]  w-[211px] h-[40px] text-[#EB3434] rounded bg-[#FFF5F5]">Cancel appointment</button>
                  <button className="font-open-sans font-bold lg:text-[14px]  text-[10px]  w-[211px] h-[40px] text-[#FFFFFF] rounded bg-[#107BC0]">Reschedule appointment</button>
                </div>
              </div>
              <div >
                <div className="flex gap-[34px]">
                  <div>
                    <img className="" src={doc} alt="doc" />
                  </div>
                  <div>
                    <p className="font-open-sans lg:text-[16px] text-[12px]  font-bold mt-2">Mrs. Promise Okohlame</p>
                    <p className="font-open-sans lg:text-[12px] text-[12px]  font-semibold  mt-2">Suffering from diabetic Type-A</p>
                    <p className="font-open-sans lg:text-[10px]  text-[12px] font-semibold  mt-2">Age: 45 years  | Sex: Female  </p>
                  </div>
                  <img className="lg:w-[24px] lg:h-[24px] h-[18px] w-[18px]" src={list} alt="list" />

                </div>
                <div className="mt-5 flex gap-3">
                  <button className="font-open-sans font-bold lg:text-[14px]  text-[10px] rounded w-[211px] h-[40px] text-[#EB3434] bg-[#FFF5F5]">Cancel appointment</button>
                  <button className="font-open-sans font-bold lg:text-[14px] text-[10px] rounded  w-[211px] text-[#FFFFFF] h-[40px] bg-[#107BC0]">Reschedule appointment</button>
                </div>
              </div>
            </div>



          </div>

          <div className="shadow-lg lg:w-[961px] md:w-[361px] lg:h-[279px] md:h-[180px] bg-[#FFFF] rounded-xl p-5 lg:mt-5">
            <div>
              <p>Patient request</p>
            </div>

            <div className="lg:w-[899px] lg:h-[40px] bg-[#CFE5F2] rounded-lg mt-3">

            </div>

            <div className="flex gap-[40px]">
              <img className=" rounded-xl mt-3" src={doc} alt="doc" />
              <p className=" font-open-sans lg:text-[16px] font-bold lg:mt-[40px]">Mrs. Promise Okohlame</p>
              <p className=" font-open-sans lg:text-[12px] font-semibold  lg:mt-[40px]">Age: 45 years</p>
              <p className="font-open-sans lg:text-[10px] font-semibold  lg:mt-[40px]">   Female  </p>
              <button className="lg:w-[124px] lg:h-[32px] bg-[#107BC0]  font-Open-sans font-bold text-[#FFFF] rounded lg:mt-[32px] ">Accept</button>
              <img className="w-[24px] h-[24px] mt-8" src={trash} alt="trash" />
            </div>
            <div className="flex gap-[40px]">
              <img className=" rounded-xl mt-3" src={doc} alt="doc" />
              <p className=" font-open-sans lg:text-[16px] font-bold lg:mt-[40px]">Mrs. Promise Okohlame</p>
              <p className=" font-open-sans lg:text-[12px] font-semibold  lg:mt-[40px]">Age: 45 years</p>
              <p className="font-open-sans lg:text-[10px] font-semibold  lg:mt-[40px]">   Female  </p>
              <button className="lg:w-[124px] lg:h-[32px] bg-[#107BC0] font-Open-sans font-bold text-[#FFFF] rounded lg:mt-[32px] ">Accept</button>
              <img className="w-[24px] h-[24px] mt-8" src={trash} alt="trash" />
            </div>

          </div>
        </div>


        {/* layer two */}
        <div className="lg:flex lg:mt-0 md:mt-0 mt-4 lg:flex-col md:flex md:flex-col flex flex-col lg:gap-[40px]">
          <div className="shadow-lg lg:w-[332px] md:w-[361px] lg:h-[381px] md:h-[180px] bg-[#FFF]  p-5 rounded-xl">
            <p className="font-open-sans lg:text-[16px] font-bold">Next patients</p>
            <img className="flex justify-center mx-auto rounded-xl mt-3" src={doc} alt="doc" />
            <p className="flex justify-center mx-auto font-open-sans lg:text-[16px] font-bold mt-2">Mrs. Promise Okohlame</p>
            <p className="flex justify-center mx-auto font-open-sans lg:text-[12px] font-semibold  mt-2">Suffering from diabetic Type-A</p>
            <p className="flex justify-center mx-auto font-open-sans lg:text-[10px] font-semibold  mt-2">Age: 45 years  | Sex: Female  </p>
            <div className="flex  gap-2 justify-center mx-auto">
              <img className="w-[16px] h-[16px] text-[#404040] font-open-sans lg:text-[10px] font-semibold  mt-2 " src={clock} alt="" />
              <p className="font-open-sans lg:text-[10px] font-semibold mt-2">Start: 1:00am - Stop:  4:00pm</p>
            </div>

            <div className="flex gap-2 mt-[60px]">
              <button className="w-[147px] h-[48px] p-2 flex justify-center mx-auto bg-[#107BC0] pt-4 rounded-md">
                <img src={chat} alt="chat" />
                <span className="font-open-sans lg:text-[10px] text-[10px] font-semibold text-[#FFF]">Send message</span>
              </button>

              <button className=" flex w-[147px] h-[48px] p-2  justify-center mx-auto rounded-md pt-4 border border-[#107BC0]">
                <img src={message} alt="message" />
                <span className="font-open-sans lg:text-[10px]  text-[10px] font-semibold">Download report</span>
              </button>


            </div>

          </div>
          <div className="lg:mt-0 md:mt-0 mt-3">
            <img src={icon} alt="" />
          </div>

        </div>

      </div>

    </section>
  )
}

export default DoctorsDashboardTab