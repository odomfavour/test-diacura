import { FaPlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";


const DoctorsKYCFileUpload = () => {
  return (
    <div className="mt-6">
        <div className="flex gap-2 items-center justify-end">
            <div className="bg-[#CFE5F2] flex flex-col gap-4 w-[119px] h-[127px] p-1 rounded-s">
                <div className="flex justify-end">
                    <div className="bg-white w-4">
                        <AiOutlineClose className="text-[#EB3434]" />                    
                    </div>
                </div>
                <img src="" alt="" />
                <p className="text-xs text-center">Hospital ID Card.jpg</p>
            </div>
            <div className="rounded-[4px] flex flex-col gap-5 items-center justify-center w-[109px] h-[127px] border border-[#3891CA] py-[33px] px-[20px]">
                <FaPlus  className="text-[#107BC0] text-3xl" />
                <p className="text-[#107BC0] text-xs font-semibold">Add new</p>
            </div>
        </div> 
        <div></div>
    </div>
  )
}

export default DoctorsKYCFileUpload