import Link from "next/link";
import StatCardShowcase from "../(components)/StatCardShowcase";

export default function StatCardPage() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-6 z-10 sm:left-10 sm:top-10">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[#d9d5f3] bg-white px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(65,64,153,0.08)] transition hover:-translate-y-0.5"
        >
          Back to components
        </Link>
      </div>
      <StatCardShowcase />
    </div>
  );
}
