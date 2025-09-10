import { BrainIcon } from "lucide-react";

export const FocusImage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row">
        <div className="-rotate-8 z-[2] h-fit rounded-xl bg-primary px-4 py-3 font-formula text-4xl uppercase leading-[0.9] tracking-wider transition-all duration-200 ease-in-out hover:rotate-2 sm:text-5xl">
          <div>
            Hack
            <span>.</span>
          </div>
          <div>
            Build
            <span>.</span>
          </div>
          <div>
            Repeat
            <span>.</span>
          </div>
        </div>

        <div className="group">
          <div className="-translate-y-1/3 relative h-fit rotate-8 rounded-xl bg-[#FFCCDD] p-3 transition-all duration-300 ease-in-out group-hover:rotate-6">
            <div className="font-formula text-[#FE0002] leading-[1.1] tracking-wide">
              <div className="text-4xl sm:text-6xl">helping you</div>
              <div className="text-center text-5xl sm:text-7xl">learn</div>
            </div>
            <div className="-translate-x-1/2 group-hover:-rotate-4 absolute bottom-0 left-1/2 flex translate-y-1/2 text-nowrap rounded-xl bg-[#5737AF] px-2 py-1 font-bold text-[#FFCCDD] text-xl transition-all duration-300 ease-in-out sm:px-4 sm:text-2xl">
              step by step
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-4 flex flex-row items-center">
        <div className="rotate-4 rounded-xl bg-[#D0D5FF] px-4 py-3 font-formula text-5xl text-[#007656] leading-[0.8] tracking-wide transition-all duration-300 ease-in-out hover:rotate-6 sm:text-7xl">
          <div className="flex flex-row items-center gap-2">
            brain
            <BrainIcon className="size-12 sm:size-16" strokeWidth={2.5} />
          </div>
          <div className="text-center">dump.</div>
        </div>
        <div className="-translate-x-4 -rotate-4 hover:-rotate-8 z-[2] flex h-fit items-center justify-center rounded-xl bg-[#FABE29] p-3 text-center font-formula text-4xl text-[#FEF6E7] uppercase tracking-wide transition-all duration-300 ease-in-out sm:text-5xl">
          Always beta.
        </div>
      </div>
    </div>
  );
};
