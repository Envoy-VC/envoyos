"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";

import { InfiniteSlider } from "../infinite-slider";

const lines = [
  "web3 developer",
  "coffee powered",
  "eternal learner",
  "perfectionist",
  "always in beta",
  "always shipping",
];

export const Marquee = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      transition: { delay: 0.8, stiffness: 100, type: "spring" },
      y: 0,
    },
  };

  return (
    <motion.div
      animate="show"
      className="relative flex h-32 w-full"
      initial="hidden"
      style={{ y }}
      variants={variants}
    >
      <div className="absolute top-1/2 right-1/2 h-16 w-[200dvw] translate-x-1/2 rotate-[5deg] bg-[#2E2E2E] md:h-28" />
      <div className="-translate-x-8 flex h-16 w-[200dvw] rotate-[-5deg] items-center justify-center bg-[#F54E25] md:h-28">
        <InfiniteSlider
          className="flex w-full flex-row items-center justify-center font-formula text-3xl text-[#FFCCDD] uppercase tracking-wider lg:text-6xl"
          gap={16}
          speed={100}
          speedOnHover={60}
        >
          <div className="flex flex-row space-x-4">
            {lines.map((line) => {
              return (
                <div
                  className="flex cursor-pointer flex-row items-center gap-2"
                  key={`line-${line}`}
                >
                  <div className="text-nowrap hover:text-[#fabe29]">{line}</div>
                  <div className="-translate-y-2 my-auto aspect-square h-2 rotate-45 bg-[#FFCCDD] md:h-4" />
                </div>
              );
            })}
          </div>
        </InfiniteSlider>
      </div>
    </motion.div>
  );
};
