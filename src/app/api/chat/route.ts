import { NextRequest, NextResponse } from "next/server";
import { homeModels } from "@/data/homes";
import { communities } from "@/data/communities";
import { siteConfig, financingHighlights } from "@/data/site";
import { formatPrice } from "@/lib/utils";

export const runtime = "nodejs";

function buildSystemPrompt() {
  const homesList = homeModels
    .map(
      (h) =>
        `- ${h.name}: ${formatPrice(h.price)}, ${h.beds} bed / ${h.baths} bath, ${h.garage}, ${h.sqft.toLocaleString()} sq. ft. — ${h.tagline}`
    )
    .join("\n");

  const communitiesList = communities
    .map(
      (c) =>
        `- ${c.name} (${c.location}, ${c.county}): from ${formatPrice(c.startingPrice)}, payments from $${c.monthlyPaymentFrom.toLocaleString()}/mo, ${c.bedsRange} bed / ${c.bathsRange} bath, ${c.sqftRange}. ${c.description}`
    )
    .join("\n");

  return `You are the friendly virtual assistant for Heartland Homes of Florida, an affordable new-home builder based in LaBelle, FL.

Answer visitor questions directly and conversationally using ONLY the facts below. Keep replies short (2-4 sentences) unless asked for a list. If you don't know something from the data below, say so honestly and suggest calling ${siteConfig.phone} or visiting the Contact page — never make up prices, addresses, or availability.

FLOOR PLANS / HOMES:
${homesList}

COMMUNITIES:
${communitiesList}

FINANCING:
${financingHighlights.promo}. ${financingHighlights.paymentFrom}. ${financingHighlights.rate}. ${financingHighlights.usda}
Mortgage partner: ${financingHighlights.mortgagePro.name} of ${financingHighlights.mortgagePro.company}, ${financingHighlights.mortgagePro.phone}, ${financingHighlights.mortgagePro.email} (NMLS# ${financingHighlights.mortgagePro.nmls}).

CONTACT:
Phone: ${siteConfig.phone} | Email: ${siteConfig.email}

All homes include concrete block construction and granite countertops as standard features, not upgrades.`;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      reply: `Our chat assistant isn't fully set up yet. In the meantime, call us at ${siteConfig.phone} or use the contact form and our team will help right away.`,
    });
  }

  const { messages } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "No messages provided" }, { status: 400 });
  }

  const recentMessages = messages.slice(-12);

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.4,
        max_tokens: 400,
        messages: [{ role: "system", content: buildSystemPrompt() }, ...recentMessages],
      }),
    });

    if (!groqRes.ok) {
      return NextResponse.json({
        reply: `Sorry, I'm having trouble connecting right now. Please call us at ${siteConfig.phone} or use the contact form.`,
      });
    }

    const data = await groqRes.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I didn't quite catch that — could you rephrase your question?";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply: `Sorry, I'm having trouble connecting right now. Please call us at ${siteConfig.phone} or use the contact form.`,
    });
  }
}
