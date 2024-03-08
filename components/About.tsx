"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 bg-secondaryBgColor pb-24 pt-40 px-[9%] min-h-screen"
      id="about"
    >
      <motion.h2
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[4.5rem] font-[700] mb-12 text-center"
      >
        About <span className="text-mainColor">Me</span>
      </motion.h2>
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center relative w-[25rem] h-[25rem] rounded-[50%]"
      >
        <Image
          src="/assets/image.png"
          alt="Image"
          width={900}
          height={0}
          className="w-[90%] rounded-[50%] border-[0.2rem] border-solid border-mainColor"
        />
        <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animationRotate w-full h-full rounded-[50%] border-[0.2rem] border-solid border-t-secondaryBgColor border-b-secondaryBgColor border-l-mainColor border-r-mainColor"></span>
      </motion.div>
      <div className="text-center">
        <motion.h3
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[2.6rem] font-bold"
        >
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
        </motion.h3>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[1.4rem] mt-8 mx-0 mb-12"
        >
          I have an MBA from the University of Michigan Ross School of Business,
          sponsored by Ford and inducted into Beta Gamma Sigma National Honor
          Society. I have a background in Economics and Computer Science
          Engineering from the University of Michigan Ann Arbor College of
          Engineering and College of LS&A, earning Magna Cum Laude grades. I aim
          to contribute unique value to any team and have improved my coding
          skills through engineering classes, hackathons, and personal projects.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="relative inline-block w-[15rem] h-[4.5rem]"
        >
          <Link
            href="https://www.linkedin.com/in/patankar/"
            target="_blank"
            className="inline-flex justify-center items-center bg-mainColor w-44 h-full relative rounded-[0.8rem] text-[1.5rem] font-[600] text-bgColor transition-all duration-700 ease-out hover:text-mainColor hover:bg-transparent hover:border-2 hover:border-solid hover:border-mainColor"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
