"use client";
import { PaintingCard } from "@/components/painting-card";
import { ULUKULUBUBA_1, DELIMMA_1, THEPILLIAR, SOLITUDE, SEEYOUAGAIN } from "@/public";
import { AnimatePresence, motion } from "motion/react";

const Paintings = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-wrap flex-col gap-10 items-center justify-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div className="flex flex-col items-center justify-center">
          <PaintingCard
            image={ULUKULUBUBA_1}
            title="ULUKULUBUBA"
            seriesKey="ulukulububa"
          />
        </motion.div>
        <motion.div className="flex flex-col gap-10 items-center justify-center ">
          <PaintingCard image={DELIMMA_1} title="DELIMMA" seriesKey="delimma" />
          <motion.div className="">
            <PaintingCard
              image={SEEYOUAGAIN}
              title="SEE YOU "
              seriesKey="see-you-again"
            />
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col gap-10 items-center justify-center">
          <PaintingCard
            image={THEPILLIAR}
            title="Hug Series"
            seriesKey="Hug-series"
          />
          <motion.div className="">
            <PaintingCard
              image={SOLITUDE}
              title="SOLITUDE"
              seriesKey="solitude"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Paintings;
