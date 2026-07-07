"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Trash2, Loader2 } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content: "Hi there! 👋 Ask me about our floor plans, communities, pricing, or financing.",
};

const quickQuestions = [
  "What floor plans do you have?",
  "What communities are available?",
  "Do you offer financing?",
  "How do I schedule a tour?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async (question: string) => {
    if (!question.trim() || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      const reply: string = data.reply || "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    askQuestion(input);
  };

  const handleClear = () => {
    setMessages([GREETING]);
    setInput("");
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-3 z-40 flex max-h-130 w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
          <div className="flex items-center justify-between bg-navy-900 px-5 py-4">
            <div>
              <p className="font-display text-sm font-semibold text-white">Heartland Homes Assistant</p>
              <p className="text-xs text-navy-300">Ask a question, get a real answer</p>
            </div>
            <div className="flex items-center gap-3">
              <button aria-label="Clear conversation" onClick={handleClear} className="text-white">
                <Trash2 size={18} />
              </button>
              <button aria-label="Close chat" onClick={() => setOpen(false)} className="text-white">
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "assistant"
                    ? "max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-black"
                    : "ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-sky-600 px-4 py-3 text-sm text-white"
                }
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="flex max-w-[85%] items-center gap-2 rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-black">
                <Loader2 size={14} className="animate-spin" /> Thinking...
              </div>
            )}

            {messages.length === 1 && (
              <div className="flex flex-col gap-2 pt-1">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => askQuestion(q)}
                    className="rounded-full border border-slate-200 px-4 py-2 text-left text-sm font-medium text-black"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-100 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="min-w-0 flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm text-black outline-none placeholder:text-slate-400 focus:border-sky-500"
            />
            <button
              type="submit"
              disabled={loading}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white disabled:opacity-60"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-3 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-lg"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
