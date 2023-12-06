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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a third-year student pursuing a degree in{" "}
        <span className="font-medium">Telecommunication Engineering</span>, My
        journey into the realm of technology began in my third semester, where I
        discovered my passion for delving into the exciting world of{" "}
        <span className="font-medium">
          Web Development and Internet of Things (IoT)
        </span>
        . I've focused on devolopong my{" "}
        <span className="font-medium">Front-End </span> skils,leveraging the
        power of {""} <span className="font-medium">React, Next.js.</span> to
        create responsive and dynamic user experiences. Proficiency in using{" "}
        <span className="font-medium">Tailwind CSS and Bootstrap</span> has laid
        the foundation for aesthetically pleasing and functional designs. I am
        also familiar with TypeScript, Node.js and I always looking to learn new
        technologies.
      </p>

      <p>
        As a developer, I don't just chase technological sophistication; I also
        find joy in exploring creativity through gaming and music. When not
        immersed in code, you might find me enjoying the{" "}
        <span className="font-medium">Gaming world</span> or getting lost in the
        rhythms <span className="font-medium">of inspiring music</span>
      </p>
    </motion.section>
  );
}
