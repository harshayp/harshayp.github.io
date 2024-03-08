import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinProjects = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="projects"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Projects</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10">
        <div className="min-w-[60px]">
          <Image
            src="/assets/uomEngineeringLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">EyeScanner</h3>
          <p className="text-[1.1rem] pt-2">
            Associated with University of Michigan College of Engineering
          </p>
          <p className="text-[1.1rem] pt-2">
            Worked on an app to detect eye cancer in patients.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinProjects;
