"use client";

import LinkedinButton from "./LinkedinButton";
import LinkedinCourses from "./LinkedinCourses";
import LinkedinEdu from "./LinkedinEdu";
import LinkedinExp from "./LinkedinExp";
import LinkedinHonors from "./LinkedinHonors";
import LinkedinLanguages from "./LinkedinLanguages";
import LinkedinLicense from "./LinkedinLicense";
import LinkedinProfile from "./LinkedinProfile";
import LinkedinProjects from "./LinkedinProjects";
import LinkedinRecommendations from "./LinkedinRecommendations";
import LinkedinSkills from "./LinkedinSkills";
import LinkedinTestScores from "./LinkedinTestScores";
import LinkedinVolunteering from "./LinkedinVolunteering";

import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const Linkedin = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20 pt-40 px-[9%] min-h-[auto]"
    >
      <motion.h2
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[4.5rem] font-[700] mb-12 text-center"
      >
        Linke<span className="text-mainColor">din</span>
      </motion.h2>
      <LinkedinProfile />
      <LinkedinExp />
      <LinkedinEdu />
      <LinkedinRecommendations />
      <LinkedinLicense />
      <LinkedinProjects />
      <LinkedinVolunteering />
      <LinkedinSkills />
      <LinkedinCourses />
      <LinkedinHonors />
      <LinkedinTestScores />
      <LinkedinLanguages />
      <LinkedinButton />
    </div>
  );
};

export default Linkedin;
