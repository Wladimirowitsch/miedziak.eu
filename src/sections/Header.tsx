import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "@/components/icons";
import { useActiveSection } from "@/hooks/useScroll";

const links = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "transformation", label: "Transformation" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const active = useActiveSection(links.map((link) => link.id));
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-10 lg:px-16">
        <button type="button" onClick={() => navigate("top")} className="brand-mark" aria-label="Sebastian Miedziak home">
          SM<span>.</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigate(link.id)}
              className={`nav-link ${active === link.id ? "nav-link-active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link hidden items-center gap-1.5 sm:inline-flex">
            LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            className="mobile-menu-button md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="mobile-nav md:hidden">
          {links.map((link) => (
            <button key={link.id} type="button" onClick={() => navigate(link.id)} className={active === link.id ? "mobile-nav-active" : ""}>
              <span>{link.label}</span>
              <span>0{links.findIndex((item) => item.id === link.id) + 1}</span>
            </button>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span><ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
