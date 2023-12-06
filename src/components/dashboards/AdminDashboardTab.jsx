import doc from "/src/assets/images/admin-dashboard/user.png"
import patients from "/src/assets/images/admin-dashboard/user-group.png"
import appointments from "/src/assets/images/admin-dashboard/clipboard-check.png"
import arrow from "/src/assets/images/admin-dashboard/arrow-circle-right.png"
import analytics from "/src/assets/images/admin-dashboard/User-activity.png"
import data from "/src/assets/images/admin-dashboard/Appointments-tab.png"
import activity from "/src/assets/images/admin-dashboard/activity.png"
import { HiDotsVertical } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";



const AdminDashboardTab = () => {

  const OverViewtab = [
    { id: 1, Image: doc, header: "Total Doctors", Rate: "0.00", content: "No data available", backgroundColor: "#CFE5F2" },
    { id: 2, Image: patients, header: "Total Patients", Rate: "0.00", content: "No data available", backgroundColor: "#D9F2E5" },
    { id: 3, Image: appointments, header: "Total Appointments", Rate: "0.00", content: "No data available", backgroundColor: "#FFF5CC" },
  ];
  return (
    <section>

      <div>
        <p className="text-[20px] font-normal font-open-sans">Hello, Godwin! Welcome Back</p>
        <div className="flex gap-6">
          <h1 className="lg:text-[28px] font-bold font-Open-sans"> Overview</h1>
          <div className="flex gap-3">
            <p className="font-Open-sans font-semibold text-[12px] mt-[14px]">Last login: 22/11/2023 | 05:50 PM</p>
            <FaChevronDown className="mt-[14px]" />
          </div>

        </div>

      </div>

      <div className=" lg:flex lg:flex-row lg:flex-nowrap  md:flex md:flex-row  md:flex-wrap flex flex-col lg:gap-[80px] md:gap-[40px] gap-9 mt-4">
        {OverViewtab.map((view) => {

          const { id, Image, header, Rate, content, backgroundColor } = view

          const contentStyle = {
            backgroundColor: backgroundColor, // Apply the background color to the content section
            // Other styles if needed
          };
          return (
            <div key={id} className="lg:w-[935px] lg:h-[180px] md:w-[335px] md:h-[180px] h-[180px] rounded-md border border-[#CFE5F2]">
              <div className="lg:flex lg:flex-nowrap md:flex md:flex-wrap flex p-3 lg:gap-4 md:gap-4 gap-4">
                <div className="lg:w-[32px] lg:h-[32px] bg-[#094063] rounded-md">
                  <img className="p-1 px-1" src={Image} alt="icon" />
                </div>
                <p className="text-[16px] font-bold font-Open-sans mt-1">{header}</p>

              </div>
              <p className="p-3 text-[40px] mt-[-20px] font-bold text-[#999] font-Open-sans" >{Rate}</p>
              <div className="lg:w-[303px] lg:h-[40px] md:w-[403px] w-[303px] h-[40px] p-3 rounded-md">
                <div className=" lg:w-[323px] md:w-[303px] w-[303px] h-[40px] flex justify-between p-2 rounded-md mt-[-10px] " style={contentStyle}>
                  <p className="text-[#232323] font-normal text-[14px font-Open-sans]">{content}</p>
                  <img src={arrow} alt="arrow" />
                </div>

              </div>

            </div>
          )

        })}


      </div>
      <div className="mt-5 lg:flex lg:flex-row  md:flex md:flex-row flex flex-col gap-[90px]">
        <div>
          <img src={analytics} alt="" />
          <img className="mt-2" src={data} alt="" />

        </div>
        <div>
          <div className="lg:w-[331px] lg:h-[639px] rounded-2xl border p-4 border-[#CFE5F2]">

            <div className=" flex p-1 justify-between">
              <p>Recent notifications</p>
              <HiDotsVertical />
            </div>

            <div className="bg-[#CCCCCC] w-[272px] h-[570px] mt-3 rounded-2xl p-3">
              <div>
                <img src={activity} alt="" />

              </div>
              <h4 className="flex text-[20px] justify-center mx-auto font-bold font-Open-sans text-[#666]">No Data Available</h4>
              <p className="flex  mt-2 w-[197px] h-[32px] justify-center mx-auto text-center text-[12px] font-normal font-Open-sans text-[#666]">Come back to check later when you make an appointments.</p>


            </div>




          </div>



        </div>



      </div>



    </section>
  )
}

export default AdminDashboardTab