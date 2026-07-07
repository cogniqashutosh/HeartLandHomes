import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { communities } from "@/data/communities";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-hh grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="inline-block rounded-xl bg-white px-3 py-2">
            <Image
              src="/images/brand/hh.png"
              alt={siteConfig.name}
              width={124}
              height={100}
              className="h-16 w-auto object-contain brightness-110 contrast-125 saturate-125"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white">
            Affordable, quality-built new homes across Florida&apos;s Heartland. Concrete block
            construction, granite countertops, and honest value — standard on every home.
          </p>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Heartland Homes of Florida on Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-transform hover:scale-110 hover:brightness-110"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
            </svg>
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white transition-colors hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Communities</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {communities.map((c) => (
              <li key={c.slug}>
                <Link href={`/communities/${c.slug}`} className="text-white transition-colors hover:text-gold-400">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-white">
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 ring-1 ring-navy-800">
                <MapPin size={14} />
              </span>
              <span className="pt-1.5">4501 N. Birchwood Parkway, LaBelle, FL 33935</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 ring-1 ring-navy-800">
                <Phone size={14} />
              </span>
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-gold-400">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 ring-1 ring-navy-800">
                <Mail size={14} />
              </span>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold-400">{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-hh flex flex-col items-center justify-between gap-3 py-6 text-xs text-white sm:flex-row">
          <p>© {new Date().getFullYear()} Heartland Homes of Florida. All rights reserved.</p>
          <Link href="/privacy-policy" className="transition-colors hover:text-gold-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
