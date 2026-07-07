import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import MortgageCalculator from "@/components/MortgageCalculator";
import { financingHighlights } from "@/data/site";

export const metadata: Metadata = {
  title: "Financing | Heartland Homes of Florida",
  description: "Financing information, first-time buyer tips, and a mortgage payment estimator for Heartland Homes of Florida buyers.",
};

const buyerTips = [
  "Get pre-qualified before touring model homes so you know your budget.",
  "Ask about USDA zero-down financing if your community qualifies.",
  "Every Heartland home includes concrete block construction and granite countertops standard — factor that value into your comparison.",
  "Work with a lender familiar with new construction timelines, like our recommended mortgage partner.",
];

const faqs = [
  {
    q: "Do I need a large down payment?",
    a: "Not necessarily. Some Heartland communities qualify for USDA zero-down financing, and conventional loans may require as little as 3-5% down depending on your lender and credit profile.",
  },
  {
    q: "How long does the financing process take?",
    a: "Most buyers complete pre-qualification within a few days. Full underwriting and closing typically take 30-45 days once you're under contract.",
  },
  {
    q: "Can I use my own lender?",
    a: "Yes. While we recommend Rize Mortgage for their experience with new construction, you're welcome to use any lender you choose.",
  },
];

export default function FinancingPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-hh">
        <SectionHeader
          eyebrow="Financing"
          title="Financing Your New Heartland Home"
          description={financingHighlights.promo}
          align="left"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl bg-navy-900 p-7 text-white">
              <p className="font-display text-2xl font-semibold">{financingHighlights.paymentFrom}</p>
              <p className="mt-1 text-navy-200">{financingHighlights.rate}</p>
              <p className="mt-4 text-sm text-navy-300">{financingHighlights.usda}</p>
            </div>

            <h2 className="mt-10 font-display text-2xl font-semibold text-navy-900">First-Time Buyer Tips</h2>
            <ul className="mt-4 space-y-3">
              {buyerTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-navy-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sky-500" />
                  {tip}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100">
              <h3 className="font-display text-lg font-semibold text-navy-900">Recommended Mortgage Partner</h3>
              <p className="mt-2 text-sm font-semibold text-navy-800">
                {financingHighlights.mortgagePro.name} &middot; {financingHighlights.mortgagePro.company}
              </p>
              <p className="mt-1 text-sm text-navy-600">{financingHighlights.mortgagePro.expertise}</p>
              <p className="mt-1 text-xs text-navy-500">
                NMLS# {financingHighlights.mortgagePro.nmls} &middot; {financingHighlights.mortgagePro.languages}
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href={`tel:${financingHighlights.mortgagePro.phone}`} className="flex items-center gap-2 text-sky-600 hover:text-sky-700">
                  <Phone size={16} /> {financingHighlights.mortgagePro.phone}
                </a>
                <a href={`mailto:${financingHighlights.mortgagePro.email}`} className="flex items-center gap-2 text-sky-600 hover:text-sky-700">
                  <Mail size={16} /> {financingHighlights.mortgagePro.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <MortgageCalculator />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-navy-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100">
                <h3 className="font-semibold text-navy-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-gold-500 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-navy-900">Have Financing Questions?</h2>
          <p className="mt-2 text-navy-800">Our sales team can connect you directly with our finance partners.</p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-semibold text-white hover:bg-navy-800"
          >
            Contact Finance Team
          </Link>
        </div>
      </div>
    </div>
  );
}
