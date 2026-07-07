"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Bath, Car, Ruler, FileDown, ArrowRight } from "lucide-react";
import { HomeModel } from "@/data/homes";
import { formatPrice } from "@/lib/utils";

export default function FloorPlanCard({ home }: { home: HomeModel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-48 w-full">
        <Image src={home.image} alt={home.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-black">{home.name}</h3>
          <span className="rounded-full bg-sky-50 px-2.5 py-1 text-sm font-semibold text-sky-700">
            {formatPrice(home.price)}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs font-medium text-black">
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <BedDouble size={15} />
            </span>
            {home.beds} Bed
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Bath size={15} />
            </span>
            {home.baths} Bath
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Car size={15} />
            </span>
            {home.garage.includes("garage") ? home.garage.split(" ")[0] : "—"}
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Ruler size={15} />
            </span>
            {home.sqft.toLocaleString()}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
          <Link
            href={`/floor-plans/${home.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-black"
          >
            View Plan <ArrowRight size={15} className="text-sky-600" />
          </Link>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-black">
            <FileDown size={14} /> Brochure
          </button>
        </div>
      </div>
    </motion.div>
  );
}
