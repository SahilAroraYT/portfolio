import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import { Download } from 'lucide-react';
const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        ABOUT ME
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I am Sahil Arora, a B.Tech student majoring in Computer Science Engineering. 
            Over time, I developed a strong interest in web development and software engineering,
             which led me to explore various technologies and build projects
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I have experience in full-stack web development, working with technologies like React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and DaisyUI.
           My projects involve frontend and backend development, API integration, and cloud deployment.
           In addition to web development, I have worked with JavaScript, Python, and database management.
            I have also explored areas like Natural Language Processing (NLP) and Information Retrieval as part of my academic studies.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Beyond coding, I have a deep passion for chess, which has helped me develop strong analytical and problem-solving skills.
           I enjoy exploring chess strategies, creating chess-related content, and continuously improving my game.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          I am always eager to learn new technologies, take on new challenges, and enhance my skills.<br className="hidden md:block" />
            
          <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1mbbw0gI2OYSzmG4Pm5RczL1p4MB15DhD/view"
              }
            >
              <button 
      className="flex items-center justify-center gap-2 std-backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] text-white rounded-full px-6 py-3 transition-colors duration-200"
    >
      <Download size={20} />
                
      <span className="font-medium">Resume</span>
      </button>
            </Link>
            
            
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Languages
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              C/C++, JavaScript, TypeScript, Python
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Node.js, Express.js, Next.js, Django, Flask
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              HTML, CSS, TailwindCSS, Bootstrap, DaisyUI, React.js, Next.js
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Databases
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              MongoDB, MySQL, PostgreSQL
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Developer Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              VS Code, Git, GitHub, Unity Game Engine
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
