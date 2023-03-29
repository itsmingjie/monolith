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

  if (!spotify ?? !spotify.item) {
    return <></>;
  }

  return (
    <a
      href={spotify.item.external_urls.spotify}
      target="_blank"
      rel="noreferrer"
      className="text-hint transition-colors hover:text-light"
    >
      <motion.div
        className="group/nowplaying relative flex flex-col rounded-md border border-hint/50 bg-light/5 px-3 py-2 shadow-black backdrop-blur-sm transition-colors hover:bg-light/10"
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
              <div className="flex items-center gap-1.5 text-xs font-bold text-hint transition-colors">
                <Music size={14} /> <h1>Listening to</h1>
              </div>
              <span className="text-hint transition-colors hover:text-light">
                <ExternalLink size={12} />
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex min-w-0 flex-col gap-3">
          <div className="flex items-start gap-2">
            <a
              className="group/album relative flex h-8 w-8 shrink-0 items-center overflow-hidden rounded-sm"
              href={spotify.item.album.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              {spotify.is_playing === false && (
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-dark/50 text-light transition-all group-hover/nowplaying:opacity-0">
                  <Pause size={12} />
                </div>
              )}

              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-dark/50 text-light opacity-0 backdrop-blur-none transition-all duration-200 group-hover/album:opacity-100 group-hover/album:backdrop-blur-[2px]">
                <ExternalLink size={12} />
              </div>

              <Image
                src={_.last(spotify.item.album.images as any[]).url}
                alt={spotify.item.album.name}
                width={32}
                height={32}
              />
            </a>

            <div className="flex min-w-0 flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <h1 className="text-xs font-semibold text-light">
                  {spotify.item.name}
                </h1>
              </div>
              <div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-light/80">
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
