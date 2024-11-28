import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="  h-[395px] bg-black text-white flex items-center justify-center mx-auto ">
      <div className=" bg-gray-900 w-[405px] h-[395px] flex flex-col items-start justify-between py-[40px] pl-6 ">
        <div>
          <h1 className=" uppercase font-extrabold text-5xl ">fervent</h1>
          <p className=" capitalize text-[18px] ">multiboard industries LTD.</p>
        </div>
        <div>
          <h1 className=" capitalize ">Follow us</h1>
          <div className=" flex items-center gap-6 pt-3 ">
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-[1035px] h-[395px] flex flex-col items-start justify-between px-[55px] py-[40px]  ">
        <div className=" w-[840px] h-[241px] grid grid-cols-4 py-[40px]">
          <div>
            <h1 className=" font-semibold text-[18px] ">About</h1>
            <p className=" text-[14px] font-normal ">About us</p>
            <p className=" text-[14px] font-normal ">Mission & Vision</p>
            <p className=" text-[14px] font-normal ">Directors</p>
          </div>

          <div>
            <h1 className=" font-semibold text-[18px] ">Products</h1>
            <p className=" text-[14px] font-normal ">MDF</p>
            <p className=" text-[14px] font-normal ">HDF Flooring</p>
            <p className=" text-[14px] font-normal ">Particle Board</p>
            <p className=" text-[14px] font-normal ">HPL</p>
            <p className=" text-[14px] font-normal ">Doors</p>
            <p className=" text-[14px] font-normal ">All Products</p>
          </div>
          <div>
            <h1 className=" font-semibold text-[18px] ">Contact</h1>
            <p className=" text-[14px] font-normal ">Contact Us</p>
            <p className=" text-[14px] font-normal ">Career</p>
            <p className=" text-[14px] font-normal ">Product Query</p>
          </div>
          <div>
            <h1 className=" font-semibold text-[18px] ">Resources</h1>
            <p className=" text-[14px] font-normal ">Application</p>
            <p className=" text-[14px] font-normal ">
              Installation Instructions
            </p>
            <p className=" text-[14px] font-normal ">House builder Support</p>
            <p className=" text-[14px] font-normal ">Merchants</p>
            <p className=" text-[14px] font-normal ">Architect Resources</p>
            <p className=" text-[14px] font-normal ">Case Studies</p>
          </div>
        </div>
        <div className=" w-[855px] h-[20px]  flex items-center justify-between  ">
          <p>©2024 MDF multiboard industries LTD.</p>
          <p>
            <span>Terms and Conditions</span>
            <span className=" px-2 ">o</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
