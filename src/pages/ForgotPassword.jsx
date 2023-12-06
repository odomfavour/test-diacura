import React from "react";
import Padlock from "../assets/Padlock.svg"
import Envelope from "../assets/Envelop.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState('')
  const [handleSubmit, sethandleSubmit] = useState(false)
  
  const handleForgotPassword = async () => {
    console.log(userEmail)
    // const email = userEmail
    try {
      const response = await axios.post("/api/auth/forgot-password", {
        "email": userEmail,
      },
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
      );
      response.status === 200 ? sethandleSubmit(true) : sethandleSubmit(false)
      console.log(response.data);
    } catch (error) {
      console.error('Error during password reset request:', error);
    }
  };

  const sendMail = (e) => {
    e.preventDefault()
    handleForgotPassword();
  }

  const resendEmail = (e) => {
  e.preventDefault()
  handleForgotPassword()
}


  return (
    <>
      <div className={`flex flex-col justify-center items-center min-h-screen bg-[#f6fcff] font-Open-sans ${handleSubmit === true ? 'hidden' : 'block'}`}>
        <div className="bg-[#f1f9ff] px-4 py-6 lg:py-12 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] rounded-[.8rem] shadow-md">
          <div className="flex flex-col text-center">
            <img className="h-6" src={Padlock} alt="" />
            <p className="text-[#107bc0] text-[1rem] mt-2 mb-4 font-semibold">Forgot Password</p>
          </div>
          <p className="text-xs font-medium text-center text-[#666666] xl:w-[80%] lg:w-[80%] lg:mx-auto">Enter the email you used to create your account so we can send you a link for resetting your password.</p>
          <form action="">
            <div className="flex flex-col mt-4 xl:w-[80%] lg:w-[80%] lg:mx-auto">
              <label htmlFor="" className="text-xs mb-1">Email</label>
              <input 
                type="email"
                placeholder="example@gmail.com"
                required
                className="border border-[#c5c9cc] rounded-sm px-2 py-1 placeholder:text-xs outline-none"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <button type="submit" className="bg-[#107bc0] border border-[#107bc0] mt-6 rounded-sm py-2 text-xs font-bold text-white" onClick={sendMail}>
                Send
              </button>
              <button className="border border-[#107bc0] mt-3 rounded-sm py-2 text-xs text-[#107bc0] font-bold">
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={`flex flex-col justify-center items-center min-h-screen bg-[#f6fcff] font-Open-sans ${handleSubmit === true ? 'block' : 'hidden'}`}>
        <div className={`bg-[#f1f9ff] px-4 py-6 lg:py-12 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] rounded-[.8rem] shadow-md`}>
          <div className="flex flex-col text-center">
            <img className="h-6" src={Envelope} alt="" />
            <p className="text-[#107bc0] text-[1.3rem] mt-2 mb-4 font-semibold">Check your email</p>
          </div>
          <p className="text-xs font-medium text-center text-[#666666] xl:w-[80%] lg:w-[80%] lg:mx-auto">We have sent an email with password reset information to sarahabraham@gmail.com</p>
          <div className="flex flex-col mt-6 xl:w-[80%] lg:w-[80%] lg:mx-auto">
            <p className="text-xs font-semibold text-center text-[#666666] xl:w-[80%] lg:w-[80%] lg:mx-auto">Didn’t receive the email? Check spam folder or junk</p>
            <button type="submit" className="bg-[#107bc0] border border-[#107bc0] mt-6 rounded-sm py-2 text-xs font-semibold text-white" onClick={resendEmail}>
              Resend Email
            </button>
           <Link to="/login" className="border border-[#107bc0] mt-3 rounded-sm py-2 flex items-center justify-center">
            <button className="text-xs text-[#107bc0] font-semibold">
              Back to Login
            </button>
           </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword