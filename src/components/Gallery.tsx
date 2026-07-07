"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/site";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {galleryImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActiveIndex(i)}
            className={`relative overflow-hidden rounded-xl ring-1 ring-navy-100 ${
              i === 0 ? "col-span-2 row-span-2 h-64 sm:h-full" : "h-32 sm:h-40"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4"
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 text-white hover:text-gold-400"
              onClick={close}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-3 sm:left-8 text-white hover:text-gold-400"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative h-[70vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute right-3 sm:right-8 text-white hover:text-gold-400"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
