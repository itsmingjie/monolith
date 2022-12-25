import Image from "next/image";

import { BUCKET_URL } from "@/lib/constants";
import type { IThing } from "@/lib/types/things";

interface ThingCardProps {
  thing: IThing;
}

export const ThingCard = ({ thing }: ThingCardProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-1 overflow-hidden transition-all border rounded bg-light/5 border-hint/50 backdrop-blur-sm">
      <div className="relative w-full h-48">
        <Image
          src={`${BUCKET_URL}/${thing.image}`}
          fill
          alt={thing.name}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-medium">{thing.name}</h1>
          {thing.description && (
            <p className="text-xs font-light tracking-wide text-light/80">
              {thing.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
