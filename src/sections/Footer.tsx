import { profile } from "@/data/profile";
import { ArrowUpRight } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p className="text-sm text-stone2">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-1">
          <a
            href={`mailto:${profile.email}`}
            className="u-link min-h-[44px] w-fit items-center text-sm sm:min-h-0"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link min-h-[44px] w-fit items-center text-sm sm:min-h-0"
          >
            LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
