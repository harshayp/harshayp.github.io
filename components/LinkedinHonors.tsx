import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinHonors = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="awards"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Honors & Awards</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Beta Gamma Sigma National Honor Society
          </h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.1rem] pt-2 text-mainColor">Apr 2022</p>
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
            <p className="text-[1.1rem] pt-2">
              Top 10% of students at highest ranked business schools are offered
              admission (highest national distinction for MBA students).
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Regents Merit Scholarship</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.1rem] pt-2 text-mainColor">
              Issued by University of Michigan · May 2012
            </p>
            <div className="flex items-center gap-2 min-w-[20]">
              <Image
                src="/assets/uomEngineeringLogo.jpeg"
                alt="logo"
                width={20}
                height={0}
              />
              Associated with University of Michigan College of Engineering
            </div>
            <p className="text-[1.1rem] pt-2">
              Awarded to University of Michigan students with high academic
              achievement
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">
            State of Michigan Winner- Finalist for Internationals
          </h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.1rem] pt-2 text-mainColor">
              Issued by DECA · May 2012
            </p>
            <p className="text-[1.1rem] pt-2">
              Founding Team Leader for Team Winning State Competition - DECA/IA
              Economics Club – Troy, MI - September 2009- May 2012 ● Leader of
              economics team for economics club and DECA organization ● Unable
              to attend internationals due to conflict with IB graduation exams
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">National Merit Finalist</h3>
          <div className="flex flex-col gap-2 items-start text-[1.2rem] pt-2">
            <p className="text-[1.1rem] pt-2 text-mainColor">
              Issued by NMSC · Feb 2012
            </p>
            <p className="text-[1.1rem] pt-2">
              Awarded to high school students based on outstanding academic and
              extracurricular achievement and PSAT/SAT scores.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">University Honors</h3>
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
          <h3 className="text-[1.4rem] font-bold">
            University Of Michigan Dean's List
          </h3>
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
    </motion.div>
  );
};

export default LinkedinHonors;
