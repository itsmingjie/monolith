import { supabase } from "@/lib/supabase/client";
import type { IThing } from "@/lib/types/things";
import { Construction } from "@/ui/construction";

import { ThingCard } from "./card/card";

const ThingsPage = async (): Promise<JSX.Element> => {
  const { data: things } = await supabase.from("things").select(`
  id,
  name,
  description,
  link,
  image
`);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium">Things</h1>
        <p className="max-w-md text-xs font-light leading-5 tracking-wide text-light/80">
          I do tons of research before buying anything, and I very rarely buy
          things that end up idling. Here are some of my favorite products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {things?.map((_thing) => {
          const thing = _thing as IThing;
          return <ThingCard thing={thing} key={thing.id} />;
        })}
      </div>

      <Construction />
    </div>
  );
};

export default ThingsPage;
