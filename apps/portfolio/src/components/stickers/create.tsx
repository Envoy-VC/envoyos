import Image, { type ImageProps } from "next/image";

import CreateStickerImage from "public/stickers/create.png";

type Props = Omit<ImageProps, "src" | "alt">;

export const CreateSticker = (props: Props) => {
  return (
    <Image
      alt="Create Sticker"
      height={150}
      src={CreateStickerImage}
      width={400}
      {...props}
    />
  );
};
