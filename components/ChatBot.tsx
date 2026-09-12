"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { profile } from "@/lib/profile-data";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content: `Hi! I'm ${profile.name.split(" ")[0]}'s AI assistant. Ask me anything about ${profile.name.split(" ")[0]} — his education, experience, skills, projects, or how to contact him.`,
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function handleSend() {
    const content = input.trim();
    if (!content || isLoading) return;

    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content },
    ];
    setMessages(updatedMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.slice(-10),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to get a response");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch {
      setError(
        "Sorry, I couldn't reach my brain right now. Please try again in a moment."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-label="Ask about Sahil Arora"
          className="glass-strong fixed right-4 bottom-24 z-40 flex h-[28rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl shadow-2xl shadow-black/60 sm:right-6"
        >
          <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div
              aria-hidden
              className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-r from-cyan-500/15 via-sky-500/15 to-cyan-400/15 blur-2xl"
            />
            <div className="relative flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-sky-500/30 ring-1 ring-white/15">
                <Bot className="h-4.5 w-4.5 text-cyan-300" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-slate-50">
                  Ask {profile.name.split(" ")[0]}
                </p>
                <p className="text-xs text-slate-400">
                  {isLoading ? "Thinking..." : "Online · Knows Sahil well"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="relative rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-br-md shadow-lg shadow-cyan-900/30"
                      : "border border-white/10 bg-white/5 text-slate-200 rounded-bl-md"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-200" />
                </div>
              </div>
            )}

            {error && (
              <p className="text-center text-xs text-red-400">{error}</p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask about ${profile.name.split(" ")[0]}...`}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
              aria-label="Your message"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-cyan-600 to-sky-600 text-white shadow-xl shadow-cyan-950/40 transition-all duration-300 hover:scale-105 hover:shadow-cyan-900/40 sm:right-6 sm:bottom-6"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <span
          aria-hidden
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-500/40 to-sky-500/40 opacity-50 blur-lg transition-opacity group-hover:opacity-80"
        />
        <span className="relative">
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Sparkles className="h-6 w-6" />
          )}
        </span>
      </button>
    </>
  );
}