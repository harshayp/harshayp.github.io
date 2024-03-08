import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinVolunteering = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="Volunteering"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Volunteering</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10">
        <div className="min-w-[60px]">
          <Image src="/assets/troyLogo.jpeg" alt="logo" width={60} height={0} />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">Volunteer</h3>
          <p className="text-[1.1rem] pt-2">Troy Public Library</p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/troyLogo2.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">Volunteer</h3>
          <p className="text-[1.1rem] pt-2">Martell Elementary School</p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/gleanersLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">Volunteer</h3>
          <p className="text-[1.1rem] pt-2">
            Volunteer Gleaners Community Food Bank of Southeastern Michigan
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinVolunteering;
