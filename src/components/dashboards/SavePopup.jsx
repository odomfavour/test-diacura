import Issaved from "../../assets/icons/admin-dashboard/Issaved";

export const SavePopup = () => { 

  return (
    <div className="bg-[#F4FBF7] p-2 xl:py-[18px] xl:px-8 rounded-lg shadow-lg w-[90%] xl:w-4/5 mx-auto">
        <div className="flex gap-2 items-center justify-center">
            <Issaved />
            <p className="text-[#66CC99] font-bold text-xs xl:text-xl">Your changes has been saved successfully!</p>
        </div>
    </div>
  )
};

export const SavePasswordPopup = () => {

return (
  <div className="bg-[#F4FBF7] p-2 xl:py-[18px] xl:px-8 rounded-lg shadow-lg w-[90%] xl:w-4/5 mx-auto">
      <div className="flex gap-2 items-center justify-center">
          <Issaved />
          <p className="text-[#66CC99] font-bold text-xs xl:text-xl">Your password has been saved successfully!</p>
      </div>
  </div>
)
};
