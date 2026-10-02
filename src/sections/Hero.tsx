import { profile } from "@/data/profile";
import { LinkedInIcon, ArrowUpRight } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="border-b border-hairline">
      <div className="mx-auto max-w-[1500px] px-5 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24 lg:px-16 lg:pb-24 lg:pt-32">
        <p className="index-label reveal" style={{ animationDelay: "0.05s" }}>
          {profile.company} · {profile.location}
        </p>

        <h1
          className="reveal mt-6 font-serif font-bold uppercase leading-[0.95] tracking-[-0.02em] text-ink"
          style={{
            animationDelay: "0.15s",
            fontSize: "clamp(2.9rem, 10.5vw, 9.5rem)",
          }}
        >
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>

        <div
          className="reveal mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="max-w-md text-lg font-normal leading-relaxed text-stone2 sm:text-xl">
            {profile.headline} at {profile.company}
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[44px] w-fit items-center gap-2.5 whitespace-nowrap border border-ink px-5 py-2.5 text-sm font-normal text-ink transition-colors duration-200 hover:bg-ink hover:text-cream"
          >
            <LinkedInIcon className="h-4 w-4 shrink-0" />
            Connect on LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
