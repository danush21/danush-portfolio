"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import usclogo from "@/public/usc.jpg";
import mitlogo from "@/public/mit.jpg";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>


      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={usclogo} alt="QUT" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Master of Science
          </p>
          <p className="text-lg font-medium">
            University of Southern California
          </p>
          <p className="text-lg font-medium">
            Computer Science
          </p>
          <p className="mt-1">August 2023 - May 2025</p>
          <p className="my-1">CGPA: 3.71 / 4.00</p>
        </div>
      </div>


      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={mitlogo} alt="QUT" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Bachelor of Engineering
          </p>
          {/* <p className="mt-1">Computer Science and Engineering</p> */}
          <p className="text-lg font-medium">
            Madras Institute of Technology, Anna University
          </p>
          <p className="text-lg font-medium">
            Computer Science and Engineering
          </p>
          {/* <p>Computer Science and Engineering</p> */}
          <p className="mt-1">August 2019 - June 2023</p>
          <p className="my-1">CGPA: 9.29 / 10.00</p>
          {/* <ul className="list-disc pl-6">
            <li>Major in Computer Science</li>
            <li>Minor in Networks & Security</li>
            <li>Minor in Mobile Applications</li>
            <li>Science & Engineering Dean's List - 2019 & 2021</li>
          </ul> */}
        </div>
      </div>
    </motion.section>
  );
}
