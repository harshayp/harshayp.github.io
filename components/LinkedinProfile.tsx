import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinProfile = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 hover:bg-secondaryBgColor"
      id="profile"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">Profile</h3>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-6">
        <div className="min-w-[80px]">
          <Image
            src="/assets/image.png"
            alt="logo"
            width={80}
            height={0}
            className="rounded-full border-[0.2rem] border-solid border-mainColor"
          />
        </div>
        <div>
          <h3 className="text-[1.8rem] font-bold">
            Harshavardhan Yeshwant Patankar
          </h3>
          <p className="text-[1.3rem] pt-2">
            Artificial Intelligence Tech Lead/Technical Product Manager with
            MBA(Highest Distinction/Top 10%), Computer Science Engin. BSE (Magna
            Cum Laude), and Economics BS from U. of Michigan Ann Arbor Ross
            Business/Engineering
          </p>
          <p className="text-[1.2rem] pt-2 text-mainColor">
            Troy, Michigan, United States
            <br />
            500+ connections
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinProfile;
