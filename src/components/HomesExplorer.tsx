"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, List, Search } from "lucide-react";
import { HomeModel } from "@/data/homes";
import { Community } from "@/data/communities";
import PropertyCard from "@/components/PropertyCard";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Car, Ruler, ArrowRight } from "lucide-react";

type SortKey = "price-asc" | "price-desc" | "sqft-asc" | "sqft-desc";

export default function HomesExplorer({
  homes,
  communities,
}: {
  homes: HomeModel[];
  communities: Community[];
}) {
  const [query, setQuery] = useState("");
  const [beds, setBeds] = useState<number | "any">("any");
  const [baths, setBaths] = useState<number | "any">("any");
  const [maxPrice, setMaxPrice] = useState<number>(400000);
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let list = homes.filter((h) => {
      if (query && !h.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (beds !== "any" && h.beds < beds) return false;
      if (baths !== "any" && h.baths < baths) return false;
      if (h.price > maxPrice) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "sqft-asc":
          return a.sqft - b.sqft;
        case "sqft-desc":
          return b.sqft - a.sqft;
      }
    });

    return list;
  }, [homes, query, beds, baths, maxPrice, sort]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 lg:sticky lg:top-24 lg:h-fit">
        <div>
          <label className="text-sm font-semibold text-navy-800">Search</label>
          <div className="relative mt-2">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by model name..."
              className="w-full rounded-lg border border-navy-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-navy-800">Bedrooms</label>
          <div className="mt-2 flex gap-2">
            {(["any", 3, 4] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBeds(b)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
                  beds === b ? "bg-navy-900 text-white ring-navy-900" : "text-navy-700 ring-navy-200"
                }`}
              >
                {b === "any" ? "Any" : `${b}+`}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-navy-800">Bathrooms</label>
          <div className="mt-2 flex gap-2">
            {(["any", 2, 3] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBaths(b)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
                  baths === b ? "bg-navy-900 text-white ring-navy-900" : "text-navy-700 ring-navy-200"
                }`}
              >
                {b === "any" ? "Any" : `${b}+`}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-navy-800">
            Max Price: {formatPrice(maxPrice)}
          </label>
          <input
            type="range"
            min={200000}
            max={400000}
            step={5000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-3 w-full accent-sky-500"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-navy-800">Community</label>
          <ul className="mt-2 space-y-1.5">
            {communities.map((c) => (
              <li key={c.slug}>
                <Link href={`/communities/${c.slug}`} className="text-sm text-navy-600 hover:text-sky-600">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-100">
          <p className="text-sm text-navy-600">
            Showing <span className="font-semibold text-navy-900">{filtered.length}</span> of {homes.length} homes
          </p>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-navy-200 px-3 py-2 text-sm outline-none focus:border-sky-500"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="sqft-asc">Sq. Ft.: Low to High</option>
              <option value="sqft-desc">Sq. Ft.: High to Low</option>
            </select>
            <div className="flex rounded-lg ring-1 ring-navy-200">
              <button
                onClick={() => setView("grid")}
                className={`p-2 ${view === "grid" ? "bg-navy-900 text-white" : "text-navy-500"}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 ${view === "list" ? "bg-navy-900 text-white" : "text-navy-500"}`}
                aria-label="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-navy-500">No homes match your filters. Try adjusting them.</p>
        ) : view === "grid" ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((home) => (
              <PropertyCard key={home.slug} home={home} />
            ))}
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {filtered.map((home) => (
              <div
                key={home.slug}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100 sm:flex-row"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-64">
                  <Image src={home.image} alt={home.name} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold text-navy-900">{home.name}</h3>
                      <span className="font-semibold text-sky-600">{formatPrice(home.price)}</span>
                    </div>
                    <p className="mt-1 text-sm text-navy-500">{home.tagline}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-navy-600">
                      <span className="flex items-center gap-1"><BedDouble size={16} /> {home.beds}</span>
                      <span className="flex items-center gap-1"><Bath size={16} /> {home.baths}</span>
                      <span className="flex items-center gap-1"><Car size={16} /> {home.garage.split(" ")[0]}</span>
                      <span className="flex items-center gap-1"><Ruler size={16} /> {home.sqft.toLocaleString()}</span>
                    </div>
                    <Link
                      href={`/homes/${home.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700"
                    >
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
