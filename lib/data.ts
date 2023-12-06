import Probox from "@/public/probox.png";

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
      "I worked as a Front-end developer on this project.  ProBox is an advanced and technologically equipped container designed to enhance security measures for protecting valuable items, documents, or possessions.",
    tags: ["React.js", "Vite.js", "Tailwind CSS", "Daisy UI"],
    imageUrl: Probox,
    link:"https://medium.com/@cpslaboratory2324/probox-tempat-penyimpanan-dengan-keamanan-cerdas-menggunakan-teknologi-rfid-f4bdd1535813",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "Vite.js",
  "Daisy UI"
] as const;
