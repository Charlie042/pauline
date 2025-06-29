import {
  ULUKULUBUBA_1,
  ULUKULUBUBA_2,
  ULUKULUBUBA_3,
  ULUKULUBUBA_4,
  DELIMMA_1,
  DELIMMA_2,
  DELIMMA_3,
  THEPILLIAR,
} from "@/public";
import { StaticImageData } from "next/image";

export interface Painting {
  id: string;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  image: StaticImageData;
  year?: number;
  medium?: string;
  dimensions?: string;
}

export interface PaintingSeries {
  seriesName: string;
  paintings: Painting[];
}

export const paintingsData: Record<string, PaintingSeries> = {
  ulukulububa: {
    seriesName: "ULUKULUBUBA",
    paintings: [
      {
        id: "ulukulububa-1",
        name: "ULUKULUBUBA 1",
        description:
          "ULUKULUBUBA is the first in a series exploring familial complexities and emotional conflicts. At the center of the composition is the bust of a black, bald-headed man with his eyes closed, immersed in deep thought. To his left stand a woman and a young girl, representing his nuclear family, while a lone figure stands with their back turned on his right, symbolizing his extended family.",
        description2:
          "The artwork delves into the internal struggle of a man caught between the responsibilities and love for his immediate family and the expectations of his extended relatives. The central figure, emphasized as the head of the family, anchors the composition and highlights his pivotal role in navigating this cultural and emotional conflict.",
        description3:
          "The maze of concentric circles in the background symbolizes inner turmoil, visually representing the tension and complexity of balancing familial obligations. This painting resonates deeply within African settings, where the extended family system holds significant cultural value, often creating a source of both connection and conflict.",
        image: ULUKULUBUBA_1,
      },
      {
        id: "ulukulububa-2",
        name: "ULUKULUBUBA 2",
        description:
          "The second piece in the ULUKULUBUBA series continues the exploration of familial relationships.",
        image: ULUKULUBUBA_2,
      },
      {
        id: "ulukulububa-3",
        name: "ULUKULUBUBA 3",
        description:
          "The third piece in the ULUKULUBUBA series further develops the theme of family dynamics.",
        image: ULUKULUBUBA_3,
      },
      {
        id: "ulukulububa-4",
        name: "ULUKULUBUBA 4",
        description:
          "The final piece in the ULUKULUBUBA series concludes the narrative of familial complexity.",
        image: ULUKULUBUBA_4,
      },
    ],
  },
  delimma: {
    seriesName: "DELIMMA",
    paintings: [
      {
        id: "delimma-1",
        name: "DELIMMA 1",
        description:
          "The first piece in the DELIMMA series exploring moral and ethical dilemmas.",
        image: DELIMMA_1,
      },
      {
        id: "delimma-2",
        name: "DELIMMA 2",
        description:
          "The second piece in the DELIMMA series continuing the exploration of difficult choices.",
        image: DELIMMA_2,
      },
      {
        id: "delimma-3",
        name: "DELIMMA 3",
        description:
          "The final piece in the DELIMMA series resolving the thematic exploration.",
        image: DELIMMA_3,
      },
    ],
  },
  individual: {
    seriesName: "Individual Works",
    paintings: [
      {
        id: "the-pillar",
        name: "THE PILLAR",
        description:
          "A standalone work exploring themes of strength and foundation.",
        image: THEPILLIAR,
      },
    ],
  },
};

// Helper functions
export const getAllPaintings = (): Painting[] => {
  return Object.values(paintingsData).flatMap((series) => series.paintings);
};

export const getPaintingById = (id: string): Painting | undefined => {
  return getAllPaintings().find((painting) => painting.id === id);
};

export const getPaintingsBySeriesName = (seriesName: string): Painting[] => {
  const series = paintingsData[seriesName];
  return series ? series.paintings : [];
};

export const getAllSeriesNames = (): string[] => {
  return Object.keys(paintingsData);
};
