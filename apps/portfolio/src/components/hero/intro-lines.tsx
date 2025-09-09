"use client";

import { motion, type Variants } from "motion/react";

import { StickerText } from "./sticker-text";

const list: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, transition: { stiffness: 100, type: "spring" }, y: 0 },
};

const lines = [
  <div
    className="flex flex-row items-center justify-center gap-2"
    key="hero-line-1-inner"
  >
    Inspired by{" "}
    <StickerText
      className="-translate-y-[1rem] -translate-x-[1rem] md:max-w-[7rem] lg:max-w-[8rem]"
      color="#fabe29"
      sticker={{
        url: "/stickers/eth.png",
      }}
      text="networks"
      variants={{
        exit: {
          opacity: 0,
          rotate: 0,
          y: 100,
        },
        hover: {
          opacity: 1,
          rotate: 10,
          y: 0,
        },
        initial: {
          opacity: 0,
          rotate: 0,
          y: 100,
        },
      }}
    />
  </div>,
  <div key="hero-line-2-inner">
    engineered with{" "}
    <StickerText
      className="lg:-translate-y-[2rem] -translate-y-[1rem] -translate-x-[1rem]"
      color="#007656"
      sticker={{ url: "/stickers/dartboard.png" }}
      text="precision"
      variants={{
        exit: {
          opacity: 0,
          rotate: 0,
          y: 100,
        },
        hover: {
          opacity: 1,
          rotate: -15,
          y: 0,
        },
        initial: {
          opacity: 0,
          rotate: 0,
          y: 100,
        },
      }}
    />
  </div>,
  <div key="hero-line-3-inner">
    oriented to{" "}
    <StickerText
      className="-translate-y-[25%]"
      color="#FFCCDD"
      sticker={{ url: "/stickers/mario.png" }}
      text="progress"
      variants={{
        exit: {
          opacity: 0,
          rotate: 5,
          y: -50,
        },
        hover: {
          opacity: 1,
          rotate: 10,
          y: 0,
        },
        initial: {
          opacity: 0,
          rotate: 5,
          y: -50,
        },
      }}
    />{" "}
    and
  </div>,
  <div key="hero-line-4-inner">
    aimed at{" "}
    <StickerText
      className="max-w-[6rem] md:max-w-[11rem] lg:max-w-[14rem]"
      color="#F54E25"
      sticker={{
        url: "/stickers/buzz.png",
      }}
      text="infinity"
      variants={{
        exit: {
          opacity: 0,
          rotate: 5,
          y: 500,
        },
        hover: {
          opacity: 1,
          rotate: -10,
          y: 0,
        },
        initial: {
          opacity: 0,
          rotate: 0,
          y: -50,
        },
      }}
    />
  </div>,
];

export const IntroLines = () => {
  return (
    <motion.div
      animate="show"
      className="mx-auto flex w-full flex-col justify-center gap-3 px-2 py-24 text-center font-formula text-4xl text-[#FEF6E7] uppercase leading-[0.95] tracking-wide sm:text-5xl md:text-6xl lg:text-[5rem]"
      initial="hidden"
      variants={list}
    >
      {lines.map((line, index) => {
        return (
          <motion.div
            className="flex flex-row items-center justify-center gap-2"
            key={`hero-line-${index.toString()}`}
            variants={item}
          >
            {line}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
