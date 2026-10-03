import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "@/components/icons";

const links = [
  ["Impact", "impact"],
  ["Transformation", "transformation"],
  ["Career", "career"],
  ["Contact", "contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("impact");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] });
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header className="site-header">
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-10 lg:px-16">
        <a href="#top" className="brand-mark" aria-label="Sebastian Miedziak home">SM<span>.</span></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? "nav-link-active" : ""}`}>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link hidden sm:inline-flex items-center gap-1.5">LinkedIn <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <button type="button" className="menu-button md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav md:hidden" aria-label="Mobile navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<span>0{links.findIndex(([, key]) => key === id) + 2}</span></a>)}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="h-4 w-4" /></a>
        </nav>
      )}
    </header>
  );
}
