import { useState } from "react";
import { profile } from "@/data/profile";
import { useReveal } from "@/hooks/useScroll";
import { ArrowUpRight, LinkedInIcon } from "@/components/icons";

function SectionHeading({ n, title, eyebrow }: { n: string; title: string; eyebrow?: string }) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-4">
        <span className="section-number">{n}</span>
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      </div>
      <h2 className="section-title mt-3">{title}</h2>
    </div>
  );
}

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="content-section reveal-on-scroll">
      <SectionHeading n="01" title="The through-line" eyebrow="ABOUT" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <p className="lead-copy">{profile.about}</p>
        <div className="about-card">
          <span className="about-card-label">Current mandate</span>
          <div className="mt-6 space-y-6">
            {profile.currentRoles.map((role) => (
              <div key={role.role} className="border-l border-white/20 pl-5">
                <h3 className="text-lg font-medium text-white">{role.role}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{role.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="impact" ref={ref} className="content-section reveal-on-scroll">
      <SectionHeading n="02" title="Selected impact" eyebrow="RESULTS" />
      <div className="impact-grid">
        {profile.impact.map((item) => (
          <article key={item.label} className="impact-card">
            <span className="impact-value">{item.value}</span>
            <h3 className="impact-label">{item.label}</h3>
            <p className="impact-detail">{item.detail}</p>
          </article>
        ))}
      </div>
      <div className="secondary-impact">
        {profile.additionalImpact.map((item) => (
          <div key={item.label} className="secondary-impact-item">
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <p className="source-note">Selected operational results from manufacturing and materials-supply transformation work.</p>
    </section>
  );
}

export function Transformation() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="transformation" ref={ref} className="content-section reveal-on-scroll">
      <SectionHeading n="03" title="Transformation agenda" eyebrow="FOCUS" />
      <div className="focus-grid">
        {profile.focus.map((f, i) => (
          <article key={f.title} className="focus-card">
            <div className="focus-index">0{i + 1}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Career() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="career" ref={ref} className="content-section reveal-on-scroll">
      <SectionHeading n="04" title="Career" eyebrow="EXPERIENCE" />
      <div className="career-layout">
        <div className="career-photo-wrap">
          <img src="/images/sebastian-natural.jpg" alt="Sebastian Miedziak" className="career-photo" />
          <span>From finance to AI transformation</span>
        </div>
        <div className="career-list">
          {profile.journey.map((job) => (
            <article key={`${job.period}-${job.role}`} className="career-item">
              <div className="career-period">{job.period}</div>
              <div>
                <h3>{job.role}</h3>
                <p className="career-org">{job.org}</p>
                <p className="career-scope">{job.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
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
    <section id="contact" ref={ref} className="content-section contact-section reveal-on-scroll">
      <SectionHeading n="05" title="Contact" eyebrow="CONNECT" />
      <div className="contact-panel">
        <div>
          <p className="contact-title">Let&rsquo;s build what comes next.</p>
          <p className="contact-copy">For professional conversations around manufacturing, AI transformation, business innovation or operational excellence.</p>
          <div className="contact-actions mt-7">
            <a href={`mailto:${profile.email}`} className="hero-button hero-button-primary"><MailIcon /> {profile.email}</a>
            <button type="button" onClick={copyEmail} className="text-sm text-white/45 transition hover:text-white">{copied ? "Copied to clipboard" : "Copy email address"}</button>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
              <LinkedInIcon className="h-4 w-4" /> {profile.linkedinLabel} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-qr-frame">
            <img src="/contact/sebastian-miedziak-contact.png" alt="QR code to save Sebastian Miedziak contact details" className="contact-qr" />
          </div>
          <div className="contact-qr-copy">
            <span className="contact-qr-label">SAVE CONTACT</span>
            <strong>Scan to save my details</strong>
            <span>vCard with website, LinkedIn and email.</span>
            <a href="/contact/sebastian-miedziak.vcf" download className="contact-vcard-link">Download vCard <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
