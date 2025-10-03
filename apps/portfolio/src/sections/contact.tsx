/** biome-ignore-all lint/correctness/useUniqueElementIds: safe */
import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section
      className="flex min-h-[50dvh] flex-col items-center justify-center gap-2 py-12"
      id="contact"
    >
      <div className="text-center font-formula text-5xl text-[#FFCCDE] uppercase leading-[1] tracking-wide sm:text-6xl md:text-[5.5rem]">
        let's make something great!
      </div>
      <Link className="group flex flex-row items-start" href="/contact">
        <div className="font-formula text-4xl text-primary uppercase tracking-wide sm:text-5xl md:text-7xl">
          Get in touch
        </div>
        <ArrowUpRightIcon
          className="group-hover:-translate-y-4 -translate-y-2 size-8 text-primary transition-all duration-200 ease-in group-hover:translate-x-2 md:size-12"
          strokeWidth={3}
        />
      </Link>
      <div className="max-w-sm px-2 text-center font-sans text-muted-foreground text-xs sm:max-w-xl sm:text-lg md:max-w-[44rem] md:text-lg">
        I'm always open to new opportunities, collaborations, and connections.
        Whether you have a project you'd like to discuss, want to share your
        work, or just say hi!
        <br />
        Feel free to reach out.
      </div>
    </section>
  );
};
