import Image, { type ImageProps } from "next/image";

import BlueFlowerStickerImage from "public/stickers/blue-flower.png";

type Props = Omit<ImageProps, "src" | "alt">;

export const BlueFlowerSticker = (props: Props) => {
  return (
    <Image
      alt="BlueFlower Sticker"
      height={200}
      src={BlueFlowerStickerImage}
      width={200}
      {...props}
    />
  );
};
