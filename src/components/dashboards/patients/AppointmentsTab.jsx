import Shuffle from "../../../assets/shuffle.svg"
import FullStar from "../../../assets/full-star.svg"
import HalfStar from "../../../assets/half-star.svg"
import Doctor from "../../../assets/doctors-image.png"

const AppointmentsTab = () => {
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
          <div className="overflow-y-scroll max-h-[20rem]">
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
        <div className="col-span-3 bg-blue-600 py-12 order-3 rounded-[1.25rem]">

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