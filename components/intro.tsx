"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {FaRegFilePdf} from "react-icons/fa"
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "@/public/danush.jpeg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      // className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
      className="min-h-screen w-full px-4 pt-28 pb-14 sm:pt-36 sm:pb-18 text-center particles-section"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >

            {/* <br /><br /> */}
            <Image
              src={githubdp}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <br />

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Danush Gupta !</span>
        <br></br>
        {/* <span>I'm a{" "}</span>
        <span className="font-bold">MS in Computer Science </span> student at{" "}
        <span className="font-bold">University of Southern California</span> */}
      </motion.h1>

            {/* <br /> */}

            <motion.h1
        // className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        className="!leading-[2] sm:text-xl text-white max-w-[90%] mx-auto"
        // className="!leading-[1.5] sm:text-2xl text-white max-w-[90%] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >

{/* <br /> */}
      {/* <span className="font-bold">ABOUT ME</span> */}
          {/* <br />
          <br /> */}
      
      My journey into technology started with a spark of curiosity about computers, which swiftly blossomed into a passion - SOFTWARE DEVELOPMENT. 
      <br /> Fast forward to today, I'm a Master's student pursuing Computer Science at the University of Southern California, diving deep into cutting-edge subjects like Algorithms, Web Technologies, Database Management, Software Development, Machine Learning and Artificial Intelligence.

<br />I'm enthusiastic about the future and the opportunity to develop features that makes a genuine impact.

<br />I am flexible and adaptable, just like how the nodes in the background of this section attaches itself to its neighbors.
</motion.h1>

<br/> <br />
      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          // className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://github.com/danush21"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/danush-gupta-v-k/"
          target="_blank"
        >
          {/* <span className="opacity-70">LinkedIn</span> */}
          LinkedIn
          <BsLinkedin className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://drive.google.com/file/d/1F7IuLY1N_NAcvtGW9AeACE9abiddzg0n/view?usp=sharing"
          target="_blank"
        >
          {/* <span className="opacity-70">Resume</span> */}
          Resume
          <FaRegFilePdf className="opacity-70" />
        </a>
      </motion.div>

      {/* <motion.h1
        // className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        className="!leading-[1.5] sm:text-2xl text-white max-w-[90%] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >

<br />
      <span className="font-bold">ABOUT ME</span>
          <br />
          <br />
      
      My journey into technology started with a spark of curiosity about computers, which swiftly blossomed into a passion - SOFTWARE DEVELOPMENT. Fast forward to today, I'm a Master's student pursuing Computer Science at the University of Southern California, diving deep into cutting-edge subjects like Algorithms, Web Technologies, Database Management, Software Development, Machine Learning and Artificial Intelligence.

I'm enthusiastic about the future and the opportunity to develop features that makes a genuine impact.

I am flexible and adaptable, just like how the nodes in the background of this section attaches itself to its neighbors.
</motion.h1> */}
    
    </section>
  );
}


{/* <motion.h1
        // className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        className="!leading-[1.5] sm:text-2xl text-white max-w-[90%] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >

<br />
      <span className="font-bold">ABOUT ME</span>
          <br />
          <br />
      
      🚀 My journey into technology started with a spark of curiosity about computers 🖥️, which swiftly blossomed into a passion - SOFTWARE DEVELOPMENT 💻. Fast forward to today, I'm a Master's student pursuing Computer Science at the University of Southern California 📚, diving deep into cutting-edge subjects like Algorithms, Web Technologies, Database Management, Software Development, Machine Learning and Artificial Intelligence.

When I'm not coding, you can find me playing or watching soccer ⚽, or watching YouTube and other OTTs. I'm enthusiastic about the future and the opportunity to develop features that makes a genuine impact. 🌟

I am flexible and adaptable, just like how the cursor moving in the background of this section attaches itself to its neighbors.
</motion.h1> */}