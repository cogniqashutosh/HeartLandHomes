import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Car, Ruler, FileDown, CheckCircle2 } from "lucide-react";
import { homeModels, getHomeBySlug } from "@/data/homes";
import { formatPrice } from "@/lib/utils";

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

  return (
    <div className="pt-32 pb-20">
      <div className="container-hh">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-full">
            <Image src={home.image} alt={home.name} fill className="object-cover" />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">Floor Plan</span>
            <h1 className="mt-2 font-display text-4xl font-semibold text-black">{home.name}</h1>
            <p className="mt-3 text-black">{home.tagline}</p>
            <p className="mt-4 font-display text-2xl font-bold text-black">{formatPrice(home.price)}</p>

            <div className="mt-6 grid grid-cols-4 gap-3 rounded-xl bg-slate-50 p-4">
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
                className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white"
              >
                Request Information
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-black">
                <FileDown size={16} /> Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
