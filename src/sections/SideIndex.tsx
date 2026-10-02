import { useActiveSection } from "@/hooks/useScroll";

const items = [
  { n: "01", label: "About", href: "#about", id: "about" },
  { n: "02", label: "Experience", href: "#experience", id: "experience" },
  { n: "03", label: "Focus", href: "#focus", id: "focus" },
  { n: "04", label: "Contact", href: "#contact", id: "contact" },
];

export default function SideIndex() {
  const active = useActiveSection(items.map((i) => i.id));

  return (
    <aside className="lg:sticky lg:top-16 lg:self-start">
      <nav aria-label="Page index">
        <ul className="flex flex-row flex-wrap gap-x-8 gap-y-2 lg:flex-col lg:gap-y-5">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.n}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex min-h-[44px] items-baseline gap-3 lg:min-h-0"
                >
                  <span
                    className={`index-label transition-colors duration-300 ${
                      isActive ? "text-ink" : ""
                    }`}
                  >
                    {item.n}
                  </span>
                  <span
                    className={`u-link text-base font-normal transition-all duration-300 lg:text-lg ${
                      isActive
                        ? "border-ink border-b-2 text-ink"
                        : "border-transparent text-stone2 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
