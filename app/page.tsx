"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { P } from "@/components/ui/typography";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
    <div className="font-bodoni-moda max-w-screen-xl mx-auto mt-10 flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center xl:w-[80%] w-[90%] bg-neutral-100 md:h-[600px] sm:h-[500px] h-[400px]  rounded-md shadow-xl">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          speed={3000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="relative md:h-[500px] md:w-100 sm:h-[300px] sm:w-[300px] h-[200px] w-[300px] overflow-hidden rounded-lg my-5 "
        >
          <SwiperSlide className="">
            <Image
              src="/ULUKULUBUBA-1.jpeg"
              alt="Slide 1"
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="..."
              className="object-cover w-full h-full"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/ULUKULUBUBA-2.jpeg"
              alt="Slide 2"
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="..."
              className="object-cover w-full h-full"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/ULUKULUBUBA-3.jpeg"
              alt="Slide 3"
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="..."
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/DELIMMA-1.jpeg"
              alt="Slide 3"
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="..."
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/DELIMMA-2.jpeg"
              alt="Slide 3"
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="..."
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/DELIMMA-4ff.jpeg"
              alt="Slide 3"
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="..."
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex justify-end">
        <P className="md:w-100 w-[70%] mt-5 md:text-sm text-xs leading-tight font-light text-[#232f54]">
          My art is a reflection of my inner world, a journey through the depths
          of my soul. It is a visual expression of my thoughts, emotions, and
          experiences. It is a way for me to connect with others and to share my
          journey with them.
        </P>
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
  );
}
