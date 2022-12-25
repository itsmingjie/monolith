import NextLink from "next/link";

interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export const Link = ({
  href,
  children,
  external,
  ...props
}: LinkProps): JSX.Element => {
  return (
    // stylistic wrapper
    <span {...props}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <NextLink href={href}>{children}</NextLink>
      )}
    </span>
  );
};
