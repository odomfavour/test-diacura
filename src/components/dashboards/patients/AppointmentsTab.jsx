import Shuffle from "../../../assets/shuffle.svg"
import FullStar from "../../../assets/full-star.svg"
import HalfStar from "../../../assets/half-star.svg"
import Doctor from "../../../assets/doctors-image.png"
import DAppointment from "../../../assets/doctor-appointment.png"
import { useState } from "react"

const AppointmentsTab = () => {
  const [activeButton, setActiveButton] = useState(1)
  const handleActiveSelect = (buttonNumber) => {
    setActiveButton(buttonNumber)
    console.log(activeButton)
  }

  // Dummy data for recommendations tab
  const DietryRecommend = [
    {
      name: "Dr. Phillip Chukwuemeka",
      recommendation: "More nonstarchy vegetables, such as broccoli, spinach, and green beans.",
      date: '01/11/23',
      time: '12:13pm'
    },
    {
      name: "Dr. Phillip Chukwuemeka",
      recommendation: "More nonstarchy vegetables, such as broccoli, spinach, and green beans.",
      date: '01/11/23',
      time: '12:13pm'
    },
    {
      name: "Dr. Phillip Chukwuemeka",
      recommendation: "More nonstarchy vegetables, such as broccoli, spinach, and green beans.",
      date: '01/11/23',
      time: '12:13pm'
    },
    {
      name: "Dr. Phillip Chukwuemeka",
      recommendation: "More nonstarchy vegetables, such as broccoli, spinach, and green beans.",
      date: '01/11/23',
      time: '12:13pm'
    },
  ]

  return (
    <>
      <div className="bg-white rounded-[1.25rem] px-7 py-4 mb-5">
        <div className="flex items-center">
          <p className="mr-auto text-[#333333] font-semibold">Available Doctors</p>
          <button className="flex items-center gap-1 px-12 border border-[#107bc0] rounded-md h-9 font-semibold hover:border-[#cccccc] text-[#107bc0] text-sm transition duration-150 ease-in-out">
            Shuffle
            <img src={Shuffle} className="" alt="" />
          </button>
        </div>

        <div className="flex gap-6 my-4 pb-6 overflow-x-scroll scroll-set">
          <DoctorCard
            image = {Doctor}
            name = "Dr. Michael Jons"
            specialization = "Endocrinologist / Generalist."
          />
          <DoctorCard
            image = {Doctor}
            name = "Dr. Michael Jons"
            specialization = "Endocrinologist / Generalist."
          />
          <DoctorCard
            image = {Doctor}
            name = "Dr. Michael Jons"
            specialization = "Endocrinologist / Generalist."
          />
        </div>  
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-3">
        <div className="col-span-1 order-2 row-span-2 bg-white rounded-[1.25rem] pb-4">
          <div className="w-full py-3 bg-[#cfe5f2] rounded-t-[1.25rem] border-b border-[#919191] text-center">
            <p  className="font-semibold">Dietry Recommendations</p>
          </div>
          {/* Prior to removing */}
          <div className="overflow-y-scroll max-h-[20rem] scroll-set">
            {DietryRecommend.map((item) => (
              <div className="bg-[#fafbfc] mx-2 my-2 pb-2 shadow-md rounded-[.5rem] px-3">
              <p className="pt-3 pb-1 font-semibold underline text-[1rem]">{item.name}</p>
              <p className="text-[.8rem] text-[#212b31] font-medium pb-2">{item.recommendation}</p>
              <p className="text-[.9rem] font-bold text-right">{item.date},{item.time}</p>
            </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 row-span-1 order-1 bg-green-600 py-12 rounded-[1.25rem]">
          
        </div>
        <div className="col-span-3 order-3 rounded-[1.25rem] bg-white">
          <div className="bg-[#cfe5f2] rounded-t-[1.25rem] flex">
            <button className={`w-2/4 font-bold py-3 text-[#232323] ${activeButton === 1 ? 'border-b-2 border-[#107bc0]' : ''}`} onClick={() => handleActiveSelect(1)}>
              Appointment History
            </button>
            <button className={`w-2/4 flex py-3 items-center justify-center gap-2 font-bold text-[#232323] ${activeButton === 2 ? 'border-b-2 border-[#107bc0]' : ''}`} onClick={() => handleActiveSelect(2)}>
              Upcoming Appointment
              <p className="bg-[#107bc0] rounded-full h-[1.3rem] w-[1.3rem] text-xs flex items-center justify-center text-white">03</p>
            </button>
          </div>
          <div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="py-2"></th>
                <th className="py-2">Name</th>
                <th className=" py-2">Specialization</th>
                <th className=" py-2">Date</th>
                <th className=" py-2">Time</th>
                <th className=" py-2">Report</th>
                <th className=" py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-2 flex items-center justify-center">
                  <img className="w-3/4 rounded-full" src={DAppointment} alt="" />
                </td>
                <td className="border text-center py-2">Daniel Udechukwu</td>
                <td className="border text-center py-2">Endocrinologist</td>
                <td className="border text-center py-2">30/10/23</td>
                <td className="border text-center py-2">08:30-09:00PM</td>
                <td className="border text-center py-2"></td>
                {/* Add more cells as needed */}
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  )
}

const DoctorCard = (props) => {
  return (
    <div className="flex items-center gap-6 p-3 shadow-sm rounded-[1.25rem] border w-[25rem]">
      <div className="h-full w-[12rem]">
        <img className="rounded-xl w-full" src={props.image} alt="" />
      </div>
      <div className="w-[16rem]">
        <p className="font-bold text-[1rem]">{props.name}</p>
        <p className="font-semibold text-xs text-[#666]">{props.specialization}</p>
        <div className="flex gap-4 my-2">
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
        <button className="bg-[#107bc0] text-white text-sm font-bold py-3 px-6 rounded-md mt-2 outline-none border-none">
          Book Appointment
        </button>
      </div>
    </div>
  )
}

export default AppointmentsTab