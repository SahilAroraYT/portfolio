import { BookOpenCheck, MapPin } from "lucide-react";
import { profile } from "@/lib/profile-data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Academics"
          title="Education &"
          highlight="foundation"
        />

        <div className="mx-auto mt-16 max-w-3xl">
          {profile.education.map((entry, index) => (
            <Reveal key={`${entry.degree}-${entry.school}`} delay={index * 100}>
              <div className="glass group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/25 to-fuchsia-500/20 ring-1 ring-white/15">
                    <BookOpenCheck className="h-6 w-6 text-cyan-300" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold leading-7 text-slate-50 sm:text-2xl">
                      {entry.degree}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-gradient-blue">
                      {entry.school}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {entry.location}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {entry.duration}
                      </span>
                    </div>

                    <p className="mt-4 leading-7 text-slate-400">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}