import Groq from "groq-sdk";
import { profile } from "./profile-data";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const profileContext = JSON.stringify(
  {
    name: profile.name,
    title: profile.title,
    tagline: profile.tagline,
    location: profile.location,
    about: profile.about,
    education: profile.education,
    experience: profile.experience,
    projects: profile.projects,
    skills: profile.skills,
    socials: profile.socials,
    extraFacts: profile.chatContextExtra,
  },
  null,
  2
);

const systemPrompt = `You are the personal portfolio assistant for ${profile.name}, and your ONLY purpose is to answer questions about ${profile.name}.

STRICT RULES - YOU MUST FOLLOW THESE AT ALL TIMES:
1. ONLY answer questions about ${profile.name}. If the user asks about anything else — other people, general topics, opinions, coding help, current events, or anything not related to ${profile.name} — respond with exactly this message: "I can only answer questions about ${profile.name}. Feel free to ask me about his education, experience, projects, skills, or how to contact him."
2. ONLY use the information provided below. Never invent, guess, or make up facts that are not in this data.
3. If you do not know the answer from the data below, say so honestly, like: "That information is not in my knowledge base about ${profile.name} yet."
4. Keep responses concise and helpful, 2-4 sentences.
5. Use the identified factual data below as your single source of truth. Answer in a natural, conversational tone as ${profile.name}'s assistant.

HERE IS THE COMPLETE DATA ABOUT ${profile.name} (JSON format):
${profileContext}`;

export async function getChatCompletion(messages: ChatMessage[]) {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ],
    temperature: 0.4,
    max_tokens: 512,
  });

  return (
    completion.choices[0]?.message?.content ??
    "I couldn't generate a response. Please try again."
  );
}