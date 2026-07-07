"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Community } from "@/data/communities";
import { formatPrice } from "@/lib/utils";

export default function CommunityCard({ community }: { community: Community }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={community.image}
          alt={community.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 text-white">
          <h3 className="font-display text-2xl font-semibold">{community.name}</h3>
          <p className="flex items-center gap-1 text-sm text-navy-100">
            <MapPin size={14} /> {community.location}
          </p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-black line-clamp-2">{community.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-semibold text-black">
            From {formatPrice(community.startingPrice)}
          </span>
          <Link
            href={`/communities/${community.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-black"
          >
            Explore Community <ArrowRight size={16} className="text-sky-600" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
