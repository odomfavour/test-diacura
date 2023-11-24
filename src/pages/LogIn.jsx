import logo from "../assets/images/logo.svg";
import google_icon from "../assets/images/google_icon.svg";
import logo_apple from "../assets/images/logo_apple.svg";
import logo_facebook from "../assets/images/logo_facebook.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email !== "" && password !== "";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <main className=" w-full h-[100vh] flex items-center justify-center font-Open_Sans">
      <div className="w-[50%] h-[90vh] bg-[#BBE1F61A] rounded-[20px] shadow-lg flex items-center justify-center">
        <div className="w-[75%] h-[90%]  flex flex-col gap-[40px]">
          <div className="w-full h-fit flex flex-col gap-[20px]">
            <img src={logo} alt="logo" className="h-[40px] mx-auto" />
            <p className="text-center text-xl text-[#666666]">
              The virtual assistant that helps you manage your diabetes through
              habit change.
            </p>
          </div>
          <div className="w-full h-fit flex flex-col gap-[28px]  mx-auto text-[#666666]">
            <form action="" className="">
              <div className="w-full h-[56px] rounded border">
                <input
                  type="text"
                  placeholder="Email address"
                  value={email}
                  onChange={() => handleEmailChange(event)}
                  className="h-full w-full rounded text-base placeholder:text-[#666666] pl-3 outline-[#107BC0]"
                />
              </div>
              <div className="flex justify-end mt-[25px]">
                <Link to="" className="text-xs text-[#666666] font-semibold">
                  Forgot Password?
                </Link>
              </div>
              <div className="w-full h-[56px] rounded border mt-2 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={() => handlePasswordChange(event)}
                  className="h-full w-full rounded text-base placeholder:text-[#666666] pl-3 outline-[#107BC0] pr-[40px]"
                />
                {showPassword ? (
                  <AiOutlineEye
                    className=" absolute top-[18px] right-[7px] shrink-0 lg:w-[16px] lg:h-[16px] w-[20px] h-[20px] text-black cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className=" absolute top-[18px] right-[7px] shrink-0 lg:w-[16px] lg:h-[16px] w-[20px] h-[20px] text-black cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <div className="flex items-center gap-[5px] w-[112px] h-[24px] mt-[10px]">
                <input type="checkbox" />
                <p className="text-xs text-[#666666] ">Remember me</p>
              </div>
              <button
                className={`w-full h-[56px] rounded flex items-center justify-center text-xl font-bold mt-[32px] ${
                  isFormValid
                    ? "bg-[#107BC0] text-white cursor-pointer"
                    : "bg-[#CFE5F2] text-[#666666] cursor-not-allowed"
                }`}
                type="submit"
                disabled={!isFormValid}
              >
                Login
              </button>
              <p className="text-center text-base mt-[16px]">
                Don’t have an account?{" "}
                <span className="font-bold text-[#107BC0]">
                  <Link to="/signup">Create an account.</Link>
                </span>
              </p>
            </form>
            <div className="w-[70%] h-fit mx-auto">
              <div className="w-full mx-auto flex items-center justify-center">
                <div className="border-t border-[#D2D2D2] grow"></div>
                <div className="px-[15px] text-[#107BC0] text-[14px]">Or</div>
                <div className="border-t border-[#D2D2D2] grow"></div>
              </div>
              <div className="flex items-center justify-between w-[55%] h-[48px] mx-auto mt-[15px]">
                <Link
                  to=""
                  className="flex items-center justify-center h-[48px] w-[48px] rounded border cursor-pointer"
                >
                  {" "}
                  <img
                    src={google_icon}
                    alt="google logo"
                    className="h-[32px] w-[32px]"
                  />
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center h-[48px] w-[48px] rounded border cursor-pointer"
                >
                  {" "}
                  <img
                    src={logo_facebook}
                    alt="facebook logo"
                    className="h-[32px] w-[32px]"
                  />
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center h-[48px] w-[48px] rounded border cursor-pointer"
                >
                  {" "}
                  <img
                    src={logo_apple}
                    alt="google logo"
                    className="h-[32px] w-[32px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
