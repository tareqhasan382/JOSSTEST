import { ArrowRight } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className=" w-full h-[1052px] flex flex-col items-center justify-center ">
      <div className=" w-[1170px] h-[802px] bg-[#EEEDE9] flex items-center justify-center rounded ">
        <div className=" w-[1030px] h-[602px] flex flex-col items-start justify-between ">
          <div className="w-[1030px] h-[58px] items-start justify-center   ">
            <h1 className=" text-4xl font-bold ">
              Get in <span className=" text-[#00A5E3] ">touch</span>
            </h1>
          </div>
          <div className="w-[1030px] h-[432px] flex flex-col items-start  ">
            <div className=" w-full h-auto grid grid-cols-2 gap-6 items-center ">
              <div className=" w-[500px] h-[82px] flex flex-col items-start justify-center ">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  placeholder="Enter your name here" // Enter your name here
                  className=" w-[500px] h-[50px] p-2 rounded "
                />
              </div>
              <div className=" w-[500px] h-[82px] flex flex-col items-start justify-center ">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  placeholder="Select Subject"
                  className=" w-[500px] h-[50px] p-2 rounded "
                />
              </div>
              <div className=" w-[500px] h-[82px] flex flex-col items-start justify-center ">
                <label htmlFor="name">Email Address</label>
                <input
                  type="text"
                  placeholder="Write your email address"
                  className=" w-[500px] h-[50px] p-2 rounded "
                />
              </div>
              <div className=" w-[500px] h-[82px] flex flex-col items-start justify-center ">
                <label htmlFor="name">Phone Number</label>
                <input
                  type="text"
                  placeholder="Write your phone number"
                  className=" w-[500px] h-[50px] p-2 rounded "
                />
              </div>
            </div>
            <div className=" w-[1030px] h-[208px] mt-4 ">
              <label htmlFor="message">Your message</label>
              <textarea
                placeholder="Enter message here"
                className=" w-[1030px] h-[176px] rounded "
              />
            </div>
          </div>
          <div>
            <button className=" flex flex-col ">
              <span className="flex items-center">
                Submit Message <ArrowRight />
              </span>
              <span className=" w-[120px] h-[1px] bg-black mt-1 "></span>
            </button>
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

export default Contact;
