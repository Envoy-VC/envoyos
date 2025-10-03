import { FocusImage } from "./focus-image";
import { FocusList } from "./list";

export const Focus = () => {
  return (
    <div className="flex min-h-[80dvh] flex-col justify-center gap-12 py-12">
      <div className="flex flex-col gap-4">
        <div className="mx-auto font-formula text-5xl uppercase tracking-wider lg:text-7xl">
          What I do.
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center font-sans text-muted-foreground text-sm sm:text-base md:text-lg">
          I believe in building every day with passion and purpose not just
          coding for deadlines, but creating products and experiences that
          excite me and make a real impact.
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-12 px-8 py-12 lg:flex-row lg:gap-4">
        <div className="w-full basis-1/2">
          <FocusList />
        </div>
        <div className="flex h-full w-full basis-1/2 items-center justify-center py-12 lg:py-0">
          <FocusImage />
        </div>
      </div>
    </div>
  );
};
