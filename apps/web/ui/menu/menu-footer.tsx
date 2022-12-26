import { Link } from "@/ui/link";

export const MenuFooter = (): JSX.Element => {
  return (
    <footer>
      <div className="flex justify-center w-full gap-2 text-xs tracking-wide">
        <div>
          <Link
            href="https://github.com/itsmingjie/monolith"
            external
            className="transition-colors hover:text-light/40 text-light/20"
          >
            @itsmingjie/monolith
          </Link>
        </div>
      </div>
    </footer>
  );
};
