"use client";
import { PaintingCard } from "@/components/painting-card";
import { ULUKULUBUBA_1, DELIMMA_1, THEPILLIAR } from "@/public";
import { AnimatePresence, motion } from "motion/react";

const Paintings = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center justify-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div className="flex flex-col items-center justify-center h-screen">
          <PaintingCard
            image={ULUKULUBUBA_1}
            title="ULUKULUBUBA"
            seriesKey="ulukulububa"
          />
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center h-screen">
          <PaintingCard image={DELIMMA_1} title="DELIMMA" seriesKey="delimma" />
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center h-screen">
          <PaintingCard
            image={THEPILLIAR}
            title="THE PILLAR"
            seriesKey="individual"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Paintings;
