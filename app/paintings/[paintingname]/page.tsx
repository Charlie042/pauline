"use client";
import { P, H2 } from "@/components/ui/typography";
import { getPaintingsBySeriesName, paintingsData } from "@/lib/data";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { notFound } from "next/navigation";
import { useState, use } from "react";

const PaintingPage = ({
  params,
}: {
  params: Promise<{ paintingname: string }>;
}) => {
  const resolvedParams = use(params);
  console.log("Looking for series:", resolvedParams.paintingname);
  const paintings = getPaintingsBySeriesName(resolvedParams.paintingname);
  const seriesInfo = paintingsData[resolvedParams.paintingname];

  console.log("Found paintings:", paintings.length);
  console.log("Found series info:", seriesInfo);

  // State to track current painting index
  const [currentIndex, setCurrentIndex] = useState(0);

  const painting = paintings[currentIndex];

  // If series not found, show 404
  if (!paintings.length || !seriesInfo) {
    console.log("No paintings or series found - showing 404");
    notFound();
  }

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % paintings.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + paintings.length) % paintings.length);
  };

  return (
    <div className="flex flex-col gap-8 mx-50 mt-2 h-screen">
      {/* Series header with navigation */}
      <div className="flex justify-end gap-4 ">
        <button
          onClick={goToNext}
          disabled={paintings.length <= 1}
          className="group px-4 py-2 bg-transparent text-sm hover:text-blue-900 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next{" "}
          <span className="text-sm group-hover:ml-1 rotate-90 transition-all duration-300">
            →
          </span>
        </button>
      </div>

      {/* Current painting display */}
      <AnimatePresence>
        <motion.div
          key={painting.id}
          className="flex justify-center items-center gap-20  pb-8 last:border-b-0  rounded-lg shadow-lg"
        >
          {/* <div className="flex flex-col gap-4 w-100">
            <H2 className="text-lg font-bodoni-moda text-gray-600 font-extralight italic">
              {painting.name}
            </H2>
            <P className="text-sm font-bodoni-moda font-extralight  leading-relaxed">
              {painting.description}
            </P>
            {painting.description2 && (
              <P className="text-sm font-bodoni-moda font-extralight leading-relaxed">
                {painting.description2}
              </P>
            )}
            {painting.description3 && (
              <P className="text-sm leading-relaxed">{painting.description3}</P>
            )}
          </div> */}
          <div className="flex gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-150 h-150  rounded-lg flex flex-col items-center justify-center shadow-xl group"

            >
              <Image
                width={1000}
                height={1000}
                src={painting.image}
                alt={painting.name}
                className="w-100 h-100 object-cover rounded-lg border"
              />
              <P className="text-sm font-bodoni-moda font-extralight italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold">Medium:</span> Acrylic on canvas
                <br />
                <span className="font-bold">Size:</span> 103 x 103cm
                <br />
                <span className="font-bold">Year:</span> 2025
              </P>
            </motion.div>
            <div className="flex flex-col gap-4 w-100 items-end ">
              <H2 className="text-sm font-bodoni-moda font-extralight italic">
                {painting.name}
              </H2>
              <P className="text-sm font-bodoni-moda font-extralight italic leading-relaxed">
                {painting.description}
              </P>
              {painting.description2 && (
                <P className="text-sm font-bodoni-moda font-extralight italic leading-relaxed">
                  {painting.description2}
                </P>
              )}
              {painting.description3 && (
                <P className="text-sm font-bodoni-moda font-extralight italic leading-relaxed">
                  {painting.description3}
                </P>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-start gap-4 ">
        <button
          onClick={goToPrevious}
          disabled={paintings.length <= 1}
          className="group px-4 py-2 bg-transparent text-sm hover:text-blue-900 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-xs group-hover:mr-1 rotate-90 transition-all duration-300">
            ←{" "}
          </span>
          Previous
        </button>
      </div>
    </div>
  );
};

export default PaintingPage;
