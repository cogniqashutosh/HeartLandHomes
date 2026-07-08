"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white">
      <div className="grid h-20 w-full grid-cols-2 items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/brand/hh.png"
            alt={siteConfig.name}
            width={124}
            height={100}
            priority
            className="h-16 w-auto object-contain brightness-110 contrast-125 saturate-125 sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1.5 text-lg font-semibold text-navy-800 transition-colors",
                  isActive && "text-navy-900"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-gold-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-end lg:flex">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Schedule a Tour <ArrowRight size={14} />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="justify-self-end text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
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
