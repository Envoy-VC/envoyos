import Image, { type ImageProps } from "next/image";

import { assets } from "@/data";

type Props = Omit<ImageProps, "src" | "alt">;

export const VanSticker = (props: Props) => {
  return (
    <Image
      alt="Van Sticker"
      height={200}
      src={assets.stickers.van}
      width={200}
      {...props}
    />
  );
};
