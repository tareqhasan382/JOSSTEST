import Image from "next/image";
import React from "react";
import map_image from "../../assets/contact-map.png";
import { IoCall, IoMail, IoTime } from "react-icons/io5";
const ContactInformation = () => {
  return (
    <div className=" bg-[#EEEDE9] w-full h-[1330px] flex items-center justify-center  ">
      <div className=" w-[1170px] h-[1080px] flex flex-col items-center justify-between">
        <div className=" w-[1170px] h-[500px] flex items-center justify-between ">
          <div className=" w-[500px] h-[500px] ">
            <Image
              src={map_image}
              width={600}
              height={600}
              alt="map"
              priority
              className=" object-cover "
            />
          </div>
          <div className=" w-[570px] h-[500px] flex flex-col items-start justify-between ">
            <div className=" w-full h-[116px] ">
              <h1 className=" text-4xl font-bold ">
                Contact <br />
                <span className=" text-[#00A5E3] ">information</span>
              </h1>
            </div>
            <div className=" w-full h-[264px] flex flex-col items-start justify-between ">
              <div>
                <p>
                  6th Floor, Icon Center, 57/4 <br />
                  Progoti Shoroni Vatara, Dhaka 1229
                </p>
              </div>
              <div className=" w-full h-[168px] grid grid-cols-2 items-start ">
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoCall />
                    <p>Phone:</p>
                  </div>
                  <p>+880 1888-826300</p>
                </div>
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoMail />
                    <p>Mail:</p>
                  </div>
                  <p>info@MDFbd.com</p>
                </div>
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoTime />
                    <p>Business Hours:</p>
                  </div>
                  <p>9:30 AM (Sat - Thu)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[1170px] h-[500px] flex items-center justify-between">
          <div className=" w-[570px] h-[500px] flex flex-col items-start justify-between ">
            <div className=" w-full h-[116px] ">
              <h1 className=" text-4xl font-bold ">
                Factory <br />
                <span className=" text-[#00A5E3] ">information</span>
              </h1>
            </div>
            <div className=" w-full h-[264px] flex flex-col items-start justify-between ">
              <div>
                <p>
                  6th Floor, Icon Center, 57/4 <br />
                  Progoti Shoroni Vatara, Dhaka 1229
                </p>
              </div>
              <div className=" w-full h-[168px] grid grid-cols-2 items-start ">
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoCall />
                    <p>Phone:</p>
                  </div>
                  <p>+880 1888-826300</p>
                </div>
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoMail />
                    <p>Mail:</p>
                  </div>
                  <p>info@MDFbd.com</p>
                </div>
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoTime />
                    <p>Business Hours:</p>
                  </div>
                  <p>9:30 AM (Sat - Thu)</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[500px] h-[500px] ">
            <Image
              src={map_image}
              width={600}
              height={600}
              alt="map"
              priority
              className=" object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
