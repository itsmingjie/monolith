import { Link } from "@/ui/link";

const Page = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium">Heyo!</h1>

        <div className="flex flex-col gap-2">
          <p className="max-w-lg text-sm font-light leading-6 tracking-wide text-light/80">
            I&lsquo;m Mingjie, a web & product engineer at{" "}
            <Link
              href="https://www.crunchbase.com/organization/ender-3c26"
              external
              className="hover:underline text-light"
            >
              Ender
            </Link>{" "}
            <span className="text-hint">(we might be hiring!)</span>. I love
            spending most of my day fiddling with UI in Figma and building ✨
            shiny ✨ animations.
          </p>
          <p className="max-w-lg text-sm font-light leading-6 tracking-wide text-light/80">
            I do charity work through{" "}
            <Link
              href="https://executebig.org"
              external
              className="hover:underline text-light"
            >
              Execute Big
            </Link>
            .
          </p>
          <p className="max-w-lg text-sm font-light leading-6 tracking-wide text-light/80">
            I&lsquo;m currently rebuilding my website, so things might look
            empty or broken around here. If you&lsquo;re interested in the
            progress, you can find the source code on{" "}
            <Link
              href="https://github.com/itsmingjie/mingjie.dev"
              external
              className="hover:underline text-light"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
