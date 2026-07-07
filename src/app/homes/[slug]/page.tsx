import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Car, Ruler, CheckCircle2, ArrowRight } from "lucide-react";
import { homeModels, getHomeBySlug } from "@/data/homes";
import { formatPrice } from "@/lib/utils";
import PropertyCard from "@/components/PropertyCard";
import CTASection from "@/components/CTASection";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return homeModels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const home = getHomeBySlug(slug);
  if (!home) return {};
  return {
    title: `${home.name} | Heartland Homes of Florida`,
    description: home.tagline,
  };
}

export default async function HomeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const home = getHomeBySlug(slug);
  if (!home) notFound();

  const related = homeModels.filter((h) => h.slug !== home.slug).slice(0, 3);

  return (
    <div>
      <div className="relative h-[90vh] w-full">
        <Image src={home.image} alt={home.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
        <div className="container-hh absolute bottom-8 left-0 right-0 text-white">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">{home.name}</h1>
          <p className="mt-2 text-lg text-navy-100">{home.tagline}</p>
        </div>
      </div>

      <div className="container-hh py-14">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 sm:grid-cols-4">
              <div className="text-center">
                <BedDouble className="mx-auto text-sky-500" />
                <p className="mt-2 text-lg font-semibold text-navy-900">{home.beds}</p>
                <p className="text-xs text-navy-500">Bedrooms</p>
              </div>
              <div className="text-center">
                <Bath className="mx-auto text-sky-500" />
                <p className="mt-2 text-lg font-semibold text-navy-900">{home.baths}</p>
                <p className="text-xs text-navy-500">Bathrooms</p>
              </div>
              <div className="text-center">
                <Car className="mx-auto text-sky-500" />
                <p className="mt-2 text-lg font-semibold text-navy-900">{home.garage}</p>
                <p className="text-xs text-navy-500">Garage</p>
              </div>
              <div className="text-center">
                <Ruler className="mx-auto text-sky-500" />
                <p className="mt-2 text-lg font-semibold text-navy-900">{home.sqft.toLocaleString()}</p>
                <p className="text-xs text-navy-500">Sq. Ft.</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-navy-900">Home Features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {home.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-navy-700">
                    <CheckCircle2 size={18} className="shrink-0 text-sky-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-7 text-white lg:sticky lg:top-24 lg:h-fit">
            <p className="text-sm text-navy-300">Starting at</p>
            <p className="font-display text-3xl font-bold">{formatPrice(home.price)}</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-navy-900 hover:bg-gold-400"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Request Information
              </Link>
              <Link
                href={`/floor-plans/${home.slug}`}
                className="mt-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-sky-200"
              >
                View Floor Plan <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-navy-900">Inside This Home</h2>
          <p className="mt-2 text-sm text-navy-600">
            A look at the craftsmanship, finishes, and spaces you&apos;ll find inside every Heartland home.
          </p>
          <div className="mt-6">
            <Gallery />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-navy-900">Other Floor Plans</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((h) => (
              <PropertyCard key={h.slug} home={h} />
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
