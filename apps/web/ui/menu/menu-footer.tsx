import { Link } from "@/ui/link";

export const MenuFooter = (): JSX.Element => {
  return (
    <footer>
      <div className="flex justify-center w-full gap-2 text-xs text-light/20">
        <div>
          <Link
            href="https://github.com/itsmingjie/mingjie.dev"
            external
            className="transition-colors hover:underline"
          >
            src/
          </Link>
        </div>
      </div>
    </footer>
  );
};
