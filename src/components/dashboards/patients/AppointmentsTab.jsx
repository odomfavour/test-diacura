import Shuffle from "../../../assets/shuffle.svg"
import FullStar from "../../../assets/full-star.svg"
import HalfStar from "../../../assets/half-star.svg"
import Doctor from "../../../assets/doctors-image.png"
import DAppointment from "../../../assets/doctor-appointment.png"
import File from "../../../assets/file.svg"
import Dots from "../../../assets/dots.svg"
import Arrow from "../../../assets/arrow-left.svg"
import Doc from "../../../assets/doctor_img.png"
import Morning from "../../../assets/morning.svg"
import Noon from "../../../assets/noon.svg"
import Night from "../../../assets/night.svg"
import CaretRight from "../../../assets/caret-right.svg"
import CaretLeft from "../../../assets/caret-left.svg"
import { useState } from "react"

const AppointmentsTab = () => {
  const [activeButton, setActiveButton] = useState(1)
  const [selectedAppointment, setSelectedAppointment] = useState(0)
  const [dateSelect, setDateSelect] = useState(null)
  const [timeSelect, setTimeSelect] = useState(null)
  const [bookDoctor, setBookDoctor] = useState(null)
  const [planSelect, setPlanSelect] = useState(1)
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

  const bookAppointment = (index) => {
    setBookDoctor(index)
  }

  const cancelBooking = () => {
    setBookDoctor(null)
  }

  // Function for selecting between plans and prescription tabs
  const SelectPlan = (index) => {
    setPlanSelect(index)
  }

  // Data for available doctors

  const Doctors = [
    {
      image: Doctor,
      name:"Dr. Michael Jons",
      specialization: "Endocrinologist / Generalist."
    },
    {
      image: Doctor,
      name:"Dr. Michael Jons",
      specialization: "Endocrinologist / Generalist."
    },
    {
      image: Doctor,
      name:"Dr. Michael Jons",
      specialization: "Endocrinologist / Generalist."
    },
  ]

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

  // Time object
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
      <section className={`${bookDoctor !== null ? 'hidden' : ''}`}>  
        <div className="bg-white rounded-[1.25rem] lg:px-7 px-3 py-4 mb-5">
          <div className="flex items-center">
            <p className="mr-auto text-[#333333] text-sm font-semibold">Available Doctors</p>
            <button className="flex items-center gap-1 lg:px-12 px-3 border border-[#107bc0] rounded-md h-9 font-semibold hover:border-[#cccccc] text-[#107bc0] text-sm transition duration-150 ease-in-out">
              Shuffle
              <img src={Shuffle} className="" alt="" />
            </button>
          </div>

          <div className="flex gap-6 my-4 py-4 overflow-x-scroll scroll-set">
            {Doctors.map((card, index) => (
              <div className="w-[16rem] lg:w-[30rem] shadow-sm rounded-[1.25rem] border px-2 pb-3 lg:pb-0 lg:px-0" key={index}>
                <div className="flex items-center lg:gap-6 gap-2 lg:p-3 py-2 lg:w-[25rem]">
                  <div className="h-full lg:w-[12rem] w-[6rem]">
                    <img className="rounded-xl w-full" src={card.image} alt="" />
                  </div>
                  <div className="w-[16rem]">
                    <p className="font-bold lg:text-[1rem] text-sm">{card.name}</p>
                    <p className="font-semibold text-xs text-[#666] w-[10rem]">{card.specialization}</p>
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
                    <button className="hidden lg:block bg-[#107bc0] text-white text-sm font-bold py-3 px-6 rounded-md mt-2 outline-none border-none" onClick={() => bookAppointment(index)}>
                      Book Appointment
                    </button>
                  </div>
                </div>
                <button className="w-[100%] bg-[#107bc0] lg:hidden text-white text-sm font-bold py-3 px-6 rounded-md mt-2 outline-none border-none" onClick={() => bookAppointment(index)}>
                  Book Appointment
                </button>
              </div>
            ))}
          </div>  
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-3">
          <div className="lg:col-span-1 col-span-4 lg:order-2 order-3 row-span-2 bg-white rounded-[1.25rem] pb-4">
            <div className="w-full py-3 bg-[#cfe5f2] rounded-t-[1.25rem] border-b border-[#919191] text-center">
              <p  className="font-semibold">Dietry Recommendations</p>
            </div>
            {/* Prior to removing */}
            <div className="overflow-y-scroll lg:max-h-[30rem] max-h-[18rem] scroll-set">
              {DietryRecommend.map((item) => (
                <div className="bg-[#fafbfc] mx-2 my-2 pb-2 shadow-md rounded-[.5rem] px-3">
                <p className="pt-3 pb-1 font-semibold underline text-[1rem]">{item.name}</p>
                <p className="text-[.8rem] text-[#212b31] font-medium pb-2">{item.recommendation}</p>
                <p className="text-[.9rem] font-bold text-right">{item.date},{item.time}</p>
              </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 col-span-4 row-span-1 lg:order-1 order-1 bg-white lg:p-4 p-2 rounded-[1.25rem]">
            <div className="flex gap-1 lg:w-3/5 pt-3 lg:pt-0 w-full items-center">
              <div className={`cursor-pointer flex gap-2 lg:w-3/4 w-2/4 items-center justify-center p-2 py-1 border-b-2 ${planSelect === 1 ? 'border-[#3891ca] text-[#3891ca]' : 'border-[#d9d9d9] text-[#ccc]'}`} onClick={() => SelectPlan(1)}>
                <p className="lg:text-md text-sm font-bold">Medical Prescription</p>
                <p className={`flex items-center justify-center w-[1.4rem] h-[1.4rem] bg-[#f3f3f3] text-[.65rem] rounded-full font-bold ${planSelect === 1 ? 'text-[#3891ca]' : 'text-[#999]'}`}>03</p>
              </div>
              <div className={`cursor-pointer flex gap-2 lg:w-3/4 w-2/4 items-center justify-center p-2 py-1 border-b-2 border-[#d9d9d9] ${planSelect === 2 ? 'border-[#3891ca] text-[#3891ca]' : 'border-[#d9d9d9] text-[#ccc]'}`} onClick={() => SelectPlan(2)}>
                <p className="lg:text-md text-sm font-bold">Treatment Plans</p>
                <p className={`flex items-center justify-center w-[1.4rem] h-[1.4rem] bg-[#f3f3f3] text-[.65rem] rounded-full font-bold ${planSelect === 2 ? 'text-[#3891ca]' : 'text-[#999]'}`}>05</p>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 mt-8">
              <div className="flex lg:flex-col items-center flex-col-reverse lg:px-2 px-0">
                <div className="flex gap-3 mb-3">
                  <p className="text-sm text-[#262626] font-bold bg-[#d9f2e5] rounded-3xl text-center px-4 py-2 w-[7rem] lg:py-1">Oral Usage</p>
                  <p className="text-sm text-[#262626] font-bold bg-[#fff5cc] rounded-3xl text-center px-4 py-2 w-[7rem] lg:py-1">Injection</p>
                </div>
                <div className="text-center lg:text-start mb-4">
                  <p className="font-bold lg:text-xl text-2xl mb-2 lg:mb-0">Diacura drug 1000mg</p>
                  <p className="font-semibold lg:text-sm text-md text-[#666666] mb-2">To regulate the blood sugar level</p>
                  <p className="font-semibold lg:text-xs text-sm text-[#666666]">Note: To be taken after each meals</p>
                </div>
              </div>
              <div className="lg:w-[65%] w-full bg-[#f7fcff] py-4 px-4 rounded-lg">
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
                  <div className="border-b-2 w-[50%] border-[#2494e4]"></div>
                  <img src={Noon} alt="" />
                  <div className="border-dashed border-b-2 w-[50%]"></div>
                  <img src={Night} alt="" />
                </div>
                <div className="flex justify-between items-center px-3">
                  <p className="text-xs text-[#666666] font-bold text-center">1 tablet</p>
                  <p className="text-xs text-[#666666] font-bold px-6 lg:px-0 text-center">3hrs: 30mins Remaining</p>
                  <p className="text-xs text-[#666666] font-bold text-center">1 tablet</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 justify-end mt-3 me-5">
              <p className="font-semibold text-sm">1 of 3</p>
              <div className="flex items-center gap-6">
                <img className="cursor-pointer" src={CaretLeft} alt="" />
                <img className="cursor-pointer" src={CaretRight} alt="" />
              </div>
            </div>

          </div>
          <div className="lg:col-span-3 col-span-4 lg:order-3 order-2 rounded-[1.25rem] bg-white">
            <div className="rounded-t-[1.25rem] flex">
              <button className={`w-2/4 text-sm px-2 font-bold py-3 text-[#232323] rounded-tl-[1.25rem] ${activeButton === 1 ? 'border-b-2 border-[#107bc0] bg-[#cfe5f2]' : ''}`} onClick={() => handleActiveSelect(1)}>
                Appointment History
              </button>
              <button className={`w-2/4 text-sm px-2 flex py-3 items-center justify-center gap-2 font-bold text-[#232323] rounded-tr-[1.25rem] ${activeButton === 2 ? 'border-b-2 border-[#107bc0] bg-[#cfe5f2]' : ''}`} onClick={() => handleActiveSelect(2)}>
                Upcoming Appointment
                <p className="bg-[#107bc0] rounded-full h-[1.3rem] w-[1.3rem] text-xs items-center justify-center text-white hidden lg:flex">03</p>
              </button>
            </div>
            <div>
              {/* Needs to be fixed. Change from table to flexbox */}
              <div className="lg:max-h-[13rem] max-h-[24rem] overflow-y-scroll">
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

      <section className={`bg-white rounded-[1.25rem] px-4 pb-5 ${bookDoctor === null ? 'hidden' : ''}`}>
        <div className="flex items-center gap-4 py-4">
          <img className="h-5 cursor-pointer" src={Arrow} alt="" onClick={cancelBooking} />
          <p className="font-bold lg:text-xl text-md">Book Appointments</p>
        </div>
        <div className="flex xl:flex-row flex-col sm:items-center xl:items-stretch mt-6 lg:mt-0 gap-12">
          <div className="flex flex-col justify-center items-center border rounded-md xl:mt-3 py-4 px-6 w-[18rem]">
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
              <div className="grid lg:grid-rows-1 md:grid-rows-1 grid-rows-2 lg:grid-cols-6 md:grid-cols-6 grid-cols-3 lg:gap-10 xl:gap-4 gap-4 mb-5">
                {datePicker.map((card, index) => (
                  <div className={`flex flex-col items-center ${dateSelect === index ? 'bg-[#3891ca]' : 'bg-[#cfe5f2]'} py-2 px-5 rounded-md cursor-pointer`} key={index} onClick={() => selectDate(index)} >
                    <p className={`text-sm font-semibold ${dateSelect === index ? 'text-white' : 'text-[#7695a9]'}`}>{card.month}</p>
                    <p className={`py-1 text-2xl font-extrabold ${dateSelect === index ? 'text-white' : 'text-[#7090a5]'}`}>{card.date}</p>
                    <p className={`text-sm font-semibold ${dateSelect === index ? 'text-white' : 'text-[#7695a9]'}`}>{card.day}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-lg text-[#666666] mb-6">Select time</p>
              <div className="grid lg:grid-rows-2 grid-rows-3 lg:grid-cols-4 grid-cols-3 lg:gap-x-10 xl:gap-x-4 gap-x-4 gap-y-4">
                {timeData.map((item, index) => (
                  <div className={`rounded-md py-4 px-3 cursor-pointer flex justify-center items-center ${timeSelect === index ? 'bg-[#107bc0]' : 'bg-[#d0eafb]'}`} key={index} onClick={() => selectTime(index)}>
                    <p className={`text-xs font-bold text-center ${timeSelect === index ? 'text-white' : 'text-[#7090a5]'}`}>{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        <div className="mt-8">
          <p className="text-[#666666] font-semibold">Note</p>
          <textarea className="border border-[#bcc6d2] outline-none p-2 mt-4 w-full rounded-md text-[#666666]" name="" id="" cols="30" rows="6" placeholder="Write a note to your doctor">
            
          </textarea>

          <div className="mt-6 flex items-center gap-5 justify-end">
            <button className="bg-white text-[#107bc0] text-sm font-bold py-3 rounded-md mt-2 outline-none border border-[#107bc0] transition ease-out delay-10 hover:bg-[#107bc0] hover:text-white w-2/4 md:w-1/5">
              Back
            </button>
            <button className="bg-[#107bc0] text-white text-sm font-bold py-3 px-6 rounded-md mt-2 outline-none border border-[#107bc0] transition ease-out delay-10 hover:bg-white hover:text-[#107bc0] w-2/4 md:w-1/3">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AppointmentsTab