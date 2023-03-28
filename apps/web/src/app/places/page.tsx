import { PlaceCard } from "./card/card";

const PlacesPage = async (): Promise<JSX.Element> => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium">Places</h1>
        <p className="max-w-lg text-sm font-light leading-6 tracking-wide text-light/80">
          I lived in a few different cities throughout phases of my life. I like
          to document my life in these cities.
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        <PlaceCard
          name="Austin, Texas"
          description="Current Residence"
          image="https://r2.mingjie.dev/austin-tx.jpg"
          link="https://mingjie.notion.site/c1126a84148145ee9efcd863761a86a3"
        />

        <PlaceCard
          name="Berkeley, California"
          description="Fall 2021"
          image="https://r2.mingjie.dev/berkeley-ca.jpg"
          link="https://mingjie.notion.site/9fbd0028e15149b3aebc5ed28da86159"
        />

        <PlaceCard
          name="Rockville, Maryland"
          description="Summer 2015 - Summer 2021"
          image="https://r2.mingjie.dev/rockville-md.jpg"
          link="https://mingjie.notion.site/74749febde4648edbb011e703298ac10"
        />

        <PlaceCard
          name="Shanghai, China"
          description="Hometown"
          image="https://r2.mingjie.dev/shanghai-china.jpg"
          link="https://mingjie.notion.site/4fc30a3bd4d7438ea52bc0cd71c54cbe"
        />
      </div>
    </div>
  );
};

export default PlacesPage;
