"use client";

import { Squircle } from "@squircle-js/react";
import { GlobeIcon } from "lucide-react";
import { motion } from "motion/react";

import { CreateSticker, VanSticker } from "../stickers";

export const AboutImage = () => {
  return (
    <div className="relative flex w-[18rem] flex-row md:w-[30rem]">
      <div className="relative">
        <div className="-translate-x-[40%] -translate-y-1/2 absolute top-0 left-0 animate-spin-slow">
          <svg
            className="w-18 transition-all duration-200 ease-in-out hover:scale-105 md:w-24 lg:w-32"
            fill="none"
            height="117"
            viewBox="-1 -1 117 117"
            width="117"
          >
            <title>Rotating Flower</title>
            <path
              d="M114.663 72.8594L87.6503 57.3567L114.426 41.8032H84.2252L99.6296 15.4858L72.7862 30.9039V0.0507823L57.4493 26.605L41.8597 0V30.9039L15.3873 15.5366L30.4879 41.8032H0L26.9447 57.3567L0.236216 72.8594H30.4879L15.033 99.1769L41.8597 83.8772V114.629L57.4493 88.3791L72.7862 114.663V83.8772L99.7476 99.7184L84.2252 72.8594H114.663Z"
              fill="#5738AF"
            ></path>
          </svg>
        </div>
        <motion.div
          className="-bottom-1/5 -rotate-12 absolute left-[10%] z-[2]"
          transition={{
            damping: 20,
            stiffness: 400,
            type: "spring",
          }}
          whileHover={{ rotate: "-4deg", scale: 1.025 }}
        >
          <div className="relative flex size-12 items-center justify-center rounded-full bg-[#007656] md:size-20">
            <GlobeIcon className="size-10 md:size-16" strokeWidth={1.5} />
            <div className="-translate-y-1/2 absolute top-1/2 right-1/2 translate-x-1/2 rounded-full bg-[#D0D4FE] px-1 py-[2px] font-bold font-sans text-[#007656] text-[10px] md:px-2 md:text-sm">
              httpz://
            </div>
          </div>
        </motion.div>
        <motion.div
          className="rotate-8"
          transition={{
            damping: 20,
            stiffness: 400,
            type: "spring",
          }}
          whileHover={{ rotate: "-6deg", scale: 1.025 }}
        >
          <Squircle
            className="h-[6rem] w-[12rem] overflow-hidden bg-red-200 md:h-[12rem] md:w-[18rem]"
            cornerRadius={32}
            cornerSmoothing={2}
          ></Squircle>
        </motion.div>
      </div>

      <div className="-rotate-8 -translate-x-1/2 translate-y-1/5">
        <div className="relative">
          <motion.div
            className="-translate-y-1/2 absolute top-0 right-0 z-[2] w-[6rem] translate-x-1/3 rotate-[32deg] md:w-[12rem] md:translate-x-1/2"
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "-6deg", scale: 1.025 }}
          >
            <CreateSticker className="" />
          </motion.div>
          <motion.div
            className="absolute right-0 bottom-0 z-[2] size-24 translate-y-1/2 rotate-12 md:size-42 md:translate-x-1/3"
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "-6deg", scale: 1.025 }}
          >
            <VanSticker />
          </motion.div>

          <motion.div
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "6deg", scale: 1.025 }}
          >
            <Squircle
              className="h-[6rem] w-[12rem] overflow-hidden bg-green-200 md:h-[12rem] md:w-[18rem]"
              cornerRadius={32}
              cornerSmoothing={2}
            ></Squircle>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
