"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="pb-12!"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name}>
          <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-100">
            <Quote className="text-gold-500" size={28} />
            <div className="mt-3 flex gap-0.5 text-gold-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-6 text-navy-700">&ldquo;{t.review}&rdquo;</p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-navy-900">{t.name}</p>
              <p className="text-xs text-navy-500">{t.location}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
