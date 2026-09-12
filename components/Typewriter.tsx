"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  "data-role"?: string;
};

export default function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1600,
  "data-role": dataRole,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && text === current) {
      delay = pauseDuration;
    } else if (deleting && text === "") {
      delay = pauseDuration / 4;
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span data-role={dataRole}>
      {text}
      <span
        className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.14em] rounded-full bg-cyan-400 animate-blink"
        aria-hidden
      />
    </span>
  );
}