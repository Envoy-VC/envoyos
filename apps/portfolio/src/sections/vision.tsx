import { QuoteIcon } from "lucide-react";

import { data } from "@/data";

export const Vision = () => {
  return (
    <div className="my-[10dvh] flex w-full flex-col items-center justify-center gap-4 bg-[#FFCCDD] px-8 py-12 text-center md:my-[20dvh]">
      <div className="mx-auto max-w-screen-xl font-formula text-3xl text-[#5737AF] uppercase tracking-wider sm:text-4xl md:text-5xl">
        <div className="-translate-y-[100%] inline-flex h-full rotate-y-180 items-start justify-start">
          <QuoteIcon className="" />
        </div>
        {data.vision.statement}
        <div className="-translate-y-[calc(100%-4px)] inline-flex h-full items-start justify-start">
          <QuoteIcon className="" />
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg font-sans text-black text-sm sm:text-base md:text-lg">
        {data.vision.answer}
      </div>
    </div>
  );
};
