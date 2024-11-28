import React from "react";

const Navbar = () => {
  return (
    <nav className=" relative top-0 w-[1440px] h-[110px] text-white flex items-center justify-between px-24 z-50 ">
      <ul className=" w-full flex items-center justify-start gap-6 ">
        <li>Company</li>
        <li>Products</li>
        <li>LookBook</li>
      </ul>
      <ul className=" w-full flex items-center justify-end gap-6 ">
        <li>Sustainability</li>
        <li>Media</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
