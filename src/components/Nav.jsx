import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Ham from "../assets/ham.svg"
import Logo from "../assets/LogoPlus.svg"

const Nav = () => {

  const [toggle, setToggle] = useState(false)

  const toggleHamburger = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  const disableHamburger = () => {
    setToggle(false);
  }

  return(
    <header className="bg-white text-white md:w-[90%] mx-auto">
      <nav className="py-4 relative flex items-center md:py-0 max-[360px]:px-2 px-8">
        <div className="mr-auto flex items-center">
          <img className="h-9" src={Logo} alt="" />
          {/* <h3 className="font-SpaceMono font-bold text-xl">NFT Marketplace</h3> */}
        </div>

        <div className={`${toggle ? 'rotate-180' : 'rotate-0'} md:hidden cursor-pointer`} onClick={toggleHamburger}>
          <img className="h-8" src={Ham} alt="" />
        </div>

        <div className={`${toggle ? 'visible' : 'invisible'} bg-white font-WorkSans absolute top-[4rem] right-0 w-full pt-4 pb-10 md:visible md:static md:flex md:items-center md:gap-6 md:justify-end md:p-0 md:w-auto max-[360px]:px-2 px-8`}>
          <ul className="md:flex items-center gap-x-12">
            <li className="text-sm text-[#666666] font-semibold transition ease-in-out delay-70 my-6">
              <Link className="py-3" to="/" onClick={disableHamburger}>Home</Link>
            </li>
            <li className="text-sm text-[#666666] font-semibold transition ease-in-out delay-70 my-6">
              <Link className="py-3" to={"/faq"} onClick={disableHamburger}>FAQ</Link>
            </li>
            <li className="text-sm text-[#666666] font-semibold transition ease-in-out delay-70 my-6">
              <Link className="py-3" to="/contact-us" onClick={disableHamburger}>Contact Us</Link>
            </li>
            <Link to="/login" className="bg-[#107bc0] hover:bg-[#9353e5] py-3 px-8 rounded-md w-3/4 sm:w-[40%] md:w-1/3 lg:w-auto max-[400px]:w-full" onClick={disableHamburger}>
              <p className="text-sm font-bold">Log in</p>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav