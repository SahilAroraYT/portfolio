import { Award, GraduationCap, MapPin } from "lucide-react";
import { profile } from "@/lib/profile-data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Academics"
          title="Education &"
          highlight="foundation"
          description="The academic journey that built my engineering discipline."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[22px] w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/25 to-transparent"
          />

          <ol className="space-y-12">
            {profile.education.map((entry, index) => (
              <Reveal as="li" key={`${entry.degree}-${entry.school}`} delay={index * 110}>
                <div className="relative pl-16">
                  <span
                    className="absolute top-2 left-0 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 backdrop-blur-md"
                    aria-hidden
                  >
                    <GraduationCap className="h-4.5 w-4.5" />
                  </span>

                  <div className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="font-display text-xl font-bold text-slate-50">
                        {entry.degree}
                      </h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300">
                        {entry.duration}
                      </span>
                    </div>

                    <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                      <Award className="h-3.5 w-3.5 text-cyan-300" />
                      {entry.score}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gradient-blue">
                      {entry.school}
                    </p>

                    <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {entry.location}
                    </p>
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