"use client";

import { useState } from "react";

import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

export interface StickerTextProps {
  text: string;
  color: string;
  className?: string;
  variants: Variants;
  sticker: {
    url: string;
  };
}

export const StickerText = ({
  text,
  color,
  sticker,
  className,
  variants,
}: StickerTextProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span className="relative">
      {/** biome-ignore lint/a11y/noStaticElementInteractions: safe */}
      <span
        className={cn("")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ color }}
      >
        {text}
      </span>
      {/** biome-ignore lint/performance/noImgElement: safe */}
      <motion.img
        animate={hovered ? "hover" : "initial"}
        className={cn(
          "-right-1/2 absolute top-0 z-[2] max-w-[4rem] lg:max-w-[10rem]",
          className,
        )}
        exit="exit"
        initial={{ opacity: 0 }}
        src={sticker?.url}
        transition={{ damping: 50, stiffness: 400, type: "spring" }}
        variants={variants}
      />
    </span>
  );
};
