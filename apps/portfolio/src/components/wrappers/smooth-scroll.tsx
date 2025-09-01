"use client";

import type { PropsWithChildren } from "react";

import { ReactLenis } from "lenis/react";

export const SmoothScroll = ({ children }: PropsWithChildren) => {
  return <ReactLenis root={true}>{children}</ReactLenis>;
};
