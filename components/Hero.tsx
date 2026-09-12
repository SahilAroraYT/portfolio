import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/lib/profile-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="grid-overlay pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="animate-pulse-ring relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            {profile.availability}
          </p>

          <h1
            className="animate-fade-up mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Hi, I&apos;m
            <span className="text-gradient block">Sahil Arora</span>
          </h1>

          <p
            className="animate-fade-up mt-6 text-xl font-medium text-slate-300 sm:text-2xl"
            style={{ animationDelay: "240ms" }}
          >
            I&apos;m a {profile.roles[0]}
          </p>

          <p
            className="animate-fade-up mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0"
            style={{ animationDelay: "360ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start sm:justify-center"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/25 hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" />
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto hidden w-72 sm:block sm:w-80 lg:w-full lg:max-w-sm"
          style={{ animationDelay: "300ms" }}
        >
          <div className="animate-float relative">
            <div
              aria-hidden
              className="animate-spin-slow absolute -inset-5 rounded-[2.5rem] bg-[conic-gradient(from_0deg,#22d3ee,#0ea5e9,#38bdf8,#22d3ee)] opacity-30 blur-2xl"
            />
            <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.02] p-3 backdrop-blur-xl">
              <Image
                src={profile.avatar}
                alt={`${profile.name} portrait`}
                width={512}
                height={512}
                priority
                className="rounded-3xl object-cover"
              />
              <div className="glass mt-3 flex items-center justify-between rounded-2xl px-4 py-3">
                <div>
                  <p className="font-display text-sm font-bold text-slate-50">
                    {profile.name}
                  </p>
                  <p className="text-xs text-slate-400">{profile.title}</p>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                </span>
              </div>
            </div>
          </div>

          <div className="glass animate-float absolute -left-10 top-16 hidden rounded-2xl px-4 py-3 xl:block">
            <p className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
              Based in
            </p>
            <p className="font-display text-sm font-bold text-slate-50">
              Ludhiana, 🇮🇳
            </p>
          </div>

          <div
            className="glass animate-float absolute -right-6 bottom-24 hidden rounded-2xl px-4 py-3 xl:block"
            style={{ animationDelay: "1.4s" }}
          >
            <p className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
              Crafting
            </p>
            <p className="font-display text-sm font-bold text-gradient">
              Web &amp; Apps
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-slate-500 uppercase">
          Scroll
        </span>
        <span className="animate-scroll-hint inline-block h-9 w-5 rounded-full border border-slate-600 p-1">
          <span className="mx-auto block h-2.5 w-1 rounded-full bg-cyan-400" />
        </span>
      </a>
    </section>
  );
}