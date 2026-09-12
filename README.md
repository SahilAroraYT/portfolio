# Sahil Arora — Portfolio

A modern, dark-mode portfolio website with an AI assistant that answers questions about the owner — and **only** about the owner.

Built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and the **Groq** free API.

## Features

- **Sections**: Hero, About, Experience, Projects, Skills, Education, Contact
- **AI Chat:** floating chat widget (bottom-right) powered by Groq. The model is prompt-locked to only answer questions about Sahil — anything off-topic is refused.
- Modern "aurora glass" design: near-black background, aurora gradient blobs, glassmorphism cards, Syne + Outfit typography
- Dark mode only, responsive, mobile menu, reveal-on-scroll animations, spotlight project cards
- Server-side API key (never exposed to the browser)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your environment file and add a free Groq API key from <https://console.groq.com>:

   ```bash
   cp .env.local.example .env.local
   # then edit .env.local and set GROQ_API_KEY=gsk_...
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Customizing Content

All personal data lives in one file: [lib/profile-data.ts](lib/profile-data.ts). Update it and both the website sections **and** the AI's knowledge base update automatically. Placeholders (dates, emails, social links, some copy) are intentionally marked — replace them with your real information.

## Environment Variables

| Variable       | Description                              |
| -------------- | ---------------------------------------- |
| `GROQ_API_KEY` | Required. Free key from console.groq.com |

## AI Chat Behavior

- Endpoint: `POST /api/chat` (see [app/api/chat/route.ts](app/api/chat/route.ts))
- Model: `llama-3.1-8b-instant` on the Groq free tier
- The system prompt instructs the model it is an AI assistant for Sahil Arora: answer questions about Sahil using the injected profile data, and politely refuse anything else.
- If `GROQ_API_KEY` is missing, the API returns `500` and the chat shows a friendly error.

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Deploy on Vercel (Free)

1. Push this project to a GitHub repository.
2. Go to <https://vercel.com/new> and import the repository.
3. Under **Environment Variables**, add `GROQ_API_KEY`.
4. Deploy. The Hobby (free) plan is enough — no domain purchase needed; Vercel gives you a free `*.vercel.app` URL.