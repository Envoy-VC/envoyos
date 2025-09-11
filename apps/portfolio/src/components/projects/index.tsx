import { ArrowUpRight } from "lucide-react";

import { ProjectList } from "./list";

export const Projects = () => {
  return (
    <div className="flex flex-col justify-center gap-12 py-12">
      <div className="flex flex-col gap-4">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center font-formula uppercase tracking-wider">
          <div className="text-5xl lg:text-7xl">Creations</div>
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
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center gap-12 px-8 py-12 lg:flex-row lg:gap-4">
        <ProjectList />
      </div>
    </div>
  );
};
