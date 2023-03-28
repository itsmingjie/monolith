"use client";

import { motion } from "framer-motion";

import { Link } from "@/ui/link";

interface MenuItemProps {
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
  hint?: string;
  children: React.ReactNode;
}

export const MenuItem = ({
  href,
  icon,
  external = false,
  hint,
  children,
}: MenuItemProps): JSX.Element => {
  const StyledMenuItem = (): JSX.Element => {
    return (
      <motion.li
        className="group flex h-10 items-center gap-2 rounded-lg px-4 py-2 text-xs tracking-wide text-light/60 transition-colors hover:bg-light/10 hover:text-light"
        whileTap={{ scale: 0.97 }}
      >
        {icon}
        {children}

        {hint && (
          <span className="-translate-x-1 text-xs text-light/30 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
            {hint}
          </span>
        )}
      </motion.li>
    );
  };

  return (
    <Link href={href} external={external}>
      <StyledMenuItem />
    </Link>
  );
};
