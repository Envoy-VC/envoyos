/** biome-ignore-all lint/correctness/useUniqueElementIds: safe */
import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-2 py-12"
      id="contact"
    >
      <div className="font-formula text-[#FFCCDE] text-[5.5rem] uppercase leading-[1] tracking-wide">
        let's make something great!
      </div>
      <Link className="group flex flex-row items-start" href="/contact">
        <div className="font-formula text-7xl text-primary uppercase tracking-wide">
          Get in touch
        </div>
        <ArrowUpRightIcon
          className="group-hover:-translate-y-4 -translate-y-2 size-12 text-primary transition-all duration-200 ease-in group-hover:translate-x-2"
          strokeWidth={3}
        />
      </Link>
      <div className="max-w-[44rem] text-center font-sans text-lg text-muted-foreground">
        I'm always open to new opportunities, collaborations, and connections.
        Whether you have a project you'd like to discuss, want to share your
        work, or just say hi!
        <br />
        Feel free to reach out.
      </div>
    </section>
  );
};
