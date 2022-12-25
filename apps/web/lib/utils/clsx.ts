export const clsx = (
  ...classes: Array<false | null | undefined | string>
): string => {
  return classes.filter(Boolean).join(" ");
};
