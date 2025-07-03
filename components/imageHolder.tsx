import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function ImageHolder({ src }: { src: string }) {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-20">
        <Image
          src={src.replace("./public", "")}
          width={500}
          height={500}
          alt="image"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
    </div>
  );
}
