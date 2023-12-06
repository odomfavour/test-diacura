import React, { useState } from "react";
import Padlock from "../assets/Padlock.svg"
import EyeClosed from "../assets/eye-off.svg"
import EyeOpen from "../assets/eye-open.svg"
import Checkmark from "../assets/checkmark.svg"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const ResetPassword = () => {
  // const { token } = useParams()
  const token = "54945b3d4efed98be8a8da5654d49e06df420647677f71f46952c2a85be0f6ee"
  const id = "656f281ed758ee0ef1836daa"
  const [toggleVisibility, setToggleVisibility] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displaySuccess, setDisplaySuccess] = useState(false)
  console.log(password)

  const ResetPassword = async () => {
    console.log(token, id, password, confirmPassword)
    const newPassword = password
    const confirmNewPassword = confirmPassword
    try{
      const response = await axios.patch("/api/auth/reset-password", {
        "token": token,
        "id": id,
        "password": newPassword,
        "confirm_password": confirmNewPassword
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      })
      console.log(response.data)
      response.status === 200 ? setDisplaySuccess(true) : setDisplaySuccess(false)
    }catch(error){
      console.log("Error on reset", error)
    }
  }

  const onReset = (e) => {
    e.preventDefault()
    ResetPassword()
  }

  const togglePass = () => {
    setToggleVisibility(!toggleVisibility)
  }
  
  // Restricts the send button from clicking till the conditions pass - Input field must have a value
  // and password === confirmPassword. 
  // const isClickable = () => {
  //   if (!password || !confirmPassword) return false
  //   if (password != confirmPassword) return false
  //   return true
  // }

  return(
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#f6fcff] font-Open-sans">
        <div className={`bg-[#f1f9ff] px-4 py-6 lg:py-12 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] rounded-[.8rem] shadow-md ${displaySuccess === true ? 'hidden' : 'false'}`}>
          <div className="flex flex-col text-center">
            <img className="h-6" src={Padlock} alt="" />
            <p className="text-[#107bc0] text-[1rem] mt-2 mb-2 font-semibold">Reset Password</p>
          </div>
          <p className="text-xs font-medium text-center text-[#666666] xl:w-[80%] lg:w-[80%] lg:mx-auto">Choose a new password for your account</p>
          <form action="POST">
            <div className="flex flex-col mt-12 xl:w-[80%] lg:w-[80%] lg:mx-auto">
              <div className="mb-4">
                <label htmlFor="" className="text-xs mb-1 font-semibold">New Password</label>
                <div className="flex items-center border border-[#c5c9cc] rounded-sm px-2">
                  <input 
                    type={toggleVisibility ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-transparent py-2 placeholder:text-xs outline-none text-xs"
                  />
                  <img className="h-4 cursor-pointer" src={toggleVisibility ? EyeOpen : EyeClosed} alt="" onClick={togglePass} />
                </div>
                <p className="text-xs font-semibold mt-2 text-[#999999] hidden">Your password must be at least 8 characters long and include 1 capital letter and 1 number.</p>
              </div>
              <div>
                <label htmlFor="" className="text-xs mb-1 font-semibold">Confirm Password</label>
                <div className="flex items-center border border-[#c5c9cc] rounded-sm px-2">
                  <input 
                    type={toggleVisibility ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full bg-transparent py-2 placeholder:text-xs outline-none text-xs"
                  />
                  <img className="h-4 cursor-pointer" src={toggleVisibility ? EyeOpen : EyeClosed} alt="" onClick={togglePass} />
                </div>
              </div>

              <button type="submit" className="bg-[#107bc0] border border-[#107bc0] mt-6 rounded-sm py-2 text-xs font-semibold text-white" onClick={onReset}>
                Send
              </button>
              <Link to="/login" className="w-full mt-5">
                <button className="w-full border border-[#107bc0] rounded-sm py-2 text-xs text-[#107bc0] font-semibold">
                  Back to Login
                </button>
              </Link>
            </div>
          </form>
        </div>
        
        <div className={`bg-[#f1f9ff] px-4 py-18 lg:py-[8rem] w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] rounded-[.8rem] shadow-md ${displaySuccess === true ? 'block' : 'hidden'}`}>
          <div className="flex flex-col w-[80%] mx-auto">
            <img className="h-12" src={Checkmark} alt="" />
            <div>
              <p className="text-center text-2xl font-bold text-[#107bc0] py-3">Password reset successfully</p>
              <p className="text-center text-xs font-semibold text-[#666666]">Log in into your account with your new password.</p>
            </div>
            <Link to="/login" className="w-full">
              <button type="submit" className="w-full bg-[#107bc0] border border-[#107bc0] mt-6 rounded-sm py-2 text-xs font-semibold text-white">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

// const ResetSuccess = () => {
//   return (
//     <>
      
//     </>
//   )
// }

export default ResetPassword