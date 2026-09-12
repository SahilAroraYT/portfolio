import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="mb-5 inline-flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
        <span className="font-mono text-cyan-300">{index}</span>
        {eyebrow}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-fuchsia-400" />
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}