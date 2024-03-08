"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/varient";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, InView] = useInView({
    threshold: 0,
  });
  return (
    <div
      className="min-h-[auto] pb-28 pt-40 px-[9%] bg-secondaryBgColor"
      id="skills"
    >
      <motion.h2
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[4.5rem] font-[700] mb-12 text-center"
      >
        My <span className="text-mainColor">Skills</span>
      </motion.h2>
      <div className="flex flex-wrap gap-20">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flexClass"
        >
          <div ref={ref}>
            <div className="relative border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] py-2 px-6">
              <div className="py-4 px-0">
                <h3 className="flex justify-between text-[1.5rem]">
                  Python <span className="text-mainColor">99%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[99%] ${
                      InView ? "animationMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  C++ <span className="text-mainColor">99%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[99%] ${
                      InView ? "animationMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Java <span className="text-mainColor">90%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[90%] ${
                      InView ? "animationSemiMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  SQL <span className="text-mainColor">90%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[90%] ${
                      InView ? "animationSemiMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Matlab <span className="text-mainColor">60%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[60%] ${
                      InView ? "animationBasic" : "animate-none"
                    }`}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Dev Ops/Jenkins <span className="text-mainColor">99%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[99%] ${
                      InView ? "animationMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Git/Github <span className="text-mainColor">80%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[80%] ${
                      InView ? "animationIntermediate" : "animate-none"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flexClass"
        >
          <div>
            <div className="relative border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] py-2 px-6">
              <div className="py-4 px-0">
                <h3 className="flex justify-between text-[1.5rem]">
                  Android App Development{" "}
                  <span className="text-mainColor">99%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[99%] ${
                      InView ? "animationMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  IOS App Development{" "}
                  <span className="text-mainColor">99%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[99%] ${
                      InView ? "animationMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Big Data Processing{" "}
                  <span className="text-mainColor">90%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[90%] ${
                      InView ? "animationSemiMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Machine Learning <span className="text-mainColor">90%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[90%] ${
                      InView ? "animationSemiMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Image Processing <span className="text-mainColor">60%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[60%] ${
                      InView ? "animationBasic" : "animate-none"
                    }`}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Project Management <span className="text-mainColor">99%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[99%] ${
                      InView ? "animationMaster" : "animate-none"
                    } `}
                  ></span>
                </div>
              </div>
              <div>
                <h3 className="flex justify-between text-[1.5rem]">
                  Product Lifecycle Management{" "}
                  <span className="text-mainColor">80%</span>
                </h3>
                <div className="h-10 rounded-[0.6rem] border-[0.2rem] border-solid border-mainColor p-2 my-4 mx-0">
                  <span
                    className={`block h-full rounded-[0.3rem] bg-mainColor w-[80%] ${
                      InView ? "animationIntermediate" : "animate-none"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
