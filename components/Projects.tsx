import { ArrowUpRight, Folder } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import { profile } from "@/lib/profile-data";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Portfolio"
          title="Featured"
          highlight="projects"
          description="Things I've designed, built, and shipped."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 90}
              className={project.featured ? "sm:col-span-2" : ""}
            >
              <SpotlightCard className="h-full">
                <article className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div
                    aria-hidden
                    className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-70"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 ring-1 ring-white/10">
                        <Folder className="h-5 w-5 text-cyan-300" />
                      </span>
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} source code`}
                            className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                          >
                            <GitHubIcon className="h-4 w-4" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} live demo`}
                            className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition-colors hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display mt-6 text-xl font-bold text-slate-50">
                      {project.name}
                    </h3>

                    <p className="mt-3 flex-1 leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors hover:border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}