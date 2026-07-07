import { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Heartland Homes of Florida",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-hh max-w-3xl pt-32 pb-20">
      <h1 className="font-display text-4xl font-semibold text-navy-900">Privacy Policy</h1>
      <div className="mt-8 space-y-6 leading-7 text-navy-700">
        <p>
          Heartland Homes of Florida (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
          privacy. This policy explains what information we collect through this website and how we
          use it.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Information We Collect</h2>
        <p>
          When you submit a contact form, request information, or schedule a tour, we collect your
          name, email address, phone number, and any details you provide about your home search.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">How We Use Your Information</h2>
        <p>
          We use the information you provide to respond to your inquiries, schedule tours, and share
          relevant information about our homes, communities, and financing options.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Contact Us</h2>
        <p>
          If you have questions about this policy, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-sky-600 hover:text-sky-700">
            {siteConfig.email}
          </a>{" "}
          or {siteConfig.phone}.
        </p>
      </div>
    </div>
  );
}
