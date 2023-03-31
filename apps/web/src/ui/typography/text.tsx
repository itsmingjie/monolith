import type { PropsWithChildren } from "react";

export const Paragraph = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return <p className="leading-7 [&:not(:first-child)]:mt-5">{children}</p>;
};
