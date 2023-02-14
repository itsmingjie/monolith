"use client";

import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { ExternalLink, Music, Pause } from "lucide-react";
import Image from "next/image";
import useSWR from "swr";

import { fetcher } from "@/lib/nextjs/fetch";

import { Progress } from "./progress";

export const NowPlaying = (): JSX.Element => {
  const { data: spotify } = useSWR("/api/now-playing", fetcher, {
    revalidateOnFocus: true,
  });

  if (!spotify || !spotify.item) {
    return <></>;
  }

  return (
    <a
      href={spotify.item.external_urls.spotify}
      target="_blank"
      rel="noreferrer"
      className="transition-colors text-hint hover:text-light"
    >
      <motion.div
        className="relative flex flex-col px-3 py-2 transition-colors border rounded-md bg-light/5 border-hint/50 backdrop-blur-sm shadow-black hover:bg-light/10 group/nowplaying"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex items-center justify-between pb-2">
              <div className="flex gap-1.5 items-center text-xs font-bold transition-colors text-hint">
                <Music size={14} /> <h1>Listening to</h1>
              </div>
              <span className="transition-colors text-hint hover:text-light">
                <ExternalLink size={12} />
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col min-w-0 gap-3">
          <div className="flex items-start gap-2">
            <a
              className="relative flex items-center w-8 h-8 overflow-hidden rounded-sm shrink-0 group/album"
              href={spotify.item.album.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              {spotify.is_playing === false && (
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all text-light bg-dark/50 group-hover/nowplaying:opacity-0">
                  <Pause size={12} />
                </div>
              )}

              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-200 opacity-0 text-light bg-dark/50 backdrop-blur-none group-hover/album:backdrop-blur-[2px] group-hover/album:opacity-100">
                <ExternalLink size={12} />
              </div>

              <Image
                src={_.last(spotify.item.album.images as any[]).url}
                alt={spotify.item.album.name}
                width={32}
                height={32}
              />
            </a>

            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-xs font-semibold text-light">
                  {spotify.item.name}
                </h1>
              </div>
              <div>
                <p className="overflow-hidden text-xs text-light/80 text-ellipsis whitespace-nowrap">
                  by{" "}
                  <span
                    className="font-semibold"
                    title={spotify.item.artists
                      .map((artist: any) => artist.name)
                      .join(", ")}
                  >
                    {spotify.item.artists
                      .map((artist: any) => artist.name)
                      .join(", ")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <Progress
            max={spotify.item.duration_ms}
            current={spotify.progress_ms}
            key={spotify.item.id}
          />
        </div>
      </motion.div>
    </a>
  );
};
