import Shuffle from "../../../assets/shuffle.svg"
import FullStar from "../../../assets/full-star.svg"
import HalfStar from "../../../assets/half-star.svg"
import Doctor from "../../../assets/doctors-image.png"
import DAppointment from "../../../assets/doctor-appointment.png"
import File from "../../../assets/file.svg"
import Dots from "../../../assets/dots.svg"
import Arrow from "../../../assets/arrow-left.svg"
import Doc from "../../../assets/doctor_img.png"
import { useState } from "react"

const AppointmentsTab = () => {
  const [activeButton, setActiveButton] = useState(1)
  const [dateSelect, setDateSelect] = useState(null)
  const [timeSelect, setTimeSelect] = useState(null)
  const handleActiveSelect = (buttonNumber) => {
    setActiveButton(buttonNumber)
    console.log(activeButton)
  }

  // Function selects card onClick and sets the index to dateSelect state
  const selectDate = (index) => {
    setDateSelect(index)
  }

   // Function selects time card onClick and sets the index to dateSelect state
  const selectTime = (index) => {
    setTimeSelect(index)
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

  // Date Object
  const datePicker = [
    {
      date: 22,
      day: 'Mon',
      month: 'Nov'
    },
    {
      date: 23,
      day: 'Tue',
      month: 'Nov'
    },
    {
      date: 24,
      day: 'Wed',
      month: 'Nov'
    },
    {
      date: 25,
      day: 'Thurs',
      month: 'Nov'
    },
    {
      date: 26,
      day: 'Fri',
      month: 'Nov'
    },
    {
      date: 27,
      day: 'Sat',
      month: 'Nov'
    },
  ]

  const timeData = [
    {
      time: '8:00am - 9:00am'
    },
    {
      time: '9:00am - 10:00am'
    },
    {
      time: '10:00am - 11:00am'
    },
    {
      time: '11:00am - 12:00pm'
    },
    {
      time: '1:00pm - 2:00pm'
    },
    {
      time: '2:00pm - 3:00pm'
    },
    {
      time: '3:00pm - 4:00pm'
    },
    {
      time: '4:00pm - 5:00pm'
    },
  ]

  return (
    <>
      <section className="">
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
              {/* Needs to be fixed. Change from table to flexbox */}
              <div className="max-h-[10rem] overflow-y-scroll">
                <table className="table-auto w-full">
                  <thead className="bg-[#eef8ff]">
                    <tr>
                      <th className="py-4 font-semibold"></th>
                      <th className="py-4 font-semibold">Name</th>
                      <th className="py-4 font-semibold">Specialization</th>
                      <th className="py-4 font-semibold">Date</th>
                      <th className="py-4 font-semibold">Time</th>
                      <th className="py-4 font-semibold">Report</th>
                      <th className="py-4 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=" py-2 flex items-center justify-center">
                        <img className="w-3/4 rounded-full" src={DAppointment} alt="" />
                      </td>
                      <td className=" text-center py-2">Daniel Udechukwu</td>
                      <td className=" text-center py-2">Endocrinologist</td>
                      <td className=" text-center py-2">30/10/23</td>
                      <td className=" text-center py-2">08:30-09:00PM</td>
                      <td className=" flex items-center justify-center py-2">
                        <img src={File} alt="" />
                      </td>
                      <td className="">
                        <img src={Dots} alt="" />
                      </td>
                      {/* Add more cells as needed */}
                    </tr>
                    <tr>
                      <td className=" py-2 flex items-center justify-center">
                        <img className="w-3/4 rounded-full" src={DAppointment} alt="" />
                      </td>
                      <td className=" text-center py-2">Daniel Udechukwu</td>
                      <td className=" text-center py-2">Endocrinologist</td>
                      <td className=" text-center py-2">30/10/23</td>
                      <td className=" text-center py-2">08:30-09:00PM</td>
                      <td className=" flex items-center justify-center py-2">
                        <img src={File} alt="" />
                      </td>
                      <td className="">
                        <img src={Dots} alt="" />
                      </td>
                      {/* Add more cells as needed */}
                    </tr>
                    <tr>
                      <td className=" py-2 flex items-center justify-center">
                        <img className="w-3/4 rounded-full" src={DAppointment} alt="" />
                      </td>
                      <td className=" text-center py-2">Daniel Udechukwu</td>
                      <td className=" text-center py-2">Endocrinologist</td>
                      <td className=" text-center py-2">30/10/23</td>
                      <td className=" text-center py-2">08:30-09:00PM</td>
                      <td className=" flex items-center justify-center py-2">
                        <img src={File} alt="" />
                      </td>
                      <td className="">
                        <img src={Dots} alt="" />
                      </td>
                      {/* Add more cells as needed */}
                    </tr>
                    <tr>
                      <td className=" py-2 flex items-center justify-center">
                        <img className="w-3/4 rounded-full" src={DAppointment} alt="" />
                      </td>
                      <td className=" text-center py-2">Daniel Udechukwu</td>
                      <td className=" text-center py-2">Endocrinologist</td>
                      <td className=" text-center py-2">30/10/23</td>
                      <td className=" text-center py-2">08:30-09:00PM</td>
                      <td className=" flex items-center justify-center py-2">
                        <img src={File} alt="" />
                      </td>
                      <td className="">
                        <img src={Dots} alt="" />
                      </td>
                      {/* Add more cells as needed */}
                    </tr>
                    <tr>
                      <td className=" py-2 flex items-center justify-center">
                        <img className="w-3/4 rounded-full" src={DAppointment} alt="" />
                      </td>
                      <td className=" text-center py-2">Daniel Udechukwu</td>
                      <td className=" text-center py-2">Endocrinologist</td>
                      <td className=" text-center py-2">30/10/23</td>
                      <td className=" text-center py-2">08:30-09:00PM</td>
                      <td className=" flex items-center justify-center py-2">
                        <img src={File} alt="" />
                      </td>
                      <td className="">
                        <img src={Dots} alt="" />
                      </td>
                      {/* Add more cells as needed */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[1.25rem] px-4 pb-5 hidden">
        <div className="flex items-center gap-4 py-4">
          <img className="h-5" src={Arrow} alt="" />
          <p className="font-bold text-xl">Book Appointments</p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col justify-center items-center border rounded-md py-4 px-6 w-[18rem]">
            <img className="h-[8rem] mb-4" src={Doc} alt="" />
            <p className="text-[#666666] font-bold text-lg mb-1">Dr. Michael Jones</p>
            <p className="font-semibold text-[#666666] text-sm mb-2">Endocrinologist / Generalist.</p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <img className="h-3" src={FullStar} alt="" />
                <img className="h-3" src={FullStar} alt="" />
                <img className="h-3" src={FullStar} alt="" />
                <img className="h-3" src={FullStar} alt="" />
                <img className="h-3" src={HalfStar} alt="" />
              </div>
              <p className="text-xs font-semibold text-[#999]">4.8</p>
              <p className="text-xs font-semibold text-[#666666]">(1200 Reviews)</p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-semibold text-lg text-[#666666] mb-6">Select Date</p>
              <div className="grid grid-rows-1 grid-cols-6 gap-10 mb-5">
                {datePicker.map((card, index) => (
                  <div className={`${dateSelect === index ? 'bg-[#3891ca]' : 'bg-[#cfe5f2]'} py-2 px-5 rounded-md cursor-pointer`} key={index} onClick={() => selectDate(index)} >
                    <p className={`text-sm font-semibold text-center ${dateSelect === index ? 'text-white' : 'text-[#7695a9]'}`}>{card.month}</p>
                    <p className={`py-1 text-2xl font-extrabold text-center ${dateSelect === index ? 'text-white' : 'text-[#7090a5]'}`}>{card.date}</p>
                    <p className={`text-sm font-semibold text-center ${dateSelect === index ? 'text-white' : 'text-[#7695a9]'}`}>{card.day}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-lg text-[#666666] mb-6">Select time</p>
              <div className="grid grid-rows-2 grid-cols-4 gap-x-10 gap-y-4">
                {timeData.map((item, index) => (
                  <div className={`rounded-md py-4 cursor-pointer ${timeSelect === index ? 'bg-[#107bc0]' : 'bg-[#d0eafb]'}`} key={index} onClick={() => selectTime(index)}>
                    <p className={`text-xs font-bold text-center ${timeSelect === index ? 'text-white' : 'text-[#7090a5]'}`}>{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        <div className="mt-8">
          <p className="text-[#666666] font-semibold">Note</p>
          <textarea className="border border-[#bcc6d2] outline-none p-2 mt-4 w-full rounded-md text-[#666666]" name="" id="" cols="30" rows="10" placeholder="Write a note to your doctor">
            
          </textarea>

          <div className="mt-6 flex items-center gap-5 justify-end">
            <button className="bg-white text-[#107bc0] text-sm font-bold py-3 px-10 rounded-md mt-2 outline-none border border-[#107bc0] transition ease-out delay-10 hover:bg-[#107bc0] hover:text-white">
              Back
            </button>
            <button className="bg-[#107bc0] text-white text-sm font-bold py-3 px-6 rounded-md mt-2 outline-none border border-[#107bc0] transition ease-out delay-10 hover:bg-white hover:text-[#107bc0]">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
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