import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinExp = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="experience"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Experience</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10">
        <div className="min-w-[60px]">
          <Image
            src="/assets/fordslogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Artificial Intelligence Tech Lead/ Technical Product Manager/
            Software Engineer
          </h3>
          <p className="text-[1.1rem] pt-2">Ford Motor Company</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            Jun 2018 - Present · 5 yrs 9 mos
          </p>
          <p className="text-[1.1rem] pt-2">
            Skills: Artificial Intelligence (AI) · Machine Learning · Algorithms
            · Android Development · Product Management · DevOps · iOS
            Development
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/amazonLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">MBA Consultant</h3>
          <p className="text-[1.1rem] pt-2">Amazon</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            Jan 2021 - Apr 2021 · 4 mos
          </p>
          <p className="text-[1.1rem] pt-2">
            Skills: Business Development · Management · Project Management ·
            Strategy · Leadership
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/inviaLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">Software Engineer</h3>
          <p className="text-[1.1rem] pt-2">INVIA Medical · Full-time</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            Mar 2018 - Apr 2018 · 2 mos
          </p>
          <p className="text-[1.1rem] pt-2">Skills: C++ · Algorithms · Java</p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image src="/assets/tcsLogo.jpeg" alt="logo" width={60} height={0} />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Software Development Intern
          </h3>
          <p className="text-[1.1rem] pt-2">Tata Consultancy Services</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            May 2017 - Jul 2017 · 3 mos
          </p>
          <p className="text-[1.1rem] pt-2">
            Skills: Image Processing · Algorithms · Android Development
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image src="/assets/uomLogo.jpeg" alt="logo" width={60} height={0} />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Founding Software Consultant at New Consulting Clinic
          </h3>
          <p className="text-[1.1rem] pt-2">
            University of Michigan Center for Entrepreneurship (CFE)
          </p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            2016 - 2017 · 1 yr
          </p>
          <p className="text-[1.1rem] pt-2">
            Skills: Product Lifecycle Management · Product Development · Android
            Development · iOS Development
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/motorsLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Software Development Intern
          </h3>
          <p className="text-[1.1rem] pt-2">General Motors</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            May 2015 - Sep 2015 · 5 mos
          </p>
          <p className="text-[1.1rem] pt-2">
            Skills: Algorithms · SQL · Keyhole Markup Language (KML) ·
            JavaServer Faces (JSF)
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/jacksonLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Software Development Intern
          </h3>
          <p className="text-[1.1rem] pt-2">Jackson National</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            May 2014 - Sep 2014 · 5 mos
          </p>
          <p className="text-[1.1rem] pt-2">
            Skills: Algorithms · SQL · JavaServer Faces (JSF)
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinExp;
