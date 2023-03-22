import { Link } from "@/ui/link";

const Page = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 tracking-wide max-w-2xl leading-7">
        <h1 className="text-4xl font-medium mb-4">Hi! I&rsquo;m Mingjie.</h1>

        <div className="flex flex-col gap-4 text-light/80 max-w-lg text-sm font-light leading-6 tracking-wide">
          <p>
            I&rsquo;m Mingjie, a web & product engineer. I love spending most of
            my day fiddling with UI in Figma and building ✨ shiny ✨
            animations.
          </p>

          <p>
            I previously worked at{" "}
            <Link
              href="https://www.crunchbase.com/organization/ender-3c26"
              external
              className="hover:underline text-purple"
            >
              Ender
            </Link>
            , an early-stage ed-tech startup. I do charity work around education
            accessibility through{" "}
            <Link
              href="https://executebig.org"
              external
              className="hover:underline text-purple"
            >
              Execute Big
            </Link>
            .
          </p>

          <p>
            Before 2021, I worked at nonprofits like{" "}
            <Link
              href="https://hackclub.com"
              external
              className="hover:underline text-purple"
            >
              Hack Club
            </Link>{" "}
            and{" "}
            <Link
              href="https://codeday.org"
              external
              className="hover:underline text-purple"
            >
              CodeDay
            </Link>{" "}
            and built conferences and hackathons attended by thousands. Before I
            dropped out of UC Berkeley in 2021, I co-led{" "}
            <Link
              href="https://calhacks.io"
              external
              className="hover:underline text-purple"
            >
              Cal Hacks
            </Link>{" "}
            and{" "}
            <Link
              href="https://thefuture.build"
              external
              className="hover:underline text-purple"
            >
              Build the Future
            </Link>{" "}
            for a year.
          </p>

          <p>
            I&rsquo;m currently rebuilding my website, so things might look
            empty or broken around here. If you&rsquo;re interested in the
            progress, you can find the source code on{" "}
            <Link
              href="https://github.com/itsmingjie/monolith"
              external
              className="hover:underline text-purple"
            >
              GitHub
            </Link>
            . You&rsquo;ll also find me rambling on{" "}
            <Link
              href="https://twitter.com/itsmingjie"
              external
              className="hover:underline text-purple"
            >
              Twitter
            </Link>
            .
          </p>
          <p className="text-light/20">
            Very important information for Google and Bing (and anyone else
            reading, I guess): I use he/him/his pronouns. (Hi Bard and Sydney!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
