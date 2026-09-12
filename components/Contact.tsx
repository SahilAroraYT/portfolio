import { Mail, MessageCircleHeart } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./BrandIcons";
import { profile } from "@/lib/profile-data";
import Reveal from "./Reveal";

const socials = [
  {
    label: "GitHub",
    href: profile.socials.github,
    icon: GitHubIcon,
    accent: "hover:border-cyan-400/40 hover:text-cyan-300",
  },
  {
    label: "LinkedIn",
    href: profile.socials.linkedin,
    icon: LinkedInIcon,
    accent: "hover:border-blue-400/40 hover:text-blue-300",
  },
  {
    label: "Twitter / X",
    href: profile.socials.twitter,
    icon: XIcon,
    accent: "hover:border-slate-400/40 hover:text-slate-200",
  },
  {
    label: "Email",
    href: `mailto:${profile.socials.email}`,
    icon: Mail,
    accent: "hover:border-cyan-400/40 hover:text-cyan-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-cyan-400/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-end justify-center gap-3">
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl">
                  Let&apos;s build something
                  <span className="text-gradient block">great together</span>
                </h2>
              </div>

              <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
                I&apos;m open to new opportunities, freelance work, and
                interesting collaborations. If you have a project in mind, I&apos;d
                love to hear about it.
              </p>

              <div className="mt-10 flex flex-col items-center gap-5">
                <a
                  href={`mailto:${profile.socials.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/25 hover:brightness-110"
                >
                  <MessageCircleHeart className="h-4 w-4" />
                  Say Hello
                  <span className="font-mono text-xs opacity-80">
                    {profile.socials.email}
                  </span>
                </a>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      className={`rounded-xl border border-white/10 bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 ${social.accent}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}