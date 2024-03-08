import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/varient";

const LinkedinLicense = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-[0.2rem] border-solid border-mainColor rounded-[0.6rem] p-6 pb-0 mt-10 hover:bg-secondaryBgColor"
      id="certifications"
    >
      <h3 className="text-[1.8rem] font-bold mb-4">
        Licenses & certifications
      </h3>
      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10">
        <div className="min-w-[60px]">
          <Image
            src="/assets/pluralSightLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Modern Software Architecture: Domain Models, CQRS, and Event
            Sourcing
          </h3>
          <p className="text-[1.1rem] pt-2">Pluralsight</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">Issued Oct 2023</p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/udemyLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Master CI/CD for Android Developers
          </h3>
          <p className="text-[1.1rem] pt-2">Udemy</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">Issued Sep 2023</p>
          <p className="text-[1.1rem] pt-2">Skills: Android Development</p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/udemyLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Master CI/CD for IOS Developers
          </h3>
          <p className="text-[1.1rem] pt-2">Udemy</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">Issued Sep 2023</p>
          <p className="text-[1.1rem] pt-2">Skills: iOS Development</p>
        </div>
      </div>

      <div className="flex gap-6 border-0 border-b-[1px] border-solid border-[#808080] pb-10 mt-6">
        <div className="min-w-[60px]">
          <Image
            src="/assets/udemyLogo.jpeg"
            alt="logo"
            width={60}
            height={0}
          />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-bold">
            Microservices with Spring Cloud
          </h3>
          <p className="text-[1.1rem] pt-2">Udemy</p>
          <p className="text-[1.1rem] pt-2 text-mainColor">Issued Sep 2023</p>
          <p className="text-[1.1rem] pt-2">Skills: Spring Cloud</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedinLicense;
