"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex h-18 w-full items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/brand/hh.png"
            alt={siteConfig.name}
            width={124}
            height={100}
            priority
            className="h-16 w-auto object-contain brightness-110 contrast-125 saturate-125 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] sm:h-20"
          />
        </Link>

        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hidden rounded-full px-4 py-2 font-display text-[15px] tracking-wide text-navy-800 lg:inline-block",
                isActive ? "bg-navy-50 font-semibold text-navy-900" : "font-medium"
              )}
            >
              {link.label}
            </Link>
          );
        })}

        <span className="hidden h-6 w-px bg-navy-200 lg:block" />

        <a
          href={siteConfig.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-navy-50 py-1.5 pr-3 pl-1.5 font-display text-base tracking-tight font-semibold text-navy-900 lg:flex"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
            <Phone size={14} />
          </span>
          {siteConfig.phone}
        </a>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 font-display text-base tracking-tight font-semibold text-navy-900 shadow-sm transition-transform hover:scale-105 hover:bg-gold-400 lg:inline-flex"
        >
          Schedule a Tour <ArrowRight size={15} />
        </Link>

        <button
          aria-label="Toggle menu"
          className="text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy-100 shadow-lg">
          <nav className="container-hh flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-navy-900 border-b border-navy-50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-navy-900"
            >
              Schedule a Tour
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
