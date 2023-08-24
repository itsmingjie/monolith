import {
  Briefcase,
  CalendarDays,
  Github,
  MapPin,
  Music,
  Twitter,
} from "lucide-react";

// import { NowPlaying } from "../music/now-playing";
import { MenuDivider } from "./menu-divider";
import { MenuFooter } from "./menu-footer";
import { MenuHeader } from "./menu-header";
import { MenuItem } from "./menu-item";

export const Sidebar = (): JSX.Element => {
  return (
    <nav className="flex h-full flex-col justify-between pt-4">
      <div className="flex flex-col gap-2">
        <MenuHeader />

        <MenuDivider title="Collections" />

        <ul className="flex flex-col gap-1">
          <MenuItem href="https://www.corner.inc/itsmingjie"
            hint="corner.inc"
          external icon={<MapPin size={16} />}>
            Places
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
            href="https://twitter.com/itsmingjie"
            icon={<Twitter size={16} />}
            hint="@itsmingjie"
            external
          >
            Twitter
          </MenuItem>

          <MenuItem
            href="https://cal.com/mingjie"
            icon={<CalendarDays size={16} />}
            hint="cal.com"
            external
          >
            Meet
          </MenuItem>

          <MenuDivider title="Info" />

          <MenuItem
            href="https://cv.mingjie.dev"
            icon={<Briefcase size={16} />}
            hint="read.cv"
            external
          >
            CV
          </MenuItem>

          {/* hidden link for verification */}
          <a rel="me" href="https://tea.codes/@itsmingjie" className="hidden">
            Mastodon
          </a>
        </ul>
      </div>

      <div className="flex flex-col gap-2">x
        <MenuFooter />
      </div>
    </nav>
  );
};
