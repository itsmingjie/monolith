import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cx = (...classes: ClassValue[]): string => {
  return twMerge(clsx(classes));
};
