import Image, { type ImageProps } from "next/image";

import { assets } from "@/data";

type Props = Omit<ImageProps, "src" | "alt">;

export const BlueFlowerSticker = (props: Props) => {
  return (
    <Image
      alt="BlueFlower Sticker"
      height={200}
      src={assets.stickers.blueFlower}
      width={200}
      {...props}
    />
  );
};
