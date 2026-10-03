import { profile } from "@/data/profile";
import { ArrowUpRight } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex flex-wrap items-center gap-6">
          <span>{profile.location}</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
            LinkedIn <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
