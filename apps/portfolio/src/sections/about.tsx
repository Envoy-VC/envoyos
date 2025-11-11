import { AboutImage, OtherImage } from "@/components";
import { data } from "@/data";

export const About = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-4 lg:h-screen" id="about">
      <div className="pb-8 text-center font-formula font-medium text-5xl uppercase tracking-wider sm:text-5xl md:text-6xl lg:text-7xl">
        Web Developer and
        <br />A Little Bit of Everything
        <span className="text-primary">...</span>
      </div>
      <div className="flex h-full flex-col justify-around gap-24 lg:gap-12">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-12 p-2 px-4 sm:gap-8 lg:flex-row">
          <div className="flex w-full basis-1/2 flex-col items-center justify-center lg:items-start">
            <div className="text-center font-formula text-4xl uppercase leading-[1] tracking-wider md:text-[2.85rem] lg:text-start lg:text-6xl">
              Shaping ideas into
              <br />
              shipped products
            </div>
            <div className="max-w-[34rem] whitespace-pre-wrap text-center font-sans text-muted-foreground text-xs md:text-sm lg:text-left lg:text-base">
              {data.about.intro}
            </div>
          </div>
          <div className="flex basis-1/2 items-center justify-center">
            <AboutImage />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-12 p-2 px-4 sm:gap-8 lg:flex-row">
          <div className="order-2 flex basis-1/2 items-center justify-center lg:order-1">
            <OtherImage />
          </div>
          <div className="order-1 flex w-full basis-1/2 flex-col items-center justify-center gap-8 lg:order-2 lg:items-start">
            <div className="text-center font-formula text-4xl uppercase leading-[1] tracking-wider md:text-[2.85rem] lg:text-start lg:text-6xl">
              When i am not <br />
              developing <span className="text-primary">...</span>
            </div>
            <div className="max-w-[34rem] whitespace-pre-wrap text-center font-sans text-muted-foreground text-xs md:text-sm lg:text-left lg:text-base">
              {data.about.other}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
