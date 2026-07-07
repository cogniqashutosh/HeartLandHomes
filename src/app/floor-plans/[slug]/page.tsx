import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Car, Ruler, FileDown, CheckCircle2, ArrowRight } from "lucide-react";
import { homeModels, getHomeBySlug } from "@/data/homes";
import { formatPrice } from "@/lib/utils";
import FloorPlanCard from "@/components/FloorPlanCard";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return homeModels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const home = getHomeBySlug(slug);
  if (!home) return {};
  return {
    title: `${home.name} Floor Plan | Heartland Homes of Florida`,
    description: home.tagline,
  };
}

export default async function FloorPlanDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const home = getHomeBySlug(slug);
  if (!home) notFound();

  const related = homeModels.filter((h) => h.slug !== home.slug).slice(0, 4);

  return (
    <div>
      <div className="container-hh pt-24 pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-3xl shadow-lg lg:h-full">
            <Image src={home.image} alt={home.name} fill className="object-cover" />
            <span className="absolute left-5 top-5 rounded-full bg-gold-500 px-4 py-1.5 text-sm font-semibold text-navy-900 shadow-sm">
              {formatPrice(home.price)}
            </span>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">Floor Plan</span>
            <h1 className="mt-2 font-display text-4xl font-semibold text-black sm:text-5xl">{home.name}</h1>
            <p className="mt-3 text-lg text-black">{home.tagline}</p>

            <div className="mt-6 grid grid-cols-4 gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
              <div className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <BedDouble size={18} />
                </span>
                <p className="mt-2 text-sm font-semibold text-black">{home.beds}</p>
                <p className="text-[11px] text-slate-500">Beds</p>
              </div>
              <div className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <Bath size={18} />
                </span>
                <p className="mt-2 text-sm font-semibold text-black">{home.baths}</p>
                <p className="text-[11px] text-slate-500">Baths</p>
              </div>
              <div className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <Car size={18} />
                </span>
                <p className="mt-2 text-sm font-semibold text-black">{home.garage.split(" ")[0]}</p>
                <p className="text-[11px] text-slate-500">Garage</p>
              </div>
              <div className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <Ruler size={18} />
                </span>
                <p className="mt-2 text-sm font-semibold text-black">{home.sqft.toLocaleString()}</p>
                <p className="text-[11px] text-slate-500">Sq. Ft.</p>
              </div>
            </div>

            <h2 className="mt-8 font-display text-lg font-semibold text-black">Features</h2>
            <ul className="mt-3 space-y-2.5">
              {home.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-black">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <CheckCircle2 size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
              >
                Request Information <ArrowRight size={16} />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-black">
                <FileDown size={16} /> Download Brochure
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-semibold text-black">Other Floor Plans</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((h) => (
                <FloorPlanCard key={h.slug} home={h} />
              ))}
            </div>
          </div>
        )}
      </div>

      <CTASection />
    </div>
  );
}
