import type { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-semi-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <h2 className="mt-10 scroll-m-20 border-b border-b-hint pb-2 text-3xl font-semibold tracking-semi-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
};

export const H3 = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-semi-tight">
      {children}
    </h3>
  );
};

export const H4 = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-semi-tight">
      {children}
    </h4>
  );
};
