"use client";

import { useState } from "react";

import { ArrowUpRightIcon, CommandIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import { inRange } from "@/helpers";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    id: "about",
    link: "#about",
    name: "About",
  },
  {
    id: "interests",
    link: "#interests",
    name: "Interests",
  },
  {
    id: "projects",
    link: "#projects",
    name: "Projects",
  },
  {
    id: "contact",
    link: "#contact",
    name: "Contact",
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [resumeHovered, setResumeHovered] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    console.log("current");
    if (typeof current === "number") {
      // biome-ignore lint/style/noNonNullAssertion: should be defined.
      const direction = current! - scrollYProgress.getPrevious()!;

      if (inRange(scrollYProgress.get(), 0, 0.1)) {
        setVisible(true);
      } else if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -100,
        }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex w-[calc(100%-2rem)] flex-row items-center justify-between gap-5 rounded-2xl border border-[rgba(255,255,255,0.04)] bg-[#ffffff0a] px-3 py-2 backdrop-blur-[12px] md:w-fit md:justify-start",
          className,
        )}
        initial={{
          opacity: 1,
          y: -100,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-white text-black md:size-9">
            <CommandIcon className="size-5 md:size-6" strokeWidth={2.5} />
          </div>
          <div className="font-medium text-2xl md:text-[1.75rem]">envoyos</div>
        </div>
        <div className="hidden w-full min-w-[22rem] flex-row items-center justify-around gap-2 md:flex">
          {navLinks.map((link) => {
            return (
              <button
                className="cursor-pointer rounded-full px-4 py-2 font-medium text-base text-neutral-500 transition-all duration-[0.5s] ease-in-out hover:bg-neutral-500/30 hover:text-neutral-400"
                key={link.id}
                type="button"
              >
                {link.name}
              </button>
            );
          })}
        </div>
        <motion.a
          animate={{ width: resumeHovered ? "7.1rem" : "5.95rem" }}
          className="flex flex-row items-center justify-center gap-1 rounded-lg bg-[#232323] px-4 py-2 text-[#F15D33]"
          href="/resume.pdf"
          onHoverEnd={() => setResumeHovered(false)}
          onHoverStart={() => setResumeHovered(true)}
        >
          Resume
          <ArrowUpRightIcon />
        </motion.a>
      </motion.div>
    </AnimatePresence>
  );
};
