import Image, { type ImageProps } from "next/image";

import VanStickerImage from "public/stickers/van.png";

type Props = Omit<ImageProps, "src" | "alt">;

export const VanSticker = (props: Props) => {
  return (
    <Image
      alt="Van Sticker"
      height={200}
      src={VanStickerImage}
      width={200}
      {...props}
    />
  );
};
