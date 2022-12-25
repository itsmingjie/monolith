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
        className="flex items-center h-10 gap-2 px-4 py-2 text-xs tracking-wide transition-colors rounded-lg group hover:bg-light/10 text-light/60 hover:text-light"
        whileTap={{ scale: 0.97 }}
      >
        {icon}
        {children}

        {hint && (
          <span className="text-xs transition-all -translate-x-1 opacity-0 text-light/30 group-hover:opacity-100 group-hover:translate-x-0">
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
