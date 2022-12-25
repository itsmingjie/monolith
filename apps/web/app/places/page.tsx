import { supabase } from "@/lib/supabase/client";
import type { IPlace } from "@/lib/types/places";
import { Construction } from "@/ui/construction";

import { PlaceCard } from "./card/card";

const PlacesPage = async (): Promise<JSX.Element> => {
  const { data: places } = await supabase.from("places").select(`
    id,
    name,
    address
  `);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium">Places</h1>
        <p className="max-w-md text-xs font-light leading-5 tracking-wide text-light/80">
          I enjoy working from a variety of places. Whenever I visit a new city,
          I try to find as many unique, local places to work from as possible.
          Here are some of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {places?.map((_place) => {
          const place = _place as IPlace;

          return <PlaceCard place={place} key={place.id} />;
        })}
      </div>

      <Construction />
    </div>
  );
};

export default PlacesPage;
