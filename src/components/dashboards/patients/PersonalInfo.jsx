import profile from "../../../assets/images/patient-dashboard/profile.svg";
import camera from "../../../assets/images/patient-dashboard/camera.svg";
import { useState } from "react";
const PersonalInfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [activeTab, setActiveTab] = useState("male");
  const [isbutton1disabled, setIsButton1disabled] = useState(true);
  const [isbutton2disabled, setIsButton2disabled] = useState(true);
  const [input, setInput] = useState({
    firstName: "Connor",
    lastName: "Grant",
    phoneNo: "+234 901 234 5678",
    age: "28",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <p className="text-xl font-semibold">Personal Information</p>
      <div className="relative mt-2">
        <img
          src={profileImage || profile}
          className="w-[80px] h-[80px] rounded-full"
          alt="profile"
        />
        <label
          htmlFor="fileInput"
          className="absolute bottom-1 left-[50px] cursor-pointer"
        >
          <img src={camera} className="w-[32px] h-[32px]" alt="camera" />
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
      <div className="w-full h-fit mt-3">
        <form className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]  w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                First Name
              </label>
              <input
                type="text"
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2"
                onChange={(e) => {
                  setInput({ ...input, firstName: e.target.value });
                  setIsButton1disabled(false);
                }}
                value={input.firstName}
              />
            </div>
            <div className="flex flex-col gap-[4px] w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Last Name
              </label>
              <input
                type="text"
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2"
                onChange={(e) => {
                  setInput({ ...input, lastName: e.target.value });
                  setIsButton1disabled(false);
                }}
                value={input.lastName}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px] w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Phone Number
              </label>
              <input
                type="text"
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2"
                onChange={(e) => {
                  setInput({ ...input, phoneNo: e.target.value });
                  setIsButton1disabled(false);
                }}
                value={input.phoneNo}
              />
            </div>
            <div className="flex flex-col gap-[4px] w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2"
                onChange={() => setIsButton1disabled(false)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]  w-fit">
              <label className="text-sm font-[500] text-[#33607E]">Age</label>
              <input
                type="text"
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2"
                onChange={(e) => {
                  setInput({ ...input, age: e.target.value });
                  setIsButton1disabled(false);
                }}
                value={input.age}
              />
            </div>
            <div className="flex flex-col gap-[4px] w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Gender
              </label>
              <div className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base px-2 flex items-center justify-between relative">
                <div className="w-[50%] h-[56px] text-sm font-[500] flex items-end justify-center pb-2">
                  <p
                    className={`cursor-pointer ${
                      activeTab === "male" ? "text-[#107BC0]" : "text-[#666666]"
                    }`}
                    onClick={() => {
                      setActiveTab("male");
                      setIsButton1disabled(true);
                    }}
                  >
                    Male
                  </p>
                </div>
                <div className="w-[50%] h-[56px] text-sm font-[500] flex items-end justify-center pb-2">
                  <p
                    className={`cursor-pointer ${
                      activeTab === "female"
                        ? "text-[#107BC0]"
                        : "text-[#666666]"
                    }`}
                    onClick={() => {
                      setActiveTab("female");
                      setIsButton1disabled(false);
                    }}
                  >
                    Female
                  </p>
                </div>
                <div className={`underline2 ${activeTab}`} />
              </div>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <button
              className="w-[144px] h-[56px] flex items-center justify-center font-bold text-[#107BC0] border border-[#107BC0] rounded"
              type="button"
            >
              Cancel
            </button>
            <button
              className={`w-[208px] h-[56px] rounded font-bold ${
                isbutton1disabled
                  ? "bg-[#CFE5F2] text-[#999999] cursor-not-allowed"
                  : "bg-[#107BC0] text-white cursor-pointer"
              }`}
              type="submit"
              disabled={isbutton1disabled}
            >
              Save Changes
            </button>
          </div>
        </form>
        <p className="text-xl font-semibold mt-[70px]">Health Information</p>
        <form className="flex flex-col gap-6 mt-[20px] ">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]  w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Diabetes Type
              </label>
              <select
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2 cursor-pointer"
                onChange={() => setIsButton2disabled(false)}
              >
                <option value="Type 1 Diabetes">Type 1 Diabetes</option>
                <option value="Type 2 Diabetes">Type 2 Diabetes</option>
                <option value="Type 3 Diabetes">Type 3 Diabetes</option>
              </select>
            </div>
            <div className="flex flex-col gap-[4px] w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Date of Diabetes Diagnosis
              </label>
              <input
                type="date"
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2"
                onChange={() => setIsButton2disabled(false)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px] w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Do you track your insulin?
              </label>
              <select
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2 cursor-pointer"
                onChange={() => setIsButton2disabled(false)}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="flex flex-col gap-[4px] w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                What’s your Insulin therapy?
              </label>
              <select
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2 cursor-pointer"
                onChange={() => setIsButton2disabled(false)}
              >
                <option value="Pens/Syringes">Pens/Syringes</option>
                <option value="Pens/Syringes">Pens/Syringes</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]  w-fit">
              <label className="text-sm font-[500] text-[#33607E]">
                Blood Glucose Level
              </label>
              <select
                className="w-[350px] h-[56px] rounded-lg border border-[#94A3B8] outline-none text-base text-[#107BC0] px-2 cursor-pointer"
                onChange={() => setIsButton2disabled(false)}
              >
                <option value="....">.....</option>
                <option value="....">.....</option>
              </select>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <button
              className="w-[144px] h-[56px] flex items-center justify-center font-bold text-[#107BC0] border border-[#107BC0] rounded"
              type="button"
            >
              Cancel
            </button>
            <button
              className={`w-[208px] h-[56px] rounded font-bold ${
                isbutton2disabled
                  ? "bg-[#CFE5F2] text-[#999999] cursor-not-allowed"
                  : "bg-[#107BC0] text-white cursor-pointer"
              }`}
              type="submit"
              disabled={isbutton2disabled}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
