import logo from "../assets/images/logo.svg";
import google_icon from "../assets/images/google_icon.svg";
import logo_apple from "../assets/images/logo_apple.svg";
import logo_facebook from "../assets/images/logo_facebook.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const isFormValid =
    email !== "" &&
    password !== "" &&
    username !== "" &&
    passwordConfirm !== "";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <main className=" w-full h-[100vh] flex items-center justify-center font-Open_Sans">
      <div className="lg:w-[50%] w-[90%] h-fit bg-[#BBE1F61A] rounded-[20px] shadow-lg flex items-center justify-center py-3 lg:py-6">
        <div className="lg:w-[75%] w-full lg:h-[90%] h-[80%] flex flex-col lg:gap-[40px] gap-[30px]  p-2 lg:p-0">
          <div className="w-full h-fit flex flex-col lg:gap-[10px] gap-[5px]">
            <img
              src={logo}
              alt="logo"
              className="lg:h-[40px] h-[35px] mx-auto"
            />
            <p className="text-center lg:text-xl text-base text-[#107BC0] font-[700]">
              Welcome Friend, Let’s get into it!
            </p>
          </div>
          <div className="w-full h-fit flex flex-col lg:gap-[15px] gap-[12px]  mx-auto text-[#666666]">
            <form action="" className="">
              <div className="w-full h-[56px] rounded border">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={() => handleUserNameChange(event)}
                  className="h-full w-full rounded lg:text-base text-sm placeholder:text-[#666666] pl-3 outline-[#107BC0]"
                />
              </div>
              <div className="w-full h-[56px] rounded border mt-[20px]">
                <input
                  type="text"
                  placeholder="Email address"
                  value={email}
                  onChange={() => handleEmailChange(event)}
                  className="h-full w-full rounded lg:text-base text-sm placeholder:text-[#666666] pl-3 outline-[#107BC0]"
                />
              </div>

              <div className="w-full h-[56px] rounded border relative mt-[20px]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={() => handlePasswordChange(event)}
                  className="h-full w-full rounded lg:text-base text-sm placeholder:text-[#666666] pl-3 outline-[#107BC0] pr-[40px]"
                />
                {showPassword ? (
                  <AiOutlineEye
                    className=" absolute top-[18px] right-[7px] shrink-0 w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] text-black cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className=" absolute top-[18px] right-[7px] shrink-0 w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] text-black cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <div className="w-full h-[56px] rounded border relative mt-[20px]">
                <input
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={passwordConfirm}
                  onChange={() => setPasswordConfirm(event.target.value)}
                  className="h-full w-full rounded lg:text-base text-sm placeholder:text-[#666666] pl-3 outline-[#107BC0] pr-[40px]"
                />
                {showPasswordConfirm ? (
                  <AiOutlineEye
                    className=" absolute top-[18px] right-[7px] shrink-0 w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] text-black cursor-pointer"
                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className=" absolute top-[18px] right-[7px] shrink-0 w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] text-black cursor-pointer"
                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  />
                )}
              </div>
              <button
                className={`w-full h-[56px] rounded flex items-center justify-center lg:text-xl text-lg  font-bold mt-[20px] ${
                  isFormValid
                    ? "bg-[#107BC0] text-white cursor-pointer"
                    : "bg-[#CFE5F2] text-[#999999] cursor-not-allowed"
                }`}
                type="submit"
                disabled={!isFormValid}
              >
                Create an account
              </button>
              <p className="text-center lg:text-base text-sm mt-[16px]">
                Already have an account?{" "}
                <span className="font-bold text-[#107BC0]">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
            <div className="w-[70%] h-fit mx-auto">
              <div className="w-full mx-auto flex items-center justify-center">
                <div className="border-t border-[#D2D2D2] grow"></div>
                <div className="px-[15px] text-[#107BC0] lg:text-[14px] text-[12px]">
                  Or
                </div>
                <div className="border-t border-[#D2D2D2] grow"></div>
              </div>
              <div className="flex items-center justify-between lg:w-[55%] w-[70%] h-[48px] mx-auto mt-[10px]">
                <Link
                  to=""
                  className="flex items-center justify-center lg:h-[48px] lg:w-[48px] h-[35px] w-[35px] rounded border cursor-pointer"
                >
                  {" "}
                  <img
                    src={google_icon}
                    alt="google logo"
                    className="lg:h-[32px] lg:w-[32px] h-[24px] w-[24px]"
                  />
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center lg:h-[48px] lg:w-[48px] h-[35px] w-[35px] rounded border cursor-pointer"
                >
                  {" "}
                  <img
                    src={logo_facebook}
                    alt="facebook logo"
                    className="lg:h-[32px] lg:w-[32px] h-[24px] w-[24px]"
                  />
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center lg:h-[48px] lg:w-[48px] h-[35px] w-[35px] rounded border cursor-pointer"
                >
                  {" "}
                  <img
                    src={logo_apple}
                    alt="google logo"
                    className="lg:h-[32px] lg:w-[32px] h-[24px] w-[24px]"
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

export default SignUp;
