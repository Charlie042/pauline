"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { P } from "@/components/ui/typography";
import { AnimatePresence, motion } from "motion/react";

const slides = [
  {
    src: "/newone.png",
    alt: "CROSSROADS",
    title: "CROSSROADS",
    medium: "Oil on canvas",
    size: "129 X139 CM",
    year: "2024",
  },
  {
    src: "/ULUKULUBUBA-2.jpeg",
    alt: "ULUKULUBUBA",
    title: "ULUKULUBUBA",
    medium: "Acrylic on canvas",
    size: "103 x 103cm",
    year: "2024",
  },
  {
    src: "/ULUKULUBUBA-3.jpeg",
    alt: "ULUKULUBUBA",
    title: "ULUKULUBUBA",
    medium: "Acrylic on canvas",
    size: "103 x 103cm",
    year: "2024",
  },
  {
    src: "/ THEPILLAR.jpeg",
    alt: "THE PILLAR",
    title: "THE PILLAR",
    medium: "Acrylic on canvas",
    size: "152 x106cm",
    year: "2023 -24",
  },
  {
    src: "/BROCODE.jpeg",
    alt: "BRO CODE",
    title: "BRO CODE",
    medium: "Acrylic on canvas",
    size: "152 x106cm",
    year: "2023 -24",
  },
  {
    src: "/hug.jpg",
    alt: "SAFE HAVEN",
    title: "SAFE HAVEN",
    medium: "Oil on canvas",
    size: "129 x 139cm",
    year: "2024",
  },
  {
    src: "/ULUKULUBUBA-1.jpeg",
    alt: "ULUKULUBUBA",
    title: "ULUKULUBUBA",
    medium: "Acrylic on canvas",
    size: "103 x 103cm",
    year: "2024",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="font-bodoni-moda max-w-screen-xl mx-auto mt-10 flex flex-col justify-center items-center ">
          <div className="flex flex-col  xl:w-[80%] w-[90%] bg-neutral-100 md:h-[600px] sm:h-[500px] h-[400px]  rounded-md shadow-xl">
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              loop={true}
              speed={3000}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="relative md:h-[500px] md:w-150 sm:h-[300px] sm:w-[300px] h-[200px] w-[300px] overflow-hidden rounded-lg my-6 "
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.src}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1000}
                    height={1000}
                    placeholder="blur"
                    blurDataURL="..."
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mx-auto p-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <p>Title: {activeSlide.title}</p>
                  <p>Medium: {activeSlide.medium}</p>
                  <p>Size: {activeSlide.size}</p>
                  <p>Year: {activeSlide.year}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <P className="md:w-100 w-[70%] mt-5 md:text-sm text-xs leading-tight font-light text-[#232f54]">
              My art is a reflection of my inner world, a journey through the
              depths of my soul. It is a visual expression of my thoughts,
              emotions, and experiences. It is a way for me to connect with
              others and to share my journey with them.
            </P>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
