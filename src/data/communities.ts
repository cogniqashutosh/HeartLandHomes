export type Community = {
  slug: string;
  name: string;
  location: string;
  county: string;
  startingPrice: number;
  monthlyPaymentFrom: number;
  bedsRange: string;
  bathsRange: string;
  sqftRange: string;
  image: string;
  description: string;
  amenities: string[];
  nearbySchools: string[];
};

export const communities: Community[] = [
  {
    slug: "port-labelle",
    name: "Port LaBelle",
    location: "LaBelle, FL",
    county: "Hendry County",
    startingPrice: 290900,
    monthlyPaymentFrom: 2277,
    bedsRange: "3–4",
    bathsRange: "2–3",
    sqftRange: "1,282–2,011 sq. ft.",
    image: "/images/stock/community-port-labelle.jpg",
    description:
      "A welcoming riverside community in LaBelle offering spacious concrete block homes with easy access to the Caloosahatchee River and small-town Florida charm.",
    amenities: ["River access nearby", "Concrete block construction", "Family-friendly streets", "Close to downtown LaBelle"],
    nearbySchools: ["LaBelle Elementary School", "LaBelle Middle School", "LaBelle High School"],
  },
  {
    slug: "banyan-village",
    name: "Banyan Village",
    location: "LaBelle, FL",
    county: "Hendry County",
    startingPrice: 234900,
    monthlyPaymentFrom: 1819,
    bedsRange: "3–4",
    bathsRange: "2–3",
    sqftRange: "1,068–2,011 sq. ft.",
    image: "/images/stock/community-banyan-village.jpg",
    description:
      "Heartland's most affordable community, Banyan Village pairs entry-level pricing with the same quality construction found across every Heartland neighborhood.",
    amenities: ["Most affordable price point", "Quiet residential streets", "Concrete block construction", "Close to shopping and dining"],
    nearbySchools: ["LaBelle Elementary School", "LaBelle Middle School", "LaBelle High School"],
  },
  {
    slug: "greenbriar",
    name: "Greenbriar",
    location: "Lehigh Acres, FL",
    county: "Lee County",
    startingPrice: 252500,
    monthlyPaymentFrom: 1892,
    bedsRange: "3–4",
    bathsRange: "2–3",
    sqftRange: "1,068–2,011 sq. ft.",
    image: "/images/stock/community-greenbriar.jpg",
    description:
      "Located in Lehigh Acres, Greenbriar offers convenient access to Fort Myers while keeping the relaxed, family-friendly pace of country living.",
    amenities: ["Minutes from Fort Myers", "Family-friendly community", "Concrete block construction", "Convenient shopping access"],
    nearbySchools: ["Veterans Park Elementary", "Lehigh Acres Middle School", "East Lee County High School"],
  },
  {
    slug: "sebring",
    name: "Sebring",
    location: "Sebring, FL",
    county: "Highlands County",
    startingPrice: 258900,
    monthlyPaymentFrom: 1940,
    bedsRange: "3–4",
    bathsRange: "2–3",
    sqftRange: "1,212–2,011 sq. ft.",
    image: "/images/stock/community-sebring.jpg",
    description:
      "Known for its lakes and motorsports heritage, Sebring is home to a growing Heartland community offering affordable new construction near US Hwy 27.",
    amenities: ["Near US Hwy 27", "Lake access nearby", "Concrete block construction", "Growing local amenities"],
    nearbySchools: ["Sebring Elementary School", "Sebring Middle School", "Sebring High School"],
  },
  {
    slug: "lake-placid",
    name: "Lake Placid",
    location: "Lake Placid, FL",
    county: "Highlands County",
    startingPrice: 227900,
    monthlyPaymentFrom: 1727,
    bedsRange: "3–4",
    bathsRange: "2–3",
    sqftRange: "1,068–2,011 sq. ft.",
    image: "/images/stock/community-lake-placid.jpg",
    description:
      "Heartland's lowest starting price point, set in the mural-famous town of Lake Placid, surrounded by lakes, groves, and small-town hospitality.",
    amenities: ["Lowest starting price", "Small-town hospitality", "Concrete block construction", "Near lakes and groves"],
    nearbySchools: ["Lake Placid Elementary School", "Lake Placid Middle School", "Lake Placid High School"],
  },
];

export function getCommunityBySlug(slug: string) {
  return communities.find((c) => c.slug === slug);
}
