import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,163,242,0.25),transparent_60%)]" />
      <div className="container-hh relative text-center">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Ready to Find Your Dream Home?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-200">
          Schedule a tour of one of our model homes or request more information — our team is
          ready to help you find the right floor plan and community.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-transform hover:scale-105 hover:bg-gold-400"
          >
            Schedule a Tour
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Request Information
          </Link>
        </div>
      </div>
    </section>
  );
}
