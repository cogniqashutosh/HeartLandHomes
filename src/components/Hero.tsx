"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { heroStats } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950">
      <Image
        src="/images/stock/hero.jpg"
        alt="A new Heartland Homes of Florida house"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950/75 via-navy-950/25 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-navy-950/55 via-navy-950/10 to-transparent" />

      <div className="container-hh relative pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400 ring-1 ring-white/20">
            LaBelle, Florida &middot; New Home Builder
          </span>
          <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Affordable New Homes
            <br />
            Built for Florida Living
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-navy-100">
            Discover quality-built homes, thoughtfully designed communities, and exceptional
            value for families across Florida.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/floor-plans"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-transform hover:scale-105 hover:bg-gold-400"
            >
              View Floor Plans <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <PlayCircle size={18} /> Schedule a Tour
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/15 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-navy-200">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
