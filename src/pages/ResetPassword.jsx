import React, { useState } from "react";
import Padlock from "../assets/Padlock.svg"
import EyeClosed from "../assets/eye-off.svg"
import EyeOpen from "../assets/eye-open.svg"

const ResetPassword = () => {
  const [toggleVisibility, setToggleVisibility] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  console.log(password)

  const togglePass = () => {
    setToggleVisibility(!toggleVisibility)
  }
  
  // Restricts the send button from clicking till the conditions pass - Input field must have a value
  // and password === confirmPassword. 
  const isClickable = () => {
    if (!password || !confirmPassword) return false
    if (password != confirmPassword) return false
    return true
  }

  return(
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#f6fcff] font-Open-sans">
        <div className="bg-[#f1f9ff] px-4 py-6 lg:py-12 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] rounded-[.8rem] shadow-md">
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

              <button type="submit" className="bg-[#107bc0] border border-[#107bc0] mt-6 rounded-sm py-2 text-xs font-semibold text-white"
              disabled={!isClickable()}>
                Send
              </button>
              <button className="border border-[#107bc0] mt-3 rounded-sm py-2 text-xs text-[#107bc0] font-semibold">
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword