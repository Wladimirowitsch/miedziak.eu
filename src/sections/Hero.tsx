import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowDown, ArrowUpRight, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onMove = (event: MouseEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 10,
        y: (event.clientY / window.innerHeight - 0.5) * 7,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-69px)] max-w-[1500px] items-center gap-12 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.04fr_.96fr] lg:px-16 lg:py-20">
        <div className="max-w-4xl">
          <div className="hero-kicker-row reveal" style={{ animationDelay: "0.05s" }}>
            <span className="hero-kicker">Samsung Electronics · Poznań · Poland</span>
            <span className="hero-kicker-rule" aria-hidden="true" />
          </div>
          <h1 className="hero-title reveal" style={{ animationDelay: "0.15s" }}>
            {profile.firstName}
            <span>{profile.lastName}</span>
          </h1>
          <p className="hero-role reveal" style={{ animationDelay: "0.28s" }}>{profile.headline}</p>
          <p className="hero-sub reveal" style={{ animationDelay: "0.38s" }}>{profile.subheadline}</p>
          <p className="hero-copy reveal" style={{ animationDelay: "0.48s" }}>
            Transforming operations and businesses through technology, AI and measurable performance improvement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center reveal" style={{ animationDelay: "0.58s" }}>
            <a href="#impact" className="hero-button hero-button-primary">Explore the impact <ArrowDown className="h-4 w-4" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-button hero-button-secondary">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div
          className="hero-portrait-wrap reveal"
          style={{ animationDelay: "0.34s", transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)` }}
        >
          <div className="hero-role-card" aria-label="Current strategic focus">
            <span>Current focus</span>
            <strong>AI Transformation</strong>
            <small>Strategy · Innovation · Execution</small>
          </div>
          <div className="portrait-frame">
            <img src="/images/sebastian-portrait.jpg" alt="Sebastian Miedziak" className="hero-portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}
