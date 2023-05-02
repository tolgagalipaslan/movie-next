import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className=" w-full items-center justify-between ">
      {/* NAVBAR */}
      <div className="flex items-center justify-between p-2">
        {/* LOGO */}
        <div className="flex items-center">
          <Image width={100} height={100} src={"/flash.png"} alt="logo" />
          <div className=" hidden md:flex text-3xl font-extrabold font-kanit text-white ">
            HD<span className="text-4xl text-orange-500 underline">Izle</span>
          </div>
        </div>
        {/* NAVIGATION */}
        <div className="md:flex hidden">
          <ul className="flex gap-5 text-xl text-white items-center">
            <li className="relative flex items-center">
              <input
                type="text"
                className="p-2 bg-[#2a303c] rounded-l-md border-none outline-none
                 "
              />

              <button className="p-3 bg-[#2a303c] rounded-r-md active:scale-95">
                <AiOutlineSearch />
              </button>
            </li>
            <li></li>
          </ul>
        </div>
        {/* AUTH */}
        <div className="flex items-center gap-4 text-xl ">
          <div className="text-gray-200 opacity-90">Register</div>
          <div className="h-[35px] w-[1px] bg-white"> </div>
          <button className="bg-red-500 p-2 px-3 rounded-md text-lg text-white active:scale-95 duration-300">
            LOG IN
          </button>
        </div>
        {/* MOBILE MENU INDICATOR */}
        <div className="md:hidden flex text-white text-3xl">
          {!mobileMenu ? (
            <div
              onClick={() => {
                setMobileMenu(true);
              }}
            >
              <RxHamburgerMenu />
            </div>
          ) : (
            <div
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <AiOutlineClose />
            </div>
          )}
        </div>
      </div>
      {/* MOBILEMENU */}
      <div
        className={` ${
          mobileMenu ? "h-[70px] md:bg-red-600 bg-[#191d20] " : " h-1"
        } md:h-1 bg-red-600 w-full overflow-hidden duration-500`}
      >
        <ul className="flex flex-col w-full gap-5 text-xl text-white items-center">
          <li className="relative flex items-center w-full p-3">
            <input
              type="text"
              className="p-2 bg-[#2a303c] rounded-l-md border-none outline-none  w-full
                 "
            />

            <button className="p-3 bg-[#2a303c] rounded-r-md active:scale-95">
              <AiOutlineSearch />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
