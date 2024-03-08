"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center z-[100] w-full fixed top-0 left-0 px-[9%] py-8 bg-bgColor">
      <div>
        <Link href="#" className="text-[2.2rem] font-semibold">
          Patankar.
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <a
          href="#home"
          className="text-[1.4rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
          autoFocus
        >
          Home
        </a>
        <a
          href="#about"
          className="text-[1.4rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
        >
          About
        </a>
        <a
          href="#education"
          className="text-[1.4rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
        >
          Education
        </a>
        <a
          href="#experience"
          className="text-[1.4rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="text-[1.4rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
        >
          Skills
        </a>
      </div>
        <div className="flex md:hidden">
          {toggle ? (
            <X size={26} onClick={() => setToggle((prev) => !prev)} />
          ) : (
            <Menu size={26} onClick={() => setToggle((prev) => !prev)} />
          )}
        </div>
      <div
        className={`md:hidden ${
          toggle ? "flex" : "hidden"
        } w-full absolute left-0 top-28 flex-col justify-center items-center gap-4 bg-secondaryBgColor py-10`}
      >
        <Link
          href="#home"
          className="text-[1.7rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
          autoFocus
          onClick={() => setToggle((prev) => !prev)}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-[1.7rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
          onClick={() => setToggle((prev) => !prev)}
        >
          About
        </Link>
        <Link
          href="#education"
          className="text-[1.7rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
          onClick={() => setToggle((prev) => !prev)}
        >
          Education
        </Link>
        <Link
          href="#experience"
          className="text-[1.7rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
          onClick={() => setToggle((prev) => !prev)}
        >
          Experience
        </Link>
        <Link
          href="#skills"
          className="text-[1.7rem] font-medium ml-14 transition duration-500 ease-in-out focus:text-mainColor hover:text-mainColor"
          onClick={() => setToggle((prev) => !prev)}
        >
          Skills
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
