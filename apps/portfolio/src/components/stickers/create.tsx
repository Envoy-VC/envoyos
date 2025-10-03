import Image, { type ImageProps } from "next/image";

import { assets } from "@/data";

type Props = Omit<ImageProps, "src" | "alt">;

export const CreateSticker = (props: Props) => {
  return (
    <Image
      alt="Create Sticker"
      height={150}
      src={assets.stickers.create}
      width={400}
      {...props}
    />
  );
};
