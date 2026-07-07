import { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import { offices, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Heartland Homes of Florida",
  description: "Contact Heartland Homes of Florida to schedule a tour or request information about our homes and communities.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-hh">
        <SectionHeader
          eyebrow="Contact"
          title="Get in Touch"
          description="Schedule a tour, ask about financing, or request more information — our sales team is ready to help."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-display text-lg font-semibold text-navy-900">Contact Info</h3>
              <div className="mt-4 space-y-3.5 text-sm">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 font-medium text-slate-700"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <Phone size={15} />
                  </span>
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 font-medium text-slate-700"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <Mail size={15} />
                  </span>
                  {siteConfig.email}
                </a>
                <p className="flex items-center gap-3 text-slate-500">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    <Clock size={15} />
                  </span>
                  Mon–Sat: 9am–5pm
                </p>
              </div>
            </div>

            {offices.map((office) => (
              <div key={office.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="font-display text-base font-semibold text-navy-900">{office.name} Office</h3>
                <p className="mt-3 flex items-start gap-3 text-sm text-black">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    <MapPin size={15} />
                  </span>
                  <span className="pt-1.5">{office.address}</span>
                </p>
                <a
                  href={`tel:${office.phone}`}
                  className="mt-3 flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <Phone size={15} />
                  </span>
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-navy-900">Find Us</h2>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-slate-100">
            <iframe
              title="Heartland Homes of Florida - LaBelle Office"
              className="h-full w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=4501+N.+Birchwood+Parkway,+LaBelle,+FL+33935&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
