import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinRecommendations = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="Recommendations"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Recommendations</h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10">
        <div className="min-w-[60px]">
          <Image src="/assets/Melissa.jpeg" alt="logo" width={60} height={0} />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">Melissa Uhl</h3>
          <p className="text-[1.1rem] pt-2">
            Change-Driver | Connecting End-to-End | Care. Collaborate.
            Communicate. Close-the-Loop.
          </p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            September 11, 2023, Melissa managed Harshavardhan Yeshwant directly
          </p>
          <p className="text-[1.1rem] pt-2">
            I had the privilege of working with Harsha at Ford Motor Company
            hiring him into the company's transformation team as the data
            integration business lead. Harsha is a results-oriented, highly
            technical leader who took on every assignment with enthusiasm and a
            thirst for learning. If he was unsure about something, he would
            always ask, ensuring business objectives were aligned and intended
            outcomes were achieved. Harsha is a quick study and extremely
            intelligent. It was exciting to see what new data analytical trends
            or techniques he would discover and share with the team. I will be
            watching and cheering for him as great things will be headed way.
          </p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image src="/assets/Stefan.png" alt="logo" width={60} height={0} />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">Stefan Bankowski</h3>
          <p className="text-[1.1rem] pt-2">
            AppLink Systems Supervisor at Ford Motor Company
          </p>
          <p className="text-[1.1rem] pt-2 text-mainColor">
            September 11, 2023, Stefan managed Harshavardhan Yeshwant directly
          </p>
          <p className="text-[1.1rem] pt-2">
            Harsha is a rising star, helping lead Ford to a brighter future!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinRecommendations;
