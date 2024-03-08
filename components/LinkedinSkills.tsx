import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

import { ArrowRight } from "lucide-react";

const LinkedinSkills = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Skills</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Spring Cloud</h3>
          <div className="flex gap-2 items-center text-[1.2rem] pt-2 mt-2">
            <div className="min-w-[20]">
              <Image
                src="/assets/udemyLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
            </div>
            Microservices with Spring Cloud
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Machine Learning</h3>
          <div className="flex gap-2 items-center text-[1.2rem] pt-2">
            <div className="min-w-[20]">
              <Image
                src="/assets/fordsLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
            </div>
            Artificial Intelligence Tech Lead/ Technical Product Manager/
            Software Engineer at Ford Motor Company
          </div>
          <div className="flex gap-2 items-center text-[1.2rem] pt-2 my-2">
            <div className="min-w-[20]">
              <Image
                src="/assets/uomEngineeringLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
            </div>
            University of Michigan College of Engineering
          </div>
          <div className="flex gap-2 items-center text-[1.2rem] pt-2">
            <div className="min-w-[20]">
              <Image
                src="/assets/appDevLogo.png"
                alt="logo"
                width={20}
                height={0}
              />
            </div>
            Mobile App Development
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          href="https://www.linkedin.com/in/patankar/details/skills/"
          target="_blank"
          className="flex items-center gap-1 text-[1.3rem] font-semibold my-5"
        >
          View all 41 Skills
          <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </motion.div>
  );
};

export default LinkedinSkills;
