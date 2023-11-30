import Chevron from "../../assets/chevron.svg"
import Reload from "../../assets/reload.svg"
import Download from "../../assets/download.svg"
import Print from "../../assets/print.svg"

const AnalyticsFeedbacksTab = () => {
  return (
    <>
      <div className="font-Open-sans">
        <div className="flex mb-4">
          <div className="flex gap-3 mr-auto">
            <p className="py-1 px-3 bg-[#e5e5e5] rounded-3xl text-sm font-bold text-[#999999] cursor-pointer">30 Days</p>
            <p className="py-1 px-3 bg-[#e5e5e5] rounded-3xl text-sm font-bold text-[#999999] cursor-pointer">3 Months</p>
            <p className="py-1 px-3 bg-[#e5e5e5] rounded-3xl text-sm font-bold text-[#999999] cursor-pointer">6 Months</p>
            <p className="py-1 px-3 bg-[#e5e5e5] rounded-3xl text-sm font-bold text-[#999999] cursor-pointer">This year</p>
            <div className="flex items-center gap-1 py-1 px-3 bg-[#e5e5e5] rounded-3xl text-sm font-bold text-[#999999] cursor-pointer">
              <p>Select Year</p>
              <img className="" src={Chevron} alt="" />
            </div>
          </div>
          <div className="flex gap-5">
            <img src={Reload} alt="" />
            <img src={Print} alt="" />
            <img src={Download} alt="" />
          </div>
        </div>
        <p className="text-xs mt-5 font-bold text-[#999]">Last login: 22/11/2023 | 05:50 PM</p>
      </div>
    </>
  )
}

export default AnalyticsFeedbacksTab