import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CommunityCard from "@/components/CommunityCard";
import { communities } from "@/data/communities";

export const metadata: Metadata = {
  title: "Communities | Heartland Homes of Florida",
  description: "Explore Heartland Homes' five Florida communities: Port LaBelle, Banyan Village, Greenbriar, Sebring, and Lake Placid.",
};

export default function CommunitiesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-hh">
        <SectionHeader
          eyebrow="Communities"
          title="Our Florida Communities"
          description="Five communities across Hendry, Lee, and Highlands Counties, each offering affordable new construction and relaxed country living."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
}
