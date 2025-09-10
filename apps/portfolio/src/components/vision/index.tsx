import { QuoteIcon } from "lucide-react";

const statement = `Sometimes the best way to solve a problem is to build something completely new.`;
const answer = `For me, building in Web3 is about creating systems that people actually own and control. I thrive in the spaces where tech moves quickly, ideas are radical, and progress isn't optional. Web3 gives me a sandbox to experiment, ship, and iterate building systems that actually accelerate the pace of change.`;

export const Vision = () => {
  return (
    <div className="my-[10dvh] flex w-full flex-col items-center justify-center gap-4 bg-[#FFCCDD] px-8 py-12 text-center md:my-[20dvh]">
      <div className="mx-auto max-w-screen-xl font-formula text-3xl text-[#5737AF] uppercase tracking-wider sm:text-4xl md:text-5xl">
        <div className="-translate-y-[100%] inline-flex h-full rotate-y-180 items-start justify-start">
          <QuoteIcon className="" />
        </div>
        {statement}
        <div className="-translate-y-[calc(100%-4px)] inline-flex h-full items-start justify-start">
          <QuoteIcon className="" />
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg font-sans text-black text-sm sm:text-base md:text-lg">
        {answer}
      </div>
    </div>
  );
};
