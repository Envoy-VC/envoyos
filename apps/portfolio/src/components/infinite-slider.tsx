"use client";

import { useEffect, useState } from "react";

import {
  type AnimationPlaybackControlsWithThen,
  animate,
  motion,
  useMotionValue,
} from "motion/react";
import useMeasure from "react-use-measure";

import { cn } from "@/lib/utils";

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: safe
  useEffect(() => {
    let controls: AnimationPlaybackControlsWithThen;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        duration: transitionDuration,
        ease: "linear",
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        duration: duration,
        ease: "linear",
        onRepeat: () => {
          translation.set(from);
        },
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
      });
    }

    return controls?.stop;
  }, [
    translation,
    currentSpeed,
    width,
    height,
    key,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-full"
        ref={ref}
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          flexDirection: direction === "horizontal" ? "row" : "column",
          gap: `${gap}px`,
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
