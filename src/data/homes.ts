export type HomeModel = {
  slug: string;
  name: string;
  price: number;
  beds: number;
  baths: number;
  garage: string;
  sqft: number;
  image: string;
  tagline: string;
  features: string[];
};

export const homeModels: HomeModel[] = [
  {
    slug: "giara",
    name: "The Giara",
    price: 233900,
    beds: 3,
    baths: 2,
    garage: "Driveway parking",
    sqft: 1068,
    image: "/images/stock/home-giara.jpg",
    tagline: "Our most affordable floor plan without compromising on standard features.",
    features: ["Concrete block construction", "Granite countertops", "Open-concept great room", "Energy-efficient windows"],
  },
  {
    slug: "welsh",
    name: "The Welsh",
    price: 243900,
    beds: 3,
    baths: 2,
    garage: "Driveway parking",
    sqft: 1143,
    image: "/images/stock/home-welsh.jpg",
    tagline: "A cozy, efficient layout perfect for first-time buyers and small families.",
    features: ["Concrete block construction", "Granite countertops", "Split-bedroom layout", "Covered entry"],
  },
  {
    slug: "shetland",
    name: "The Shetland",
    price: 264900,
    beds: 3,
    baths: 2,
    garage: "1-car garage",
    sqft: 1212,
    image: "/images/stock/home-shetland.jpg",
    tagline: "Comfortable living with the convenience of a private garage.",
    features: ["1-car garage", "Concrete block construction", "Granite countertops", "Open kitchen and dining"],
  },
  {
    slug: "paso-fino",
    name: "The Paso Fino",
    price: 279900,
    beds: 3,
    baths: 2,
    garage: "2-car garage",
    sqft: 1282,
    image: "/images/stock/home-pasofino.jpg",
    tagline: "A popular mid-size plan with room to grow and a full 2-car garage.",
    features: ["2-car garage", "Concrete block construction", "Granite countertops", "Great room floor plan"],
  },
  {
    slug: "highland",
    name: "The Highland",
    price: 295900,
    beds: 3,
    baths: 2,
    garage: "2-car garage",
    sqft: 1365,
    image: "/images/stock/home-highland.jpg",
    tagline: "Thoughtfully designed with extra living space and modern finishes.",
    features: ["2-car garage", "Concrete block construction", "Granite countertops", "Walk-in closets"],
  },
  {
    slug: "mustang",
    name: "The Mustang",
    price: 303900,
    beds: 3,
    baths: 2,
    garage: "2-car garage",
    sqft: 1370,
    image: "/images/stock/home-mustang.jpg",
    tagline: "One of our most requested plans, balancing space and value.",
    features: ["2-car garage", "Concrete block construction", "Granite countertops", "Spacious owner's suite"],
  },
  {
    slug: "andalusian",
    name: "The Andalusian",
    price: 318900,
    beds: 3,
    baths: 2,
    garage: "2-car garage",
    sqft: 1454,
    image: "/images/stock/home-andalusian.jpg",
    tagline: "A roomy plan with generous bedrooms and an open living area.",
    features: ["2-car garage", "Concrete block construction", "Granite countertops", "Covered lanai option"],
  },
  {
    slug: "palomino",
    name: "The Palomino",
    price: 327900,
    beds: 3,
    baths: 2,
    garage: "2-car garage",
    sqft: 1502,
    image: "/images/stock/home-palomino.jpg",
    tagline: "Extra square footage for families who want more room to spread out.",
    features: ["2-car garage", "Concrete block construction", "Granite countertops", "Large great room"],
  },
  {
    slug: "appaloosa",
    name: "The Appaloosa",
    price: 344900,
    beds: 3,
    baths: 2,
    garage: "2-car garage",
    sqft: 1692,
    image: "/images/stock/home-appaloosa.jpg",
    tagline: "One of our largest 3-bedroom plans, built for comfortable family living.",
    features: ["2-car garage", "Concrete block construction", "Granite countertops", "Formal dining area"],
  },
  {
    slug: "mustang-4",
    name: "The Mustang 4",
    price: 362900,
    beds: 4,
    baths: 3,
    garage: "3-car garage",
    sqft: 1631,
    image: "/images/stock/home-mustang4.jpg",
    tagline: "A 4-bedroom, 3-bath layout with a 3-car garage for growing families.",
    features: ["3-car garage", "4 bedrooms / 3 baths", "Concrete block construction", "Granite countertops"],
  },
  {
    slug: "morgan",
    name: "The Morgan",
    price: 381900,
    beds: 3,
    baths: 2,
    garage: "2-car garage",
    sqft: 2011,
    image: "/images/stock/home-morgan.jpg",
    tagline: "Our flagship floor plan — over 2,000 sq. ft. of thoughtfully designed living space.",
    features: ["2-car garage", "Concrete block construction", "Granite countertops", "Largest floor plan available"],
  },
];

export function getHomeBySlug(slug: string) {
  return homeModels.find((h) => h.slug === slug);
}
