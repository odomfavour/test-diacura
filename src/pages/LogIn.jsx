import logo from "../assets/images/logo.svg";
import google_icon from "../assets/images/google_icon.svg";
import logo_apple from "../assets/images/logo_apple.svg";
import logo_facebook from "../assets/images/logo_facebook.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginSuccess from "../components/LoginSuccess";
import axios from "axios";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const isFormValid = username !== "" && password !== "";

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    console.log(username, password);
    if (isFormValid) {
      try {
        const response = await axios.post(
          "https://diacura-med.onrender.com/api/auth/login",
          {
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          console.log("Login successful!");
          setIsUserLoggedIn(true);
        } else {
          console.error("Login failed:", response.data);
        }
      } catch (error) {
        console.error("Error during Login:", error);
      }
    } else {
      console.error("Invalid form data");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <main className=" w-full h-[100vh] flex items-center justify-center font-Open_Sans">
      <LoginSuccess isUserLoggedIn={isUserLoggedIn} />
      <div className="lg:w-[50%] w-[90%]  h-fit bg-[#BBE1F61A] rounded-[20px] shadow-lg flex items-center justify-center py-3 lg:py-6">
        <div className="lg:w-[75%] w-full lg:h-[90%] h-[80%]  flex flex-col lg:gap-[40px] gap-[30px]  p-2 lg:p-0">
          <div className="w-full h-fit flex flex-col lg:gap-[20px] gap-[10px]">
            <img
              src={logo}
              alt="logo"
              className="lg:h-[40px] h-[35px] mx-auto"
            />
            <p className="text-center lg:text-xl text-base text-[#666666]">
              The virtual assistant that helps you manage your diabetes through
              habit change.
            </p>
          </div>
          <div className="w-full h-fit flex flex-col lg:gap-[28px] gap-[18px]  mx-auto text-[#666666]">
            <form action="" className="" onSubmit={handleFormSubmit}>
              <div className="w-full h-[56px] rounded border">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={() => handleUserNameChange(event)}
                  className="h-full w-full rounded lg:text-base text-sm placeholder:text-[#666666] pl-3 outline-[#107BC0]"
                />
              </div>
              <div className="flex justify-end mt-[25px]">
                <Link
                  to=""
                  className="lg:text-xs text-[10px] text-[#666666] font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="w-full h-[56px] rounded border mt-2 relative">
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
              <div className="flex items-center gap-[5px] w-[112px] h-[24px] mt-[10px] border border-red-500">
                <input type="checkbox" />
                <p className="text-xs text-[#666666] ">Remember me</p>
              </div>
              <button
                className={`w-full h-[56px] rounded flex items-center justify-center lg:text-xl text-lg font-bold lg:mt-[32px] mt-[25px] ${
                  isFormValid
                    ? "bg-[#107BC0] text-white cursor-pointer"
                    : "bg-[#CFE5F2] text-[#666666] cursor-not-allowed"
                }`}
                type="submit"
                disabled={!isFormValid}
              >
                Login
              </button>
              <p className="text-center lg:text-base text-sm mt-[16px]">
                Don’t have an account?{" "}
                <span className="font-bold text-[#107BC0]">
                  <Link to="/signup">Create an account.</Link>
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
              <div className="flex items-center justify-between lg:w-[55%] w-[70%] h-[48px] mx-auto mt-[15px]">
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

export default LogIn;
