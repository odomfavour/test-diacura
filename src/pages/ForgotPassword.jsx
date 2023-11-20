import React from "react";
import Padlock from "../assets/Padlock.svg"

const ForgotPassword = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div>
          <img src={Padlock} alt="" />
          <p>Forgot Password</p>
        </div>
        <p>Enter the email you used to create your account so we can send you a link for resetting your password.</p>
        <form action="POST">
          <div>
            <label htmlFor="">Email</label>
            <input 
              type="email"
              placeholder="example@gmail.com"
              required
            />
            <button type="submit">
              Send
            </button>
            <button>
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword