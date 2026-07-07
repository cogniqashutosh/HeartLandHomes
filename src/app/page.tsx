import Link from "next/link";
import { ArrowRight, DollarSign, HardHat, Users, Leaf, LayoutGrid, HandCoins } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CommunityCard from "@/components/CommunityCard";
import PropertyCard from "@/components/PropertyCard";
import FloorPlanCard from "@/components/FloorPlanCard";
import FeatureCard from "@/components/FeatureCard";
import Timeline from "@/components/Timeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import { communities } from "@/data/communities";
import { homeModels } from "@/data/homes";
import { whyChooseUs } from "@/data/site";

const featureIcons = [DollarSign, HardHat, Users, Leaf, LayoutGrid, HandCoins];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="container-hh">
          <SectionHeader
            eyebrow="Featured Communities"
            title="Explore Our Florida Communities"
            description="Five thoughtfully located communities across Central and Southwest Florida, each offering quality homes at exceptional value."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((community) => (
              <CommunityCard key={community.slug} community={community} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/communities"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Communities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20">
        <div className="container-hh">
          <SectionHeader
            eyebrow="Available Homes"
            title="Move-In Ready & New Construction Homes"
            description="Browse a sample of our most popular floor plans, complete with pricing and specifications."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {homeModels.slice(0, 6).map((home) => (
              <PropertyCard key={home.slug} home={home} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/homes"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Homes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-hh">
          <SectionHeader
            eyebrow="Floor Plans"
            title="Find the Perfect Floor Plan"
            description="Eleven floor plans ranging from 1,068 to 2,011 sq. ft. — every one built with concrete block construction and granite countertops standard."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {homeModels.slice(0, 4).map((home) => (
              <FloorPlanCard key={home.slug} home={home} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/floor-plans"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Floor Plans <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="container-hh">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Heartland Homes"
            description="We build with honesty and value at the core — features other builders call upgrades, we call standard."
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <FeatureCard
                  key={feature.title}
                  icon={<Icon size={24} />}
                  title={feature.title}
                  description={feature.description}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-hh">
          <SectionHeader
            eyebrow="How It Works"
            title="Your Home Buying Process"
            description="A simple, stress-free path from browsing floor plans to holding the keys to your new home."
          />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20">
        <div className="container-hh">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Homeowners Say"
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-hh">
          <SectionHeader
            eyebrow="Gallery"
            title="Inside Our Homes"
            description="A closer look at the craftsmanship, finishes, and spaces that make a Heartland home."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
