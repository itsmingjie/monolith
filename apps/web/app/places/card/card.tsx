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
        className="flex flex-col w-96 gap-1 transition-all border rounded bg-light/5 border-hint/50 backdrop-blur-sm overflow-hidden cursor-pointer"
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <div className="w-96 h-48 overflow-hidden object-center relative">
          {/* purple gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple/50 via-hint/50 to-transparent z-10" />

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
