import Image from "next/image";
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
          index="04"
          eyebrow="Portfolio"
          title="Featured"
          highlight="projects"
          description="Things I've designed, built, and shipped."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {profile.projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 90}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <SpotlightCard className="h-full">
                <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  {project.image ? (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent"
                      />
                    </div>
                  ) : (
                    <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.01]">
                      <Folder className="h-10 w-10 text-slate-600" />
                      <span className="absolute right-4 bottom-3 text-[11px] font-medium tracking-widest text-slate-600 uppercase">
                        Preview coming soon
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-slate-50">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} source code on GitHub`}
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
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                          >
                            Live Demo
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

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