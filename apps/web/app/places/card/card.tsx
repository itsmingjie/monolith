import type { IPlace } from "@/lib/types/places";

interface PlaceCardProps {
  place: IPlace;
}

export const PlaceCard = ({ place }: PlaceCardProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-4 p-4 transition-all border rounded bg-light/5 border-hint/50 backdrop-blur-sm">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-medium">{place.name}</h1>
          <p className="text-xs font-light tracking-wide text-light/80">
            {place.address}
          </p>
        </div>
      </div>
    </div>
  );
};
