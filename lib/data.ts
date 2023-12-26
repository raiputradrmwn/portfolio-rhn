import Probox from "@/public/probox.png";
import Cyber from "@/public/cyberrecuirment.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "ProBox",
    description:
      "I worked as a Front-end developer to build the Website Monitoring on this project.  ProBox is a state-of-the-art, technology-enhanced container designed to enhance security measures to protect valuable items, documents or possessions.",
    tags: ["React.js", "Vite.js", "Tailwind CSS"],
    imageUrl: Probox,
    link:"https://medium.com/@cpslaboratory2324/probox-tempat-penyimpanan-dengan-keamanan-cerdas-menggunakan-teknologi-rfid-f4bdd1535813",
  },
  {
    title: "Cyber Recuitment",
    description:    
      "As a Front-end Developer, my role included creating a specialized Cyber Recruitment website for aspiring Cyber Physical System assistants. The website simplifies and expedites application and registration procedures. Our platform provides a seamless and user-friendly interface, enhancing the overall recruitment experience for candidates in the dynamic field of Cyber Physical Systems.",
    tags: ["React.js","Next.js", "Tailwind CSS"],
    imageUrl: Cyber,
    link:"https://cyberrecruitment.cpsrg.org/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "React",
  "Next.js",
  "Node.js",
  "Vite.js",
  "Git",
  "Framer Motion",
] as const;
