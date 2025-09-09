import Image, { type ImageProps } from "next/image";

import SuitcaseStickerImage from "public/stickers/suitcase.png";

type Props = Omit<ImageProps, "src" | "alt">;

export const SuitcaseSticker = (props: Props) => {
  return (
    <Image
      alt="Suitcase Sticker"
      height={200}
      src={SuitcaseStickerImage}
      width={200}
      {...props}
    />
  );
};
