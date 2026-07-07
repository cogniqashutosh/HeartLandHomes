import { Metadata } from "next";
import HomesExplorer from "@/components/HomesExplorer";
import { homeModels } from "@/data/homes";
import { communities } from "@/data/communities";

export const metadata: Metadata = {
  title: "Available Homes | Heartland Homes of Florida",
  description: "Browse move-in ready and new construction homes across Heartland's five Florida communities.",
};

export default function HomesPage() {
  return (
    <div className="bg-navy-50/40 pt-32 pb-20">
      <div className="container-hh">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-sky-500">Available Homes</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy-900">Find Your New Home</h1>
          <p className="mt-4 text-navy-600">
            Filter by bedrooms, bathrooms, and budget to find the Heartland home that fits your family.
          </p>
        </div>
        <HomesExplorer homes={homeModels} communities={communities} />
      </div>
    </div>
  );
}
