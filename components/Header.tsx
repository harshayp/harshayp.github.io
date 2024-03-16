"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "@/varient";

import { FaWhatsapp } from "react-icons/fa";
import { Linkedin, Github, Mail} from "lucide-react";

const Header = () => {
  return (
    <div
      className="w-full lg:w-[83%] mx-auto my-[10rem] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between"
      id="home"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start lg:justify-normal">
        <div>
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[3.5rem] sm:text-[4.7rem] font-[700]"
          >
            I am Harshavardhan Patankar. Welcome to my site.
          </motion.h1>
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-4"
        >
          <h3 className="text-[2rem] sm:text-[2.6rem] font-[700] text-mainColor">
            <TypeAnimation
              sequence={[
                "Technical Product Manager",
                2000,
                "Artificial Intelligence Tech Lead",
                2000,
                "Engineering Leader",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            ></TypeAnimation>
          </h3>
        </motion.div>
        <div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[1.4rem] mb-10 text-center"
          >
            Skilled at delivering results as a Technical Product Manager.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="relative flex items-center justify-between w-[23rem] h-[4.5rem] mb-16"
        >
          <Link
            href="https://www.linkedin.com/in/patankar/"
            target="_blank"
            className="inline-flex justify-center items-center bg-mainColor w-44 h-full relative rounded-[0.8rem] text-[1.5rem] font-[600] text-bgColor transition-all duration-700 ease-out hover:text-mainColor hover:bg-transparent hover:border-2 hover:border-solid hover:border-mainColor"
          >
            Hire Me
          </Link>
          <Link
            href="https://github.com/harshayp"
            target="_blank"
            className="inline-flex justify-center items-center w-44 h-full relative border-2 border-solid border-mainColor rounded-[0.8rem] text-[1.5rem] font-[600] text-mainColor transition-all duration-700 ease-out hover:bg-mainColor hover:text-bgColor "
          >
            My Work
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center gap-5"
        >
          <Link
            href="https://github.com/harshayp"
            target="_blank"
            className="inline-flex justify-center items-center relative w-14 h-14 bg-transparent border-[0.2rem] border-solid border-mainColor rounded-[50%] text-mainColor transition duration-500 ease-out hover:bg-mainColor hover:text-bgColor"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patankar/"
            target="_blank"
            className="inline-flex justify-center items-center relative w-14 h-14 bg-transparent border-[0.2rem] border-solid border-mainColor rounded-[50%] text-mainColor transition duration-500 ease-out hover:bg-mainColor hover:text-bgColor"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hired@patankar.org"
            target="_blank"
            className="inline-flex justify-center items-center relative w-14 h-14 bg-transparent border-[0.2rem] border-solid border-mainColor rounded-[50%] text-mainColor transition duration-500 ease-out hover:bg-mainColor hover:text-bgColor"
          >
            <Mail size={18} />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=13134983602"
            target="_blank"
            className="inline-flex justify-center items-center relative w-14 h-14 bg-transparent border-[0.2rem] border-solid border-mainColor rounded-[50%] text-mainColor transition duration-500 ease-out hover:bg-mainColor hover:text-bgColor"
          >
            <FaWhatsapp size={20}/>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex items-center justify-center w-[70%] md:w-1/2 mb-16 lg:mb-0"
      >
        <Image
          src="/assets/image.png"
          alt="image"
          width={500}
          height={0}
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Header;
