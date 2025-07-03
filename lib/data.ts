import {
  ULUKULUBUBA_1,
  ULUKULUBUBA_2,
  ULUKULUBUBA_3,
  ULUKULUBUBA_4,
  DELIMMA_1,
  DELIMMA_2,
  DELIMMA_3,
  THEPILLIAR,
  SOLITUDE,
  SEEYOUAGAIN,
  BROCODE,
  SAFEHAVEN,
  } from "@/public";
import { StaticImageData } from "next/image";

export interface Painting {
  id: string;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  image: StaticImageData;
  year?: string;
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
        name: "ULUKULUBUBA ",
        description:
          "ULUKULUBUBA is the first in a series exploring familial complexities and emotional conflicts. At the center of the composition is the bust of a black, bald-headed man with his eyes closed, immersed in deep thought. To his left stand a woman and a young girl, representing his nuclear family, while a lone figure stands with their back turned on his right, symbolizing his extended family.",
        description2:
          "The artwork delves into the internal struggle of a man caught between the responsibilities and love for his immediate family and the expectations of his extended relatives. The central figure, emphasized as the head of the family, anchors the composition and highlights his pivotal role in navigating this cultural and emotional conflict.",
        description3:
          "The maze of concentric circles in the background symbolizes inner turmoil, visually representing the tension and complexity of balancing familial obligations. This painting resonates deeply within African settings, where the extended family system holds significant cultural value, often creating a source of both connection and conflict.",
        year: "2024",
        medium: "Acrylic on canvas",
        dimensions: "103 x 103cm",
        image: ULUKULUBUBA_1,
      },
      {
        id: "ulukulububa-2",
        name: "ULUKULUBUBA ",
        description:
          "ULUKULUBUBA is the first in a series exploring familial complexities and emotional conflicts. At the center of the composition is the bust of a black, bald-headed man with his eyes closed, immersed in deep thought. To his left stand a woman and a young girl, representing his nuclear family, while a lone figure stands with their back turned on his right, symbolizing his extended family.",
        description2:
          "The artwork delves into the internal struggle of a man caught between the responsibilities and love for his immediate family and the expectations of his extended relatives. The central figure, emphasized as the head of the family, anchors the composition and highlights his pivotal role in navigating this cultural and emotional conflict.",
        description3:
          "The maze of concentric circles in the background symbolizes inner turmoil, visually representing the tension and complexity of balancing familial obligations. This painting resonates deeply within African settings, where the extended family system holds significant cultural value, often creating a source of both connection and conflict.",
        year: "2024",
        medium: "Acrylic on canvas",
        dimensions: "103 x 103cm",
        image: ULUKULUBUBA_2,
      },
      {
        id: "ulukulububa-3",
        name: "ULUKULUBUBA ",
        description:
          "ULUKULUBUBA is the first in a series exploring familial complexities and emotional conflicts. At the center of the composition is the bust of a black, bald-headed man with his eyes closed, immersed in deep thought. To his left stand a woman and a young girl, representing his nuclear family, while a lone figure stands with their back turned on his right, symbolizing his extended family.",
        description2:
          "The artwork delves into the internal struggle of a man caught between the responsibilities and love for his immediate family and the expectations of his extended relatives. The central figure, emphasized as the head of the family, anchors the composition and highlights his pivotal role in navigating this cultural and emotional conflict.",
        description3:
          "The maze of concentric circles in the background symbolizes inner turmoil, visually representing the tension and complexity of balancing familial obligations. This painting resonates deeply within African settings, where the extended family system holds significant cultural value, often creating a source of both connection and conflict.",
        image: ULUKULUBUBA_3,
        year: "2024",
        medium: "Acrylic on canvas",
        dimensions: "103 x 103cm",
      },
      {
        id: "ulukulububa-4",
        name: "ULUKULUBUBA ",
        description:
          "ULUKULUBUBA is the first in a series exploring familial complexities and emotional conflicts. At the center of the composition is the bust of a black, bald-headed man with his eyes closed, immersed in deep thought. To his left stand a woman and a young girl, representing his nuclear family, while a lone figure stands with their back turned on his right, symbolizing his extended family.",
        description2:
          "The artwork delves into the internal struggle of a man caught between the responsibilities and love for his immediate family and the expectations of his extended relatives. The central figure, emphasized as the head of the family, anchors the composition and highlights his pivotal role in navigating this cultural and emotional conflict.",
        description3:
          "The maze of concentric circles in the background symbolizes inner turmoil, visually representing the tension and complexity of balancing familial obligations. This painting resonates deeply within African settings, where the extended family system holds significant cultural value, often creating a source of both connection and conflict.",
        image: ULUKULUBUBA_4,
        year: "2024",
        medium: "Acrylic on canvas",
        dimensions: "103 x 103cm",
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
          "This is the first of the series . At the cenod the the picture plane is the bust of a black bald headed man who has his  eyes shut in deep thought.  A woman  and a little girl are on his left side while a lone figure stands backing him on the right.  In this work, the artist portays a man who who is torn  Beth's wife and daughter (nuclear family ) on one hand and, on the other hand, his relative (extended family) . The emphasis on the central figure provides conceptual identity as the head of the family. Just as the maze of concentric circles in the background  indicates turmoil.  This is a reality in many homes, especially in African settings where the extended family system is valued.",
        image: DELIMMA_1,
      },
      {
        id: "delimma-2",
        name: "DELIMMA 2",
        description:
          "This painting portrays  Who is torn between traditional practices on one hand and  Christianity, on the other hand. The red colour is the background as well as the wavy lines that run from top to bottom of the painting and across the face of the central figure, which conveys the artist thoughts  that the figure is in a delimma, as the title of the work implies.",
        image: DELIMMA_2,
      },
      {
        id: "delimma-3",
        name: "DELIMMA 3",
        description:
          "This  is a semi abstract painting, which portrays a man who is torn between pressing family issues brought upon by the needs of a large family. The cental form represents the head of the home , while the blue linear maze and brown thread across the gace and connecting to several other figures in the painting further illustrates the man's obligation to satisfy severval  people at once, hence his predicament.",
        image: DELIMMA_3,
      },
    ],
  },
  "Hug-series": {
    seriesName: "Hug-series",
    paintings: [
      {
        id: "the-pillar",
        name: "THE PILLAR",
        description:
          "The PILLAR (Hug Series) is a touching portrayal of a father's embrace, capturing the love, security, and strength that a father provides. This emotional piece highlights the special bond shared between a man and his children.",
        description2:
          "The father's arm envelops the children his young in a protective hug, symbolizing his unwavering presence and commitment to their well-being. The painting conveys a deep sense of reassurance, emphasizing the nuturing role a father plays in their lives.",
        description3:
          "Through PILLAR (Hug Series), Pauline celebrates the tender and enduring connection within families, showcasing the powerful dynamic of love and protection between a father and is children.",
        year: "2023 -24",
        medium: "Acrylic on canvas",
        dimensions: "152 x106cm",
        image: THEPILLIAR,
      },
      {
        id: "bro-code",
        name: "BRO CODE",
        description:
          "BRO CODE (Hug Series) is a poignant exploration of male vulnerability and the beauty of human connection. This painting depicts two men in a tight, heartfelt embrace, forming part of Pauline’s ongoing Hug Series.",

        description2:
          "The blurred faces of the subjects exude a sense of relaxation, comfort, and trust, highlighting themes of brotherliness, acceptance, and emotional intimacy. By challenging the traditional masculinity norms in many cultures that discourage men from showing emotions or vulnerability, this artwork redefines strength as the courage to connect on a deeply human level.",
        description3:
          "Through BRO CODE (Hug Series), Pauline invites viewers to rethink societal expectations of masculinity and to celebrate the power of trust and connection in all relationships.",
        year: "2023 -24",
        medium: "Acrylic on canvas",
        dimensions: "152 x106cm",
        image: BROCODE,
      },
      {
        id: "safe-haven",
        name: "SAFE HAVEN",
        description:
          "SAFE HAVEN (Hug Series) is a heartwarming portrayal of motherly love, capturing the essence of a mother’s unwavering devotion and fierce commitment to nurturing her children.",

        description2:
          "The painting depicts a young mother tenderly carrying her younger child on her hip while holding her older child in a warm side hug. Despite the artist’s signature blurred facial features, the mother’s protective gaze and warm smile are palpable, evoking a deep sense of affection and reassurance.",
        description3:
          "The children, lost in innocence and fully trusting in their mother, cling to her body, symbolizing their vulnerability and total dependence. The composition radiates an energy of protection, security, and unconditional love, drawing the viewer into an intimate moment of familial connection.",
        year: "2024",
        medium: "Oil on canvas",
        dimensions: "129 x 139cm",
        image: SAFEHAVEN,
      },
    ],
  },
  solitude: {
    seriesName: "SOLITUDE",
    paintings: [
      {
        id: "solitude-1",
        name: "SOLITUDE",
        description:
          "SOLITUDE captures the reflective moment of a young woman who has migrated to a foreign country. The painting depicts her in a contemplative state, reminiscing about the challenges, experiences, and growth she underwent during her journey before finally settling into her new home.",
        description2:
          "A white butterfly adorning her figure symbolizes change, renewal, and personal transformation, highlighting her resilience and the profound metamorphosis she has undergone. The piece resonates with themes of migration, adaptation, and self- discovery, inviting viewers to connect with the emotions tied to starting anew in unfamiliar surroundings.",
        description3:
          "Through SOLITUDE, Pauline delicately portrays the complexity of human experiences in the face of change and the strength found in embracing transformation.",
        year: "2023",
        medium: "Acrylic on canvas",
        dimensions: "125 x 176cm",
        image: SOLITUDE,
      },
    ],
  },
  "see-you-again": {
    seriesName: "SEE YOU AGAIN",
    paintings: [
      {
        id: "see-you-again-1",
        name: "SEE YOU AGAIN",
        description:
          "SEE YOU AGAIN is a heartwarming painting that captures the joy and anticipation of a group of young girls as they step into the next chapter of their lives. Having just graduated, the girls wave enthusiastically to their families, their faces brimming with excitement and pride.",

        description2:
          "The artwork embodies the spirit of accomplishment and the bittersweet emotions of farewell, symbolizing the transition from one phase of life to another. With its vibrant tones and celebratory atmosphere, SEE YOU AGAIN reflects the optimism and hope that accompany new beginnings, resonating with the universal experience of growth and change.",
        description3:
          "Through SEE YOU AGAIN, Pauline celebrates the resilience and determination of young women as they navigate the challenges of transition and the joy of new beginnings.",
        year: "2023",
        medium: "Acrylic on canvas",
        dimensions: "213 X 152cm",
        image: SEEYOUAGAIN,
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
