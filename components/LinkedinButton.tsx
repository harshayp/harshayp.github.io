import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinButton = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="relative inline-block w-[15rem] h-[4.5rem] mt-16"
    >
      <Link
        href="https://www.linkedin.com/in/patankar/"
        target="_blank"
        className="inline-flex justify-center items-center bg-mainColor w-52 h-full relative rounded-[0.8rem] text-[1.5rem] font-[600] text-bgColor transition-all duration-700 ease-out hover:text-mainColor hover:bg-transparent hover:border-2 hover:border-solid hover:border-mainColor"
      >
        Visit Linkedin
      </Link>
    </motion.div>
  );
};

export default LinkedinButton;
