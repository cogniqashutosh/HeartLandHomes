"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Bath, Car, Ruler, ArrowRight } from "lucide-react";
import { HomeModel } from "@/data/homes";
import { formatPrice } from "@/lib/utils";

export default function PropertyCard({ home }: { home: HomeModel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={home.image}
          alt={home.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">
          {formatPrice(home.price)}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-black">{home.name}</h3>
        <p className="mt-1 text-sm text-black line-clamp-2">{home.tagline}</p>
        <div className="mt-4 flex items-center gap-4 text-sm font-medium text-black">
          <span className="flex items-center gap-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <BedDouble size={14} />
            </span>
            {home.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Bath size={14} />
            </span>
            {home.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Car size={14} />
            </span>
            {home.garage.replace(" garage", "").replace("Driveway parking", "—")}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Ruler size={14} />
            </span>
            {home.sqft.toLocaleString()}
          </span>
        </div>
        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={`/homes/${home.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-black"
          >
            View Details <ArrowRight size={16} className="text-sky-600" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
