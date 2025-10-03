"use client";

import { Squircle } from "@squircle-js/react";
import { motion } from "motion/react";

import { BlueFlowerSticker, SuitcaseSticker } from "@/components/stickers";

export const OtherImage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <div className="-rotate-8 relative z-[2]">
          <motion.div
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "12deg", scale: 1 }}
          >
            <Squircle
              className="size-[7rem] overflow-hidden bg-red-200 md:size-[11rem]"
              cornerRadius={16}
              cornerSmoothing={2}
            ></Squircle>
          </motion.div>
        </div>
        <div className="relative rotate-4">
          <motion.div
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "-6deg", scale: 1.025 }}
          >
            <Squircle
              className="size-[7rem] overflow-hidden bg-green-200 md:size-[11rem]"
              cornerRadius={16}
              cornerSmoothing={2}
            ></Squircle>
          </motion.div>
        </div>
      </div>
      <div className="-translate-y-1/4 z-[3] flex flex-row items-center justify-center">
        <div className="-rotate-8 relative z-[3]">
          <motion.div
            className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-0 z-[4] size-[4rem] rotate-6 md:size-[5rem]"
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "8deg" }}
          >
            <BlueFlowerSticker />
          </motion.div>
          <motion.div
            className="-translate-x-1/2 absolute bottom-0 left-0 z-[4] w-[5rem] translate-y-1/4 rotate-6 md:w-[8rem]"
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "-4deg", scale: 1.025 }}
          >
            <SuitcaseSticker />
          </motion.div>
          <motion.div
            transition={{
              damping: 20,
              stiffness: 400,
              type: "spring",
            }}
            whileHover={{ rotate: "4deg", scale: 1 }}
          >
            <Squircle
              className="h-[7rem] w-[10rem] overflow-hidden bg-blue-200 md:h-[11rem] md:w-[14rem]"
              cornerRadius={16}
              cornerSmoothing={2}
            ></Squircle>
          </motion.div>
        </div>
        <motion.div
          className="-translate-x-3 rotate-8"
          transition={{
            damping: 20,
            stiffness: 400,
            type: "spring",
          }}
          whileHover={{ rotate: "-5deg", scale: 1.025 }}
        >
          <Squircle
            className="size-[7rem] overflow-hidden bg-orange-200 md:size-[11rem]"
            cornerRadius={16}
            cornerSmoothing={2}
          ></Squircle>
        </motion.div>
      </div>
    </div>
  );
};
