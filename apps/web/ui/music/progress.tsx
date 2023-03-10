"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { fetcher } from "@/lib/nextjs/fetch";
import { clsx } from "@/lib/utils/clsx";

interface ProgressProps {
  current: number;
  max: number;
}

export const Progress = ({
  current: _current,
  max,
}: ProgressProps): JSX.Element => {
  const { data: spotify, mutate } = useSWR("/api/now-playing", fetcher, {
    revalidateOnFocus: true,
  });

  const [current, setCurrent] = useState(_current);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrent((current) => current + 50);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (current >= max) {
      void mutate("/api/now-playing");
      setCurrent(0);
    }
  }, [current, max, mutate]);

  useEffect(() => {
    if (spotify && !spotify.is_playing !== isPaused) {
      setIsPaused(!spotify.is_playing);
    }
  }, [isPaused, mutate, spotify]);

  return (
    <div className="flex items-center gap-1.5 h-1">
      <AnimatePresence mode="wait">
        <motion.div
          className={clsx(
            "w-full h-1 rounded-full transition-colors",
            isPaused ? "bg-hint/20" : "bg-hint/50"
          )}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.5,
          }}
          layoutId="progressBar"
        >
          <div
            className={clsx(
              "h-1 transition-all rounded-full",
              isPaused ? "bg-hint/50" : "bg-hint"
            )}
            style={{
              width: `${(current / max) * 100}%`,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
