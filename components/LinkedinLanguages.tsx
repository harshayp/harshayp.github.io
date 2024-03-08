import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinLanguages = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="languages"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Languages</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">English</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Native or bilingual proficiency
          </div>
        </div>
      </div>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Hindi</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Full professional proficiency
          </div>
        </div>
      </div>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Marathi</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Native or bilingual proficiency
          </div>
        </div>
      </div>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">Spanish</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Full professional proficiency
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinLanguages;
