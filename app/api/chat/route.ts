import type { ChatMessage } from "@/lib/groq";
import { getChatCompletion } from "@/lib/groq";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let messages: ChatMessage[];

  try {
    const body = await request.json();
    messages = body.messages;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.some(
      (m) =>
        typeof m.content !== "string" ||
        (m.role !== "user" && m.role !== "assistant")
    )
  ) {
    return Response.json({ error: "Invalid messages format" }, { status: 400 });
  }

  try {
    const content = await getChatCompletion(messages);
    return Response.json({ content });
  } catch (error) {
    console.error("Chat completion failed:", error);
    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}