import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[80px] w-full items-center justify-between ">
      {/* NAVBAR */}
      <div className="flex items-center justify-between p-2">
        {/* LOGO */}
        <div className="flex items-center">
          <Image width={100} height={100} src={"/flash.png"} alt="logo" />
          <div className="text-3xl font-extrabold font-kanit text-white ">
            HD<span className="text-4xl text-orange-500 underline">Izle</span>
          </div>
        </div>
        {/* NAVIGATION */}
        <div>
          <ul className="flex gap-5 text-xl text-white items-center">
            <li>Movie</li>
            <li>Year</li>
            <li>
              <input
                type="text"
                className="p-2 bg-[#2a303c] rounded-md border-none outline-none "
              />
            </li>
            <li></li>
          </ul>
        </div>
        {/* AUTH */}
        <div className="flex items-center gap-4 text-xl ">
          <div className="text-gray-200 opacity-90">Register</div>
          <div className="h-[35px] w-[1px] bg-white"> </div>
          <button className="bg-red-500 p-2 px-4 rounded-md text-lg text-white active:scale-95 duration-300">
            LOG IN
          </button>
        </div>
      </div>
      {/* MOBILEMENU */}
      <div className="h-1 bg-red-600 w-full "></div>
    </div>
  );
};

export default Navbar;
