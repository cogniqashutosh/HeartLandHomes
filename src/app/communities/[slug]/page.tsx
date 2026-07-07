import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, GraduationCap, CheckCircle2 } from "lucide-react";
import { communities, getCommunityBySlug } from "@/data/communities";
import { homeModels } from "@/data/homes";
import { formatPrice } from "@/lib/utils";
import PropertyCard from "@/components/PropertyCard";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return {};
  return {
    title: `${community.name} | Heartland Homes of Florida`,
    description: community.description,
  };
}

export default async function CommunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) notFound();

  const availableHomes = homeModels.filter((h) => {
    const [minSqft, maxSqft] = community.sqftRange
      .replace(" sq. ft.", "")
      .split("–")
      .map((n) => Number(n.replace(/,/g, "")));
    return h.sqft >= minSqft && h.sqft <= maxSqft;
  });

  return (
    <div>
      <div className="relative h-[90vh] w-full">
        <Image src={community.image} alt={community.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
        <div className="container-hh absolute bottom-8 left-0 right-0 text-white">
          <p className="flex items-center gap-1.5 text-sm text-navy-100">
            <MapPin size={14} /> {community.location} &middot; {community.county}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{community.name}</h1>
        </div>
      </div>

      <div className="container-hh py-14">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-navy-900">Community Overview</h2>
            <p className="mt-4 leading-7 text-black">{community.description}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-navy-900">Amenities</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {community.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-3 font-medium text-black">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <CheckCircle2 size={16} />
                  </span>
                  {amenity}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-semibold text-navy-900">Nearby Schools</h2>
            <ul className="mt-4 space-y-2.5">
              {community.nearbySchools.map((school) => (
                <li key={school} className="flex items-center gap-3 font-medium text-black">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <GraduationCap size={16} />
                  </span>
                  {school}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-semibold text-navy-900">Location</h2>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-slate-100">
              <iframe
                title={`Map of ${community.name}`}
                className="h-full w-full"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${community.name}, ${community.location}`
                )}&output=embed`}
              />
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-7 text-white lg:sticky lg:top-24 lg:h-fit">
            <p className="text-sm text-navy-300">Starting from</p>
            <p className="font-display text-3xl font-bold">{formatPrice(community.startingPrice)}</p>
            <p className="mt-1 text-sm text-navy-300">
              Payments from ${community.monthlyPaymentFrom.toLocaleString()}/month*
            </p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between border-b border-white/10 py-2">
                <dt className="text-navy-300">Bedrooms</dt>
                <dd>{community.bedsRange}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 py-2">
                <dt className="text-navy-300">Bathrooms</dt>
                <dd>{community.bathsRange}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 py-2">
                <dt className="text-navy-300">Square Footage</dt>
                <dd>{community.sqftRange}</dd>
              </div>
            </dl>
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
            </div>
          </div>
        </div>

        {availableHomes.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-navy-900">Available Homes in {community.name}</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {availableHomes.map((home) => (
                <PropertyCard key={home.slug} home={home} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-navy-900">Gallery</h2>
          <div className="mt-6">
            <Gallery />
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
