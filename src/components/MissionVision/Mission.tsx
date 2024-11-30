import React from "react";
import mission_image from "../../assets/mission-group.png";
import light_image from "../../assets/Image 2.png";
import small_image from "../../assets/mission-small.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
const Mission = () => {
  //  w-[1440px]
  return (
    <div className=" w-full h-auto flex flex-col items-center justify-center mx-auto  bg-[#EEEDE9]  ">
      <div className=" w-[1169px] h-[430px] grid grid-cols-2 gap-10 my-20">
        <Image
          src={mission_image}
          width={500}
          height={600}
          alt="mission image"
          priority
          className=""
        />
        <div className=" w-full h-full flex flex-col items-start justify-center ">
          <h1 className=" text-[#002331] text-6xl font-bold leading-[1.2] ">
            Why are we <br />
            <span className=" text-[#00A5E3] ">different?</span>
          </h1>
          <p className=" mt-6 ">
            MDF has been the front-runner in applying innovation at work. This
            simple philosophy has been the cornerstone of all our processes and
            technologies. It has led us to design and deliver contemporary
            lifestyle statements that have become synonymous with modern living.
          </p>
        </div>
      </div>
      <div className=" h-[100px] w-full bg-gradient-to-t from-[#FFFFFF] to-[#EEEDE9] "></div>

      <div className=" w-full h-auto bg-[#FFFFFF] flex items-center justify-center ">
        <div className=" relative w-[1190px] h-[990px] flex items-start justify-between mt-32  ">
          <div></div>
          <div>
            <Image
              src={light_image}
              width={1100}
              height={400}
              alt="Light Image"
              priority
              className=" w-[1070px] h-[550px] object-contain "
            />
            <Image
              src={small_image}
              width={300}
              height={400}
              alt="Light Image"
              priority
              className=" absolute top-80 left-10 w-[270px] h-[350px] object-contain "
            />
            <div className=" w-full h-[325px] flex items-center justify-end gap-6 mt-10 ">
              <div className=" w-[370px] h-[324px] bg-white flex flex-col items-start justify-between p-4 ">
                <h1 className=" text-4xl font-bold ">
                  Our <br />
                  <span className=" text-[#00A5E3] ">mission</span>
                </h1>
                <p>
                  At MDF Multiboard Industries, our mission is to revolutionize
                  the building materials industry by providing sustainable,
                  innovative, and high-quality solutions that exceed customer
                  expectations. We are committed to continuous improvement and
                  innovation, striving to lead the industry with eco-friendly
                  practices and cutting-edge technologies.
                </p>
              </div>
              <div className=" w-[370px] h-[324px] bg-white  flex flex-col items-start justify-between p-4">
                <h1 className=" text-4xl font-bold ">
                  Our <br />
                  <span className=" text-[#00A5E3] ">vision</span>
                </h1>
                <p>
                  At MDF Multiboard Industries, our vision is to be a global
                  leader in sustainable building materials, transforming the
                  construction industry with innovative solutions that
                  prioritize quality, environmental responsibility, and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[350px] bg-[#FFFFFF] flex items-center justify-center ">
        <div className="w-[1440px] h-[300px] flex items-center justify-center ">
          <div className=" flex ">
            <div className=" w-[500px] h-[208px] flex flex-col items-start justify-between ">
              <h1 className=" text-2xl font-bold ">
                Order our products to <br /> build your dream.
              </h1>
              <button className=" flex flex-col items-start ">
                <span className=" flex items-center justify-center ">
                  <span className=" pr-4 ">Quiry now</span> <ArrowRight />
                </span>
                <span className=" w-[100px] h-[1px] bg-black mt-1 "></span>
              </button>
            </div>
            <div className=" w-full h-auto flex items-center justify-end gap-10  ">
              <div className=" w-[240px] h-[240px] bg-gray-200 rounded "></div>
              <div className=" w-[240px] h-[240px] bg-gray-200 rounded "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
