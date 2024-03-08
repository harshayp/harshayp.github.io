import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinEdu = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="education"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Education</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10">
        <div className="min-w-[60px]">
          <Image
            src="/assets/uomBusinessLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            University of Michigan - Stephen M. Ross School of Business
          </h3>
          <p className="text-[1.1rem] pt-2">
            Master of Business Administration - MBA
          </p>
          <p className="text-[1.1rem] pt-2 text-mainColor">2020 - Apr 2022</p>
          <p className="text-[1.1rem] pt-2">
            Grade: Top 10% of Class with Highest Distinction/Beta Gamma Sigma
            Honor Society
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/uomEngineeringLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            University of Michigan College of Engineering
          </h3>
          <p className="text-[1.1rem] pt-2">
            B.S.E Computer Science Engineering
          </p>
          <p className="text-[1.1rem] pt-2 text-mainColor">2012 - 2017</p>
          <p className="text-[1.1rem] pt-2">
            Grade: 3.8/4.0 Major/CS GPA, 3.7/4.0 Overall GPA, Magna Cum Laude
            <br />
            Skills: Machine Learning · Algorithms
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/uomLiteratureLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            University of Michigan College of Literature, Science, and the Arts
          </h3>
          <p className="text-[1.1rem] pt-2">
            Bachelor of Science (B.S), Economics
          </p>
          <p className="text-[1.1rem] pt-2 text-mainColor">2012 - 2017</p>
          <p className="text-[1.1rem] pt-2">
            Grade: 3.9/4.0 Major/Econ GPA, 3.7/4.0 Overall GPA
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/internationalBaccalaureateLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            International Baccalaureate
          </h3>
          <p className="text-[1.1rem] pt-2">
            International Academy East, Troy, Michigan, IB Certified Diploma
            through HL Classes
          </p>
          <p className="text-[1.1rem] pt-2 text-mainColor">2008 - 2012</p>
          <p className="text-[1.1rem] pt-2">Grade: 3.97/4.00 unweighted</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinEdu;
