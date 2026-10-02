import { profile } from "@/data/profile";
import { ArrowUpRight } from "@/components/icons";

export default function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="font-sans text-sm font-medium tracking-wide text-ink"
        >
          {profile.name}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="u-link min-h-[44px] items-center text-sm"
        >
          LinkedIn
          <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
