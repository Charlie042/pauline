"use client"
import { P } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import {motion} from "motion/react"
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Bio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex gap-20 justify-center items-center xl:flex-row flex-col"
    >
      <div className="flex flex-col gap-20">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          speed={3000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="relative overflow-hidden flex flex-col gap-20 md:w-100 w-70 h-70 md:h-100 max-sm:mx-7"
        >
          <SwiperSlide>
            <Image
              src="/bio-pic.jpg"
              width={500}
              height={500}
              alt="image"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/bio2.jpg" width={500} height={500} alt="image" className="object-cover w-full h-full"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/bio3.jpg" width={500} height={500} alt="image" className="object-cover w-full h-full"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/bio4.jpg" width={500} height={500} alt="image" className="object-cover w-full h-full"/>
          </SwiperSlide>
        </Swiper>
        {/* <ImageHolder src="/bio-pic.jpg" /> */}
        <div className="text-center">
          <Link
            href="/Pauline Malize Aborchi CV.pdf"
            className="text-sm font-bodoni-moda font-extralight  w-100 underline text-center"
          >
            Pauline Malize Aborchi CV
          </Link>
        </div>

        <div className="flex flex-col gap-10">
          <P className="text-sm font-bodoni-moda font-extralight  md:w-100 w-full max-sm:mx-3">
            Feel free to contact me for any inquiries about prices or
            exhibitions and collaborations.
          </P>
          <P className="flex flex-col text-sm font-bodoni-moda font-extralight text-gray-500 md:w-100 w-full text-center">
            CONTACT:{" "}
            <Link href="mailto:paulineaborchi@gmail.com" className="underline">
              paulineaborchi@gmail.com
            </Link>
          </P>
        </div>
      </div>
      <div className="flex flex-col gap-20 my-10">
        <P className="text-sm font-bodoni-moda font-light text-gray-600 md:w-150 w-full max-sm:mx-3">
        Pauline Malize Aborchi is an international, award-winning visual contemporary artist
    based in Abuja, Nigeria. Born and raised in Enugu state, Nigeria, her artistic journey is
marked by a distinctive style and a deep-seated philosophy on creativity.
Her signature technique, impasto, is characterized by highly textured layers, through
which she eloquently tells her stories. Pauline’s primary mediums include oil colors,
acrylic, and charcoal. With over 20 years of studio practice, her work is guided by the
philosophy she embraced from a young age: that creativity is limitless when inspired
by the mind’s eye.
Pauline’s creativity spans across diﬀerent genres, with her works constantly evolving
and drawing inspiration from daily experience, society, and culture.
She has exhibited extensively, both in Nigeria and internationally. Notably, she won
the award for Best Emerging Artist of 2023 at the E C H O E S art exhibition, organized
by the Society of Nigerian Artists (SNA). Her international exhibitions include shows in
the United Kingdom, the USA, and Canada (including Art Vancouver). Her artworks
are also found in many private collections in Nigeria and abroad.
        </P>
        <div className="flex flex-col text-center">
          <P className="text-sm font-bodoni-moda font-light  md:w-150 w-full">
            “ For Nigerian artist and impasto proponent, Pauline Malize Aborchi,
            culture is not just something to observe, it’s something to explore,
            challenge, and celebrate through her art.”
          </P>
          <P className="text-sm font-bodoni-moda italic font-extralight text-gray-500 md:w-150 w-full">
            - Ibandmagazine
          </P>
        </div>
        <div className="flex flex-col text-center">
          <P className="text-sm font-bodoni-moda font-light  md:w-150 w-full">
            “Her Paintings, demonstrates the power of preserving our culture and
            tradition through documentation of any form ”
          </P>
          <P className="text-sm font-bodoni-moda italic font-extralight text-gray-500 md:w-150 w-full">
            - Ireho Aito
          </P>
        </div>
      </div>
    </motion.div>
  );
};

export default Bio;