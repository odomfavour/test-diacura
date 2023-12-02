import Issaved from "../../assets/icons/admin-dashboard/Issaved";

export const SavePopup = () => {
  let  comment = 'changes';

  return (
    <div className="bg-[#F4FBF7] py-[18px] px-8 rounded-lg shadow-lg w-4/5 mx-auto">
        <div className="flex gap-2 items-center justify-center">
            <Issaved />
            <p className="text-[#66CC99] font-bold text-xl">Your {comment} has been saved successfully!</p>
        </div>
    </div>
  )
};

export const SavePasswordPopup = () => {

return (
  <div className="bg-[#F4FBF7] py-[18px] px-8 rounded-lg shadow-lg w-4/5 mx-auto">
      <div className="flex gap-2 items-center justify-center">
          <Issaved />
          <p className="text-[#66CC99] font-bold text-xl">Your password has been saved successfully!</p>
      </div>
  </div>
)
};
