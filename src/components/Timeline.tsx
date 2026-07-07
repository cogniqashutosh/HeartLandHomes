"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, Home, Landmark, KeyRound } from "lucide-react";
import { buyingProcess } from "@/data/site";

const icons = [Search, CalendarCheck, Home, Landmark, KeyRound];

export default function Timeline() {
  return (
    <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      <div className="absolute top-8 left-0 right-0 hidden h-0.5 bg-navy-100 lg:block" />
      {buyingProcess.map((item, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg ring-4 ring-white">
              <Icon size={26} />
            </div>
            <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-600">
              Step {item.step}
            </span>
            <h3 className="mt-1 font-display text-base font-semibold text-navy-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-navy-600">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
