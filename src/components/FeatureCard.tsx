"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 transition-shadow hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-navy-600">{description}</p>
    </motion.div>
  );
}
