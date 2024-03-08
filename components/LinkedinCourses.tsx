import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinCourses = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="courses"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Courses</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Advanced Algorithm Design</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.2rem] pt-2 text-mainColor">281</p>
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomEngineeringLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Engineering
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Advanced Independent Research
          </h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.2rem] pt-2 text-mainColor">495</p>
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomLiteratureLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Literature,
              Science, and the Arts
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Computer Security</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.2rem] pt-2 text-mainColor">388</p>
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomEngineeringLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Engineering
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Databases</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.2rem] pt-2 text-mainColor">484</p>
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomEngineeringLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Engineering
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Graduate Level Spanish Literature and Writing
          </h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomLiteratureLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Literature,
              Science, and the Arts
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Mobile App Consulting</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomEngineeringLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Engineering
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Mobile App Development</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomEngineeringLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Engineering
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Product Management</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomBusinessLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan - Stephen M. Ross School of
              Business
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinCourses;
