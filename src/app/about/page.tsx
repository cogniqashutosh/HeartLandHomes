import { Metadata } from "next";
import Image from "next/image";
import { Home, ShieldCheck, HeartHandshake, HardHat } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import CTASection from "@/components/CTASection";
import { aboutContent } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Heartland Homes of Florida",
  description: "Learn about Heartland Homes of Florida's mission, values, and commitment to affordable, quality-built homes.",
};

const values = [
  { icon: Home, title: "Affordable by Design", description: aboutContent.value, accent: "sky" },
  { icon: HardHat, title: "Standard, Not Upgrade", description: aboutContent.philosophy, accent: "gold" },
  {
    icon: ShieldCheck,
    title: "Concrete Block Quality",
    description: "Every home is built with concrete block construction and granite countertops from day one.",
    accent: "sky",
  },
  { icon: HeartHandshake, title: "Customer Commitment", description: aboutContent.closing, accent: "gold" },
] as const;

const accentClasses = {
  sky: "bg-sky-50 text-sky-600",
  gold: "bg-gold-500/15 text-gold-600",
};

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[90vh] w-full">
        <Image src="/images/stock/community-port-labelle.jpg" alt="A Heartland Homes community" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/30 to-transparent" />
        <div className="container-hh absolute bottom-8 left-0 right-0 text-white">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-400">About Us</span>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Building Florida&apos;s Heartland</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container-hh max-w-3xl text-center">
          <span className="mx-auto mb-5 block h-1 w-12 rounded-full bg-gold-500" />
          <p className="font-display text-xl leading-8 font-semibold text-navy-900">{aboutContent.intro}</p>
          <p className="mt-6 leading-7 text-slate-600">{aboutContent.history}</p>
        </div>
      </section>

      <section className="bg-navy-50/60 py-16">
        <div className="container-hh">
          <SectionHeader eyebrow="Our Values" title="Mission & Values" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentClasses[v.accent]}`}>
                  <v.icon size={24} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-hh">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Build Your Home"
            description="From your first visit to move-in day, our process is designed to be simple and transparent."
          />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
