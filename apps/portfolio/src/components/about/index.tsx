import { AboutImage } from "./about-image";

const intro = `
I'm a self-taught Visual & UX designer with demonstrated experience in helping B2B Software and consumer startups take their marketing efforts on digital presence go from zero to one hundred.
I've always had a passion for presenting things in a visually compelling way from an early age. Whether it was creating beautiful art projects or designing eye-catching presentations, I have always enjoyed the process of bringing ideas to life through good design. And over the years, this passion has only grown stronger and more skilled.`;

export const About = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-8 py-4">
      <div className="pb-8 text-center font-formula font-medium text-5xl uppercase tracking-wider sm:text-5xl md:text-6xl lg:text-7xl">
        Web Developer and
        <br />A Little Bit of Everything
        <span className="text-primary">...</span>
      </div>
      <div className="flex h-full flex-col justify-around">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-24 p-2 px-4 sm:gap-8 md:flex-row">
          <div className="flex w-full basis-1/2 flex-col justify-center">
            <div className="text-center font-formula text-4xl uppercase tracking-wider md:text-start md:text-[2.85rem] md:leading-[1]">
              Shaping ideas into
              <br />
              shipped products
            </div>
            <div className="max-w-[34rem] whitespace-pre-wrap text-center font-sans text-muted-foreground text-xs md:text-left md:text-base">
              {intro}
            </div>
          </div>
          <div className="flex basis-1/2 items-center justify-center">
            <AboutImage />
          </div>
        </div>
      </div>
    </div>
  );
};
