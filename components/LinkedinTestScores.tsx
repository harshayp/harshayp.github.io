import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinTestScores = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="testscores"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Test Scores</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">ACT</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Score: 34/36
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">GRE English</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Score: 167/170
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">GRE Math</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Score: 169/170
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">IB HL Math</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Score: 6/7
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">IB HL Physics</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Score: 7/7
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">IB HL Spanish</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Score: 7/7
          </div>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6 mt-6">
        <div>
          <h3 className="text-[1.4rem] font-bold">SAT</h3>
          <div className="flex gap-2 items-center text-[1.2rem]">
            Score: 2300/2400
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinTestScores;
