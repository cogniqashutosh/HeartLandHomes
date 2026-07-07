import { Metadata } from "next";
import FloorPlanCard from "@/components/FloorPlanCard";
import SectionHeader from "@/components/SectionHeader";
import { homeModels } from "@/data/homes";

export const metadata: Metadata = {
  title: "Floor Plans | Heartland Homes of Florida",
  description: "Explore all 11 Heartland Homes floor plans, from 1,068 to 2,011 sq. ft.",
};

export default function FloorPlansPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-hh">
        <SectionHeader
          eyebrow="Floor Plans"
          title="Every Heartland Floor Plan"
          description="11 floor plans, each with concrete block construction and granite countertops standard. Filter by size on the Homes page, or browse the full lineup below."
          align="left"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeModels.map((home) => (
            <FloorPlanCard key={home.slug} home={home} />
          ))}
        </div>
      </div>
    </div>
  );
}
