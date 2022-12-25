import { Cloud, Github, MapPin, Tag } from "lucide-react";

import { ROUTES } from "@/lib/constants";
import { Link } from "@/ui/link";
import { NowPlaying } from "@/ui/music/now-playing";

import { MenuDivider } from "./menu-divider";
import { MenuFooter } from "./menu-footer";
import { MenuHeader } from "./menu-header";
import { MenuItem } from "./menu-item";

export const Sidebar = (): JSX.Element => {
  return (
    <nav className="flex flex-col justify-between h-full pt-4">
      <div className="flex flex-col gap-2">
        <MenuHeader />

        <MenuDivider title="Collections" />

        <ul className="flex flex-col gap-1">
          <MenuItem href="/places" icon={<MapPin size={16} />}>
            Places
          </MenuItem>

          <MenuItem href="/things" icon={<Tag size={16} />}>
            Things
          </MenuItem>
        </ul>

        <MenuDivider title="Contact" />

        <ul className="flex flex-col gap-1">
          <MenuItem
            href="https://github.com/itsmingjie"
            icon={<Github size={16} />}
            hint="@itsmingjie"
            external
          >
            GitHub
          </MenuItem>

          <MenuItem
            href="https://tea.codes/@itsmingjie"
            icon={<Cloud size={16} />}
            hint="@itsmingjie"
            external
          >
            Mastodon
          </MenuItem>

          {/* hidden link for verification */}
          <a rel="me" href="https://tea.codes/@itsmingjie" className="hidden">
            Mastodon
          </a>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <NowPlaying />

        <div className="flex flex-col gap-2 px-3 py-2 text-xs border rounded-md bg-light/5 border-hint/50 backdrop-blur-sm shadow-black">
          <h1 className="font-semibold text-light">🚜 Ongoing Construction</h1>
          <p className="text-light/80">
            This website is a work in progress&ndash; I built it mostly as a
            playground for{" "}
            <Link
              href="https://nextjs.org/13"
              className="text-light hover:underline"
              external
            >
              Next.js 13
            </Link>
            .{" "}
            <Link href={ROUTES.writeup} className="text-light hover:underline">
              Read my writeup &rarr;
            </Link>
          </p>
        </div>
        <MenuFooter />
      </div>
    </nav>
  );
};
