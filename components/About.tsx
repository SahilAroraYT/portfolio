import { Briefcase, GraduationCap, Layers, MapPin } from "lucide-react";
import { profile } from "@/lib/profile-data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const bentoStats = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "BTech CSE",
    note: "GNDEC, Ludhiana",
    className: "lg:col-span-2",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "1",
    note: "Internship",
    className: "",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Ludhiana",
    note: "Punjab, India",
    className: "",
  },
  {
    icon: Layers,
    label: "Stack",
    value: "Full-Stack",
    note: "Web + Mobile",
    className: "lg:col-span-2",
  },
];

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

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-lg leading-9 text-slate-400">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {(Object.values(profile.skills).flat() as string[])
                  .slice(0, 5)
                  .map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bentoStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90} className={stat.className}>
                <div className="glass group h-full rounded-2xl p-6 transition-colors duration-300 hover:border-white/20">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <p className="mt-5 text-[11px] font-medium tracking-widest text-slate-500 uppercase">
                    {stat.label}
                  </p>
                  <p className="font-display mt-1 text-xl font-bold text-slate-50">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{stat.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}