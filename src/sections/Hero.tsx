import { profile } from "@/data/profile";
import { ArrowDown, ArrowUpRight, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-factory-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-[1500px] items-center gap-10 px-5 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-16 lg:py-24">
        <div className="max-w-4xl">
          <p className="hero-kicker reveal" style={{ animationDelay: "0.05s" }}>
            Samsung Electronics · Poznań · Poland
          </p>
          <h1 className="hero-title reveal" style={{ animationDelay: "0.15s" }}>
            {profile.firstName}
            <span>{profile.lastName}</span>
          </h1>
          <p className="hero-role reveal" style={{ animationDelay: "0.28s" }}>
            {profile.headline}
          </p>
          <p className="hero-sub reveal" style={{ animationDelay: "0.38s" }}>
            {profile.subheadline}
          </p>
          <p className="hero-copy reveal" style={{ animationDelay: "0.48s" }}>
            Transforming operations and businesses through technology, AI and measurable performance improvement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center reveal" style={{ animationDelay: "0.58s" }}>
            <a href="#impact" className="hero-button hero-button-primary">
              Explore the impact <ArrowDown className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-button hero-button-secondary">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap reveal" style={{ animationDelay: "0.34s" }}>
          <div className="portrait-frame">
            <img
              src="/images/sebastian-portrait.jpg"
              alt="Sebastian Miedziak"
              className="hero-portrait"
            />
            <div className="portrait-caption">
              <span>01 / Executive profile</span>
              <span>AI · Manufacturing · Transformation</span>
            </div>
          </div>
          <div className="portrait-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
