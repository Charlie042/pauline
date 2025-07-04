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
          Pauline Malize Aborchi is an award-winning visual contemporary artist
          who lives and works in Abuja, Nigeria. Hailing from Ukpor in Nnewi
          LGA, Anambra State, she was born and raised in Enugu State. Her
          distinctive personal style, impasto, is characterized by highly
          textured layers, through which she captures the vibrant spirit and
          atmosphere of African culture. Pauline works primarily with oil on
          canvas, acrylic, and charcoal. From a young age, she believed that
          creativity is limitless when inspired by the mind’s eye. This
          philosophy guided her artistic journey and led her to pursue formal
          training. She earned a Higher National Diploma (HND) from the
          Institute of Management and Technology (IMT), Enugu State. With over
          20 years of studio practice, Pauline’s artworks have been exhibited in
          Nigeria, the United Kingdom, and the United States. Her art pieces are
          featured in numerous private collections across these regions. Driven
          by a passion for continual professional growth, she is currently
          enrolled in an online course at the New York Institute of Arts and
          Design (USA) and is working towards certification in interior design.
          Pauline is a proud member of the Female Association of Artists Nigeria
          (FEAAN) and the Society of Nigerian Artists (SNA).
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