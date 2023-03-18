"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Repeat } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useId, useState } from "react";

export const MenuHeader = (): JSX.Element => {
  const [isEnglish, setIsEnglish] = useState(true);
  const motionPrefix = useId();

  const animateVariants = {
    initial: {
      y: 5,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 5,
      opacity: 0,
    },
  };

  return (
    <div className="flex items-center justify-between pb-2 px-4 group gap-0.5">
      <Link href="/" className="grow">
        <AnimatePresence mode="wait" initial={false}>
          {isEnglish ? (
            <motion.h1
              key={`${motionPrefix}-en`}
              className="text-lg font-medium tracking-wide"
              variants={animateVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Mingjie Jiang
            </motion.h1>
          ) : (
            <motion.h1
              key={`${motionPrefix}-zh}`}
              className="text-lg font-medium tracking-widest"
              variants={animateVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              姜明劼
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>

      <motion.button
        className="transition-opacity opacity-0 text-hint/50 group-hover:opacity-100"
        whileTap={{ scale: 0.8 }}
        onTapStart={() => setIsEnglish(!isEnglish)}
      >
        <Repeat size={16} />
      </motion.button>
    </div>
  );
};
