import { useState } from "react";
import { profile } from "@/data/profile";
import { useReveal } from "@/hooks/useScroll";
import { ArrowUpRight, LinkedInIcon } from "@/components/icons";

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 sm:mb-10">
      <span className="index-label">{n}</span>
      <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-10 border-b border-hairline py-14 sm:py-20"
    >
      <SectionHeading n="01" title="About" />
      <p className="max-w-2xl text-xl font-light leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
        {profile.about}
      </p>
    </section>
  );
}

export function Experience() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-10 border-b border-hairline py-14 sm:py-20"
    >
      <SectionHeading n="02" title="Experience" />
      <ul>
        {profile.experience.map((job) => (
          <li
            key={job.role}
            className="group grid cursor-default gap-2 border-t border-hairline py-8 transition-colors duration-300 first:border-t-0 first:pt-0 hover:bg-ink/[0.025] sm:grid-cols-12 sm:gap-6"
          >
            <div className="transition-transform duration-300 group-hover:translate-x-1.5 sm:col-span-8">
              <h3 className="text-xl font-normal text-ink sm:text-2xl">
                {job.role}
              </h3>
              <p className="mt-1 text-base font-normal text-stone2">
                {job.org}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone2">
                {job.scope}
              </p>
            </div>
            <div className="sm:col-span-4 sm:text-right">
              <span className="index-label">{job.period}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Focus() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="focus"
      ref={ref}
      className="scroll-mt-10 border-b border-hairline py-14 sm:py-20"
    >
      <SectionHeading n="03" title="Focus" />
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {profile.focus.map((f, i) => (
          <li
            key={f.title}
            className="group cursor-default border-t border-hairline py-7 transition-colors duration-300 hover:border-ink/40"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="index-label">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 origin-left scale-x-0 bg-ink/40 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </div>
            <h3 className="mt-3 text-lg font-normal text-ink transition-transform duration-300 group-hover:translate-x-1.5 sm:text-xl">
              {f.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-stone2">
              {f.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="scroll-mt-10 py-16 sm:py-24">
      <SectionHeading n="04" title="Contact" />
      <p className="font-serif text-4xl font-bold leading-tight tracking-tight text-ink sm:text-6xl">
        Let&rsquo;s connect.
      </p>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone2">
        The best way to reach me is through LinkedIn — or send me an email
        directly.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex min-h-[44px] w-fit items-center gap-2.5 border border-ink px-5 py-2.5 text-sm font-normal text-ink transition-colors duration-200 hover:bg-ink hover:text-cream"
        >
          <MailIcon className="h-4 w-4 shrink-0" />
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex min-h-[44px] w-fit items-center gap-2.5 border border-ink/30 px-5 py-2.5 text-sm font-normal text-ink transition-colors duration-200 hover:border-ink"
        >
          {copied ? "Copied to clipboard" : "Copy email address"}
        </button>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[44px] w-fit items-center gap-2.5 px-1 py-2.5 text-sm font-normal text-ink"
        >
          <LinkedInIcon className="h-4 w-4 shrink-0" />
          <span className="u-link">{profile.linkedinLabel}</span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
