import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-div";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Contact/>
      <Footer/>
    </main>
  )
}
