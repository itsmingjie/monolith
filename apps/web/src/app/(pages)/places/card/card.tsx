"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PlaceCardProps {
  name: string;
  description?: string;
  image: string;
  link: string;
}

export const PlaceCard = ({
  name,
  description,
  image,
  link,
}: PlaceCardProps): JSX.Element => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <motion.div
        className="flex w-96 cursor-pointer flex-col gap-1 overflow-hidden rounded border border-hint/50 bg-light/5 backdrop-blur-sm transition-all"
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <div className="relative h-48 w-96 overflow-hidden object-center">
          {/* purple gradient overlay */}
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-tr from-purple/50 via-hint/50 to-transparent" />

          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale"
            quality={70}
          />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium">{name}</h1>
            <p className="text-xs font-light tracking-wide text-light/80">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};
