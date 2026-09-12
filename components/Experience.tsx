import { Briefcase, MapPin } from "lucide-react";
import { profile } from "@/lib/profile-data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've"
          highlight="made impact"
          description="A timeline of the work that shaped my craft."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[22px] w-px bg-gradient-to-b from-cyan-400/60 via-indigo-400/40 to-transparent"
          />

          <ol className="space-y-12">
            {profile.experience.map((entry, index) => (
              <Reveal as="li" key={`${entry.role}-${entry.company}`} delay={index * 110}>
                <div className="relative pl-16">
                  <span
                    className={`absolute top-2 left-0 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md ${
                      entry.current
                        ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                        : "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300"
                    }`}
                    aria-hidden
                  >
                    <Briefcase className="h-4.5 w-4.5" />
                  </span>

                  <div className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-50">
                          {entry.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-gradient-blue">
                          {entry.company}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300">
                        {entry.duration}
                      </span>
                    </div>

                    <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {entry.location}
                    </p>

                    <p className="mt-4 leading-7 text-slate-400">{entry.description}</p>

                    <ul className="mt-5 space-y-2.5">
                      {entry.highlights.map((item) => (
                        <li
                          key={item.slice(0, 32)}
                          className="flex gap-3 text-sm leading-6 text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}