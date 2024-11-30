import React from "react";
import { LuHome } from "react-icons/lu";
const Hero = () => {
  return (
    <div className=" relative -top-[110px] w-full h-[500px]  ">
      <div className="  absolute w-full h-[610px] bg-[url('/assets/mission-Image.png')] bg-cover bg-center bg-no-repeat z-0 flex flex-col items-center justify-center ">
        <div className=" absolute bottom-0 mx-auto w-[1170px] h-[119px] flex flex-col justify-between mb-10 ">
          <ul className="w-full flex flex-row items-center gap-6 text-white text-xl ">
            <li className=" pr-4 ">
              <LuHome size={30} />
            </li>
            <li className=" list-disc pr-4 capitalize ">company</li>
            <li className=" list-disc capitalize ">Mission & Vision</li>
          </ul>
          <h1 className="text-white text-6xl font-bold ">Mission & Vision</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
