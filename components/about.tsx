"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-13 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a final-year <span className="font-medium">Telecommunication Engineering</span> student with a strong passion for technology, especially in <span className="font-medium">Web and Mobile App Development</span> as well as <span className="font-medium">AI</span>. Since my third semester, I've been exploring the world of modern software development, focusing on building responsive and user-centric digital experiences.
        <br /><br />
        I specialize in <span className="font-medium">Front-End</span> development using <span className="font-medium">React</span> and <span className="font-medium">Next.js</span>, leveraging <span className="font-medium">Tailwind CSS</span> and <span className="font-medium">Bootstrap</span> to create clean and functional designs. I'm also proficient with <span className="font-medium">TypeScript</span>, <span className="font-medium">Node.js</span>, and always eager to learn and adopt new technologies to craft innovative solutions.
      </p>

    </motion.section>
  );
}
