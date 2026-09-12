import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/profile-data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title="Turning ideas into"
          highlight="real products"
          description="Software Developer focused on user-centered design and clean engineering."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="animate-float relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/25 via-blue-500/15 to-fuchsia-500/20 blur-2xl"
              />
              <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.02] p-3 backdrop-blur-xl">
                <Image
                  src="/sahil.png"
                  alt={`${profile.name} portrait`}
                  width={768}
                  height={1024}
                  priority
                  className="h-auto w-full rounded-3xl object-cover"
                />
                
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-50 sm:text-3xl">
                {profile.tagline}
              </h3>

              <div className="mt-5 space-y-4">
                {profile.about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-base leading-8 text-slate-400 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-fuchsia-500/25 hover:brightness-110"
              >
                Let&apos;s work together
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}