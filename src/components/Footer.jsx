import React from "react";
import FooterLogo from "../assets/FooterLogo.svg"
import Insta from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import Youtube from "../assets/youtube.svg"
import Linkedin from "../assets/linkedin.svg"
import Twitter from "../assets/twitter.svg"
import ArrowRight from "../assets/arrow-right.svg"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#094063] w-full">
        <div className="sm:w-[90%] xl:w-[85%] mx-auto flex flex-col items-center gap-8 xl:flex-row text-white py-20">
          <img className="mb-8 h-10" src={FooterLogo} alt="" />
          <div className="flex flex-col sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <div className="mb-8">
              <p className="font-bold pb-1 text-center sm:text-start">Quick Links</p>
              <ul>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Home</li>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Contact Us</li>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Services</li>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Doctors</li>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Support</li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="font-bold pb-1 text-center sm:text-start">Terms</p>
              <ul>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Privacy Policy</li>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Terms of Service</li>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">Copyright Policy</li>
                <li className="text-center sm:text-start text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white">FAQs</li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="font-bold pb-1 text-center sm:text-start">Connect with Us</p>
              <ul className="">
                <li className="text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white flex items-center gap-4 justify-center sm:justify-start">
                  <img className="h-5" src={Linkedin} alt="" />LinkedIn
                </li>
                <li className="text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white flex items-center gap-4 justify-center sm:justify-start">
                  <img className="h-5" src={Facebook} alt="" />Facebook
                </li>
                <li className="text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white flex items-center gap-4 justify-center sm:justify-start">
                  <img className="h-5" src={Twitter} alt="" />Twitter
                </li>
                <li className="text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white flex items-center gap-4 justify-center sm:justify-start">
                  <img className="h-5" src={Insta} alt="" />Instagram
                </li>
                <li className="text-[#dee5e9] text-sm py-2 font-semibold cursor-pointer hover:text-white flex items-center gap-4 justify-center sm:justify-start">
                  <img className="h-5" src={Youtube} alt="" />YouTube
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="font-bold pb-2">Find out more about us</p>
              <p className="w-1/3 sm:w-full font-medium text-[#dee5e9] text-sm mb-6 mt-5">Subscribe to our newsletter to receive the latest updates and information about DiaCura-Med. </p>
              <form className="flex items-center gap-2 my-2" action="POST">
                <input className="px-2 h-10 rounded-md outline-none border-none text-black text-sm placeholder:font-medium" placeholder="Enter your email" type="email" required />
                <div className="bg-[#107bc0] h-10 rounded-sm flex items-center px-3">
                  <img className="h-5" src={ArrowRight} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white p-2 pb-5">
          <p className="font-medium text-sm">&#169; DiaCura-med</p>
        </div>
      </footer>
    </>
  )
}

export default Footer