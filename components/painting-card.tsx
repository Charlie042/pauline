import Image from "next/image";
import { P } from "./ui/typography";
import { StaticImageData } from "next/image";
import Link from "next/link";

export const PaintingCard = ({
  image,
  title,
  seriesKey,
}: {
  image: StaticImageData | null;
  title: string;
  seriesKey: string;
}) => {
  return (
    <div className="flex gap-5 item-center justify-center">
      <div className="w-full h-full ">
        <Link href={`/paintings/${seriesKey}`}>
          <div className="w-150 h-50 bg-neutral-100 rounded-md relative">
            <div className="inset-0 absolute bg-blue-100 opacity-30 hover:opacity-0 transition-all duration-300"></div>
            <Image
              src={image || ""}
              alt="Painting"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </Link>
      </div>
      <div className=" bg-neutral-100 flex flex-col items-center justify-center w-50 h-50 border rounded-md px-10">
        <P className="text-neutral-500 text-sm">{title}</P>
        <Link href={`/paintings/${seriesKey}`}>
          <P className="text-neutral-400 text-sm hover:text-neutral-900 transition-all duration-300 cursor-pointer">
            ENTER
          </P>
        </Link>
      </div>
    </div>
  );
};
