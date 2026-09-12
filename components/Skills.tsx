import { Code2, Sparkle } from "lucide-react";
import { profile } from "@/lib/profile-data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const marqueeSkills = (Object.values(profile.skills).flat() as string[]).filter(
  (skill, index, array) => array.indexOf(skill) === index
);

const accentColors = [
  "from-cyan-400/25 to-blue-500/10",
  "from-violet-400/25 to-fuchsia-500/10",
  "from-fuchsia-400/25 to-pink-500/10",
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Expertise"
          title="Skills &"
          highlight="technologies"
          description="The tools I use to take products from idea to production."
        />

        <Reveal className="relative mt-16 overflow-hidden py-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
          />
          <div className="animate-marquee flex w-max gap-3">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300"
              >
                <Sparkle className="h-3.5 w-3.5 text-cyan-400" />
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(profile.skills).map(([category, skills], index) => (
            <Reveal key={category} delay={index * 80}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10 ${accentColors[index % accentColors.length]}`}
                  >
                    <Code2 className="h-4.5 w-4.5 text-slate-100" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-50">
                    {category}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}