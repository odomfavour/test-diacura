/* eslint-disable react/prop-types */
import Bin from "../../assets/bin.svg"
import Exit from "../../assets/exit.svg"

const NotificationPref = () => {
  return (
    <div className="relative">
      <div className="my-12">
        <div className="border-b">
          <p className="text-2xl font-bold">Sounds & Notifications</p>
        </div>
        <Setting
          setting = "Push notification"
          description = "Recieve push notification on your devices, when you receive new comments, remiders and news updates directly on your email."
        />
        <Setting
          setting = "Email notification"
          description = "Receive updates on comments, remiders and news updates directly on your email."
        />
        <Setting
          setting = "Login notification"
          description = "Get push notification/Email notification when you or someone login your account."
        />
      </div>

      <div className="pt-4">
        <div className="border-b">
          <p className="text-2xl font-bold">Chat Notifications</p>
        </div>
        <Setting
          setting = "Chats"
          description = "Receive push/email notifications for new messages"
        />
        <Setting
          setting = "New message sounds"
          description = "Play sounds for new message"
        />
      </div>

      {/* Delete Popup */}

      {/* <div className="absolute top-[5rem] left-[17rem] w-[40%] pb-10 rounded-2xl border bg-[#fff]">
        <div className="bg-[#fff5f5] text-center py-4 text-sm font-bold text-[#eb3434] rounded-t-2xl">
          <p>DELETE ACCOUNT PERMANENTLY</p>
        </div>
        <div className="text-center">
          <p className="mt-8 mb-4 text-md font-bold text-[#666666]">ARE YOU SURE?</p>
          <p className="text-sm w-[80%] mx-auto text-[#8c8c8c] font-semibold">Deleting your account permanently erases all your data, and recovery is not possible. Please consider this carefully before proceeding.</p>

          <div className="flex gap-4 justify-center items-center my-6 w-[80%] mx-auto">
            <button className="text-[#8c8c8c] text-sm font-bold border h-11 w-[50%] rounded-sm outline-none hover:bg-[#fff5f5] hover:text-gray-400">
              No, Cancel
            </button>
            <button className="flex justify-center items-center text-white text-xs font-bold bg-[#eb3434] h-11 w-[50%] rounded-sm outline-none">
              <img className="h-7" src={Bin} alt="" />
              <p>Delete account</p>
          </button>
          </div>
        </div>
      </div> */}

      {/* Delete Popup */}

      {/* Logout Popup */}

      {/* <div className="absolute top-[5rem] left-[17rem] w-[40%] pb-10 rounded-2xl border bg-[#fff]">
        <div className="bg-[#fff5f5] text-center py-4 text-sm font-bold text-[#eb3434] rounded-t-2xl">
          <p>SIGN OUT OF ACCOUNT</p>
        </div>
        <div className="text-center">
          <p className="mt-8 mb-4 text-md font-bold text-[#666666]">ARE YOU SURE?</p>
          <p className="text-sm w-[80%] mx-auto text-[#8c8c8c] font-semibold">You will be logged out from your account.</p>

          <div className="flex gap-4 justify-center items-center my-6 w-[80%] mx-auto">
            <button className="text-[#8c8c8c] text-sm font-bold border h-11 w-[50%] rounded-sm outline-none hover:bg-[#fff5f5] hover:text-gray-400">
              Cancel
            </button>
            <button className="flex justify-center items-center text-white text-xs font-bold bg-[#eb3434] h-11 w-[50%] rounded-sm outline-none">
              <img className="h-7" src={Exit} alt="" />
              <p>Logout</p>
          </button>
          </div>
        </div>
      </div> */}

      {/* Logout Popup */}
    </div>
  )
}

const Setting = (props) => {
  return (
    <div className="mt-6 flex items-center">
      <div className="w-3/5 mr-auto">
        <p className="text-[#666666] text-md font-semibold mb-1">{props.setting}</p>
        <p className="text-sm text-[#999999] font-medium">{props.description}</p>
      </div>
      <label className="flex items-center cursor-pointer select-none text-dark dark:text-white">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleFour"
            className="peer sr-only"
          />
          <div
            className="block h-8 rounded-full box bg-[#ccc] dark:bg-dark-200 w-14 peer-checked:bg-[#107bc0]">
          </div>
          <div
            className="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1 dark:bg-white peer-checked:translate-x-full peer-checked:dark:bg-white">
          </div>
        </div>
      </label>
    </div>
  )
}

const DeleteAccount = () => {
  return (
    <>
      
    </>
  )
}

export default NotificationPref