"use client";

import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import { fadeIn } from "@/varient";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20 pt-40 px-[9%] min-h-screen">
      <motion.h2
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[4.5rem] font-[700] mb-12 text-center"
      >
        My <span className="text-mainColor">Journey</span>
      </motion.h2>
      <div className="flex flex-wrap gap-20">
        <div className="flexClass">
          <motion.h3
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[2.5rem] font-bold mt-0 mr-0 mb-6 ml-8 "
          >
            Education
          </motion.h3>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="border-0 border-l-[0.2rem] border-solid border-l-mainColor"
          >
            <div className="educationContent">
              <div className="relative p-6 border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] mb-8 transition duration-500 ease-in-out hover:bg-secondaryBgColor">
                <div className="flex items-center text-[1.2rem] text-mainColor pb-2">
                  <CalendarDays className="pr-2" size={20} /> 2020 - 2022
                </div>
                <h3 className="text-[1.8rem] font-bold">MBA</h3>
                <p className="text-[1.4rem] pt-2">
                  University of Michigan Ann Arbor Ross School of Business
                </p>
              </div>
            </div>

            <div className="educationContent">
              <div className="relative p-6 border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] mb-8 transition duration-500 ease-in-out hover:bg-secondaryBgColor">
                <div className="flex items-center text-[1.2rem] text-mainColor pb-2">
                  <CalendarDays className="pr-2" size={20} /> 2012 - 2017
                </div>
                <h3 className="text-[1.8rem] font-bold">
                  Bachelor of Science in Computer Science Engineering
                </h3>
                <p className="text-[1.4rem] pt-2">
                  University of Michigan Ann Arbor College of Engineering
                </p>
              </div>
            </div>

            <div className="educationContent">
              <div className="relative p-6 border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] mb-8 transition duration-500 ease-in-out hover:bg-secondaryBgColor">
                <div className="flex items-center text-[1.2rem] text-mainColor pb-2">
                  <CalendarDays className="pr-2" size={20} /> 2012 - 2017
                </div>
                <h3 className="text-[1.8rem] font-bold">
                  Bachelor of Science in Economics
                </h3>
                <p className="text-[1.4rem] pt-2">
                  University of Michigan Ann Arbor College of LS&A
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flexClass">
          <motion.h3
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[2.5rem] font-bold mt-0 mr-0 mb-6 ml-8 "
          >
            Experience
          </motion.h3>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="border-0 border-l-[0.2rem] border-solid border-l-mainColor"
          >
            <div className="educationContent">
              <div className="relative p-6 border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] mb-8 transition duration-500 ease-in-out hover:bg-secondaryBgColor">
                <div className="flex items-center text-[1.2rem] text-mainColor pb-2">
                  <CalendarDays className="pr-2" size={20} /> Winter
                  2018-Present
                </div>
                <h3 className="text-[1.8rem] font-bold">
                  A.I. Tech Lead/Technical Product Manager/Product Engineer
                </h3>
                <p className="text-[1.4rem] pt-2">
                  Dearborn, Michigan (remote)
                  <br />- MBA was entirely paid for and sponsored by Ford Motor
                  Company
                  <br />- Simultaneously did both MBA and work at Ford full time
                  at the same time
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
