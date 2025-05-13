import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import stocksearchimg from "@/public/stock-search.png";
import ecommerceimg from "@/public/ecommerce.png";
import trafficlightimg from "@/public/trafficlight.jpg";
import authenticationImg from "@/public/authentication.png";
import smartfarmerImg from "@/public/smartfarmer.avif";
import vehicletrackingImg from "@/public/vehicletracking.png";
import lanedetImg from "@/public/lanedet.jpg";
import homeautoImg from "@/public/homeauto.jpg";
import speak2fitImg from "@/public/speak2fit.png"
import speak2fit1Img from "@/public/speak2fit1.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Android Developer Intern",
    location: "WorkUp",
    description:
      "Spearheaded development of WorkUp Android application using Kotlin, implementing innovative features and optimizing code for better performance. Achieved 25% increase in user engagement, 15% reduction in app crashes, improved overall experience. Played key role in project planning, task delegation, quality assurance, contributing to launch and continuous improvement of application.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - July 2024",
  },
  {
    title: "Web Developer Intern",
    location: "Yottabite",
    description:
      "Led Yottabite’s web development division, for designing company’s main website from initial stages. Utilized HTML and CSS majorly to architect website’s design while accomplishing server-side functionalities through NodeJS.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2021 - October 2021",
  },
  {
    title: "Intern",
    location: "Department of Computer Technology, Anna University",
    description:
      "Collaborated with front-end web development team responsible for digitization of department operations. Built a dedicated webpage within departmental website to showcase research endeavors done by multiple student cohorts, enabling seamless search, viewing, and retrieval of diverse publications detailing departmental research activities for various users of website.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2020 - June 2021",
  },
  {
    title: "Intern",
    location: "AltSense",
    description:
      "Underwent training on Internet of Things (IoT) methodology, tools and techniques by working on Arduino, sensors and various electronic tools and built real time applications.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2019 - February 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Speak2Fit AI",
    description:
      "Built fitness tracking web app integrating Google Gemini API, interactive dashboards to visualize user exercise trends, insights, enhancing usability, engagement. Engineered real-time speech-to-data pipeline for seamless activity logging and storage in database.",
    tags: ["JavaScript", "MongoDB", "Node.js", "GCP", "React", "REST APIs", "TypeScript", "Docker"],
    icons: [
      "logos:google-cloud",
      "logos:react",
      "logos:mongodb-icon",
      "logos:nodejs-icon",
      "logos:rest",
      "vscode-icons:file-type-typescript",
      "logos:docker-icon"
    ],
    imageUrl: speak2fitImg1,
    githubLink: "https://github.com/danush21/Speak2Fit-AI",
    demoLink: "https://speak2fit-ai.wl.r.appspot.com/",
  },
  {
    title: "Stock Search Web Application",
    description:
      "Developed Web application utilizing APIs for real-time stock information retrieval, trending news, summarized visual graphs, implementing latest technologies for seamless data interaction. Designed responsive user interface, featuring autocomplete search function, detailed stock metrics display.",
    tags: ["JavaScript", "Angular", "Node.js", "AWS", "AJAX", "REST APIs", "TypeScript"],
    icons: [
      "logos:aws",
      "logos:javascript",
      "vscode-icons:file-type-angular",
      "logos:nodejs-icon",
      "devicon:ajax",
      "logos:rest",
      "vscode-icons:file-type-typescript"
    ],
    imageUrl: stocksearchimg,
    githubLink: "https://github.com/danush21/stock-search",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "E - Commerce Multi - Platform Application",
    description:
      "Developed intuitive Android and Web application enabling users to explore,retrieve information on eBay products. Delivered application addressing identified need, enhancing user engagement, satisfaction while providing user-friendly interface for exploring eBay products combining product search functionalities with seamless social sharing capabilities.",
    tags: ["Android", "Node.js", "TypeScript", "React", "AJAX", "GCP"],
    icons: [
      "logos:android-icon",
      "logos:nodejs-icon",
      "vscode-icons:file-type-typescript",
      "devicon:react",
      "logos:bootstrap",
      "logos:google-cloud",
    ],
    imageUrl: ecommerceimg,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/danush21/E-Commerce-Multi-Platform-Application",
  },
  {
    title: "Smart Traffic Light System",
    description:
      "Devised an IoT sensor-based solution for recognizing incoming emergency vehicles, incorporating data from emergency vehicles to prioritize designated lane at traffic signals. Reduced average time to reach destination by 22% and produced a success rate of 97%.",
    tags: ["IoT", "Arduino", "HTML"],
    icons: [
      "vscode-icons:file-type-arduino", 
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "vscode-icons:file-type-android"
    ],
    imageUrl: trafficlightimg,
    githubLink: "https://github.com/danush21/Smart-Traffic-Light-System",
    urlLink: "https://www.igi-global.com/chapter/internet-of-things-based-smart-traffic-light-system-for-hassle-free-movement-of-emergency-vehicles/319880?utm_campaign=shareaholic&utm_medium=copy_link&utm_source=bookmark",
  },
  {
    title: "Remote Data Authentication in Cloud Environments",
    description:
      "Implemented a simple and power-saving mechanism for access of data and data exchange via cloud environments. A multilevel authentication based data access system is introduced to enhance security and reduce authentication time by 20%.",
    tags: ["Python", "AWS"],
    icons: [
      "logos:python",
      "logos:aws",
    ],
    imageUrl: authenticationImg,
    githubLink: "https://github.com/danush21/Remote-Data-Authentication-in-Cloud-Environments",
  },
  {
    title: "Smart Farmer",
    description:
      "Farmers get complete digital analysis of farm data such as soil moisture, temperature, humidity in real-time. Accomplished task of monitoring parameters by deploying various sensors helping farmers to monitor all sensor parameters by using a web or mobile application.",
    tags: ["Internet of Things", "MIT App Inventor", "Python", "IBM"],
    icons: [
      "logos:python", 
      "vscode-icons:file-type-arduino", 
      "logos:android-icon", 
      "logos:ibm"
    ],
    imageUrl: smartfarmerImg,
    githubLink: "https://github.com/danush21/Smart-Farmer",
  },
  {
    title: "Vehicle Tracking System",
    description:
      "Vehicle Tracking System using tollgate data is designed to automatically keep track of vehicle's movement, record tollgate passing time and details such as owner's name, toll gates passed, phone number. Vehicle Tracking System by analyzing tollgate data collected using RFID Tags and Sensors to automate monitoring vehicle movements, recording tollgate passage times. Significantly improved efficiency of tracking vehicle movements and ensured accurate tollgate passage records.",
    tags: ["HTML", "CSS", "Javascript", "MySQL", "Arduino", "NodeMCU"],
    icons: [
      "vscode-icons:file-type-arduino", 
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
      "logos:mysql",
      "logos:bootstrap"
    ],
    imageUrl: vehicletrackingImg,
    githubLink: "https://github.com/danush21/Vehicle-Tracking-System",
    // urlLink: "https://techprowl.herokuapp.com",
  },
  {
    title: "Lane Detection",
    description:
      "Developed to detect the road lanes in which autonomous cars must run. This will be a critical part of autonomous cars, as the self-driving cars should not cross its lane and should not go in opposite lane to avoid accidents.",
    tags: ["Python", "OpenCV"],
    icons: ["logos:python"],
    imageUrl: lanedetImg,
    githubLink: "https://github.com/danush21/Lane-Detection",
  },
  {
    title: "Home Automation",
    description:
      "Developed automation devices aimed to conserve energy, and ease work of human. Features developed were to enable microcontroller adjust light appliances based on amount of natural light present in the room and also accessing appliances from any smart device using a local server.",
    tags: ["Arduino", "NodeMCU"],
    icons: ["vscode-icons:file-type-arduino"],
    imageUrl: homeautoImg,
    githubLink: "https://github.com/danush21/Home-Automation",
    // demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  },
] as const;

export const skillsData = [
  {
    name: "C",
    icon: "logos:c",
  },
  {
    name: "C++",
    icon: "vscode-icons:file-type-cpp",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  // {
  //   name: "Laravel",
  //   icon: "logos:laravel",
  // },
  {
    name: "Angular",
    icon: "logos:angular-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
  },
  // {
  //   name: "AJAX",
  //   icon: "vscode-icons:file-type-ajax",
  // },
  {
    name: "Flask",
    icon: "logos:flask",
  },
  {
    name: "REST APIs",
    icon: "logos:rest",
  },
  // {
  //   name: "GraphQL",
  //   icon: "logos:graphql",
  // },
  // {
  //   name: "Symfony",
  //   icon: "logos:symfony",
  // },
  // {
  //   name: "SCSS",
  //   icon: "logos:sass",
  // },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Kotlin",
    icon: "logos:kotlin-icon",
  },
  {
    name: "Android",
    icon: "logos:android-icon",
  },
  {
    name: "Arduino",
    icon: "vscode-icons:file-type-arduino",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "Bash",
    icon: "logos:bash-icon",
  },
  {
    name: "Terraform",
    icon: "logos:terraform-icon",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "GCP",
    icon: "logos:google-cloud",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
] as const;
