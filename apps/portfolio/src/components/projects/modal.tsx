"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { motion, type Variants } from "motion/react";

const scaleAnimation: Variants = {
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    x: "-50%",
    y: "-50%",
  },
  initial: { scale: 0, x: "-50%", y: "-50%" },
};

export const Modal = ({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number };
  projects: {
    id: string;
    image: string;
    name: string;
    tags: string[];
  }[];
}) => {
  const { active, index } = modal;

  const modalContainer = useRef(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power2",
    });

    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power2",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <motion.div
      animate={active ? "enter" : "closed"}
      className="pointer-events-none absolute flex aspect-video w-[16rem] items-center justify-center overflow-hidden sm:w-[20rem] lg:w-[24rem]"
      initial="initial"
      ref={modalContainer}
      variants={scaleAnimation}
    >
      <div
        className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ top: `${index * -100}%` }}
      >
        {projects.map((project, index) => {
          const { id, image } = project;
          return (
            <div
              className="flex h-full w-full items-center justify-center"
              key={`modal-${id}-${index.toString()}`}
            >
              {/** biome-ignore lint/performance/noImgElement: safe */}
              <img
                alt=""
                className="aspect-video h-auto w-[24rem] object-fill"
                height={0}
                src={image}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
