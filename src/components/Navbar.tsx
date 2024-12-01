import React from "react";

const Navbar = () => {
  return (
    <nav className=" relative top-0 w-[1440px] h-[110px] text-white flex items-center justify-between px-24 z-50 ">
      <ul className=" w-full flex items-center justify-start gap-6 ">
        <li>
          <a href="/">Company</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">LookBook</a>
        </li>
      </ul>
      <ul className=" w-full flex items-center justify-end gap-6 ">
        <li>
          <a href="/">Sustainability</a>
        </li>
        <li>
          <a href="/">Media</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
