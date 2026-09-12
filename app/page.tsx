import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 -z-10 overflow-hidden bg-background"
      >
        <div className="aurora-blob animate-aurora-1 -top-40 -left-32 h-[34rem] w-[34rem] bg-cyan-500/25" />
        <div className="aurora-blob animate-aurora-2 top-1/3 -right-40 h-[38rem] w-[38rem] bg-violet-600/25" />
        <div className="aurora-blob animate-aurora-3 -bottom-48 left-1/4 h-[32rem] w-[32rem] bg-fuchsia-600/15" />
      </div>

      <div
        aria-hidden
        className="noise pointer-events-none fixed inset-0 z-[60] opacity-[0.035]"
      />

      <Header />
      <main className="relative flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}