import { ArrowUpRight, QuoteIcon } from "lucide-react";

import { ArticleList } from "./list";

export const Articles = () => {
  return (
    <div className="flex flex-col justify-center gap-12 py-[20dvh]">
      <div className="flex flex-col gap-4">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center font-formula uppercase tracking-wider">
          <div className="relative">
            <div className="-translate-y-[75%] -translate-x-1/2 -rotate-12 absolute top-0 left-0 z-[2] rounded-r-2xl bg-[#007656] p-2 sm:p-3">
              <QuoteIcon className="text-[#FFCCDD]" size={32} />
            </div>
            <div className="text-5xl lg:text-7xl">
              Write Ups & <div className="sm:inline-flex">Brainwaves</div>
            </div>
          </div>
          <div className="group flex cursor-pointer flex-row items-start text-[#FFCCDD] tracking-wide">
            <div className="font-formula text-3xl uppercase transition-all duration-200 ease-in-out group-hover:text-primary">
              view all
            </div>
            <ArrowUpRight
              className="group-hover:-translate-y-[2px] text-current transition-all duration-200 ease-in-out group-hover:translate-x-[2px] group-hover:text-primary"
              size={24}
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <ArticleList />
      </div>
    </div>
  );
};
