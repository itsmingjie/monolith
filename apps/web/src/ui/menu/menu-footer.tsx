import { Link } from "@/src/ui/link";

export const MenuFooter = (): JSX.Element => {
  return (
    <footer>
      <div className="flex w-full justify-center gap-2 text-xs tracking-wide">
        <div>
          <Link
            href="https://github.com/itsmingjie/monolith"
            external
            className="text-light/20 transition-colors hover:text-light/40"
          >
            @itsmingjie/monolith
          </Link>
        </div>
      </div>
    </footer>
  );
};
