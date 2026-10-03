import { profile } from "@/data/profile";
import { ArrowUpRight } from "@/components/icons";

export default function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
        <a href="#top" className="brand-mark" aria-label="Sebastian Miedziak home">
          SM<span>.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <a href="#impact" className="nav-link">Impact</a>
          <a href="#transformation" className="nav-link">Transformation</a>
          <a href="#career" className="nav-link">Career</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link inline-flex items-center gap-1.5"
        >
          LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
