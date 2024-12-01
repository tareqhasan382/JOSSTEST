import React from "react";
import { IoCall, IoMail, IoTime } from "react-icons/io5";
const ContactInformation = () => {
  return (
    <div className=" bg-[#EEEDE9] w-full h-[1330px] flex items-center justify-center  ">
      <div className=" w-[1170px] h-[1080px] flex flex-col items-center justify-between">
        <div className=" w-[1170px] h-[500px] flex items-center justify-between ">
          <div className=" w-[500px] h-[500px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3651.217253877975!2d90.4230604747927!3d23.775276787821966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s6th%20Floor%2C%20Icon%20Center%2C%2057%2F4%20Progoti%20Shoroni%20Vatara%2C%20Dhaka%201229!5e0!3m2!1sen!2sbd!4v1733027559188!5m2!1sen!2sbd"
              width="500"
              height="480"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
                <address>
                  6th Floor, Icon Center, 57/4 <br />
                  Progoti Shoroni Vatara, Dhaka 1229
                </address>
              </div>
              <div className=" w-full h-[168px] grid grid-cols-2 items-start ">
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoCall />
                    <p>Phone:</p>
                  </div>
                  <a href="tel:+8801888826300">+880 1888-826300</a>
                </div>
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoMail />
                    <p>Mail:</p>
                  </div>
                  <a href="mailto:info@mdfbd.com">info@MDFbd.com</a>
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
                <address>
                  6th Floor, Icon Center, 57/4 <br />
                  Progoti Shoroni Vatara, Dhaka 1229
                </address>
              </div>
              <div className=" w-full h-[168px] grid grid-cols-2 items-start ">
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoCall />
                    <p>Phone:</p>
                  </div>
                  <a href="tel:+8801888826300">+880 1888-826300</a>
                </div>
                <div>
                  <div className=" flex items-center gap-2 ">
                    <IoMail />
                    <p>Mail:</p>
                  </div>
                  <a href="info@mdfbd.com">info@MDFbd.com</a>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3651.217253877975!2d90.4230604747927!3d23.775276787821966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s6th%20Floor%2C%20Icon%20Center%2C%2057%2F4%2C%20Progoti%20Shoroni%20Vatara%2C%20Dhaka%201229!5e0!3m2!1sen!2sbd!4v1733027005878!5m2!1sen!2sbd"
              width="500"
              height="480"
              style={{ border: "0" }} // Corrected style format
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <Image
              src={map_image}
              width={600}
              height={600}
              alt="map"
              priority
              className=" object-cover "
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
