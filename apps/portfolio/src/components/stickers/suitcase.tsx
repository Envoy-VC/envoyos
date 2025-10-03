import Image, { type ImageProps } from "next/image";

import { assets } from "@/data";

type Props = Omit<ImageProps, "src" | "alt">;

export const SuitcaseSticker = (props: Props) => {
  return (
    <Image
      alt="Suitcase Sticker"
      height={200}
      src={assets.stickers.suitcase}
      width={200}
      {...props}
    />
  );
};
