import { AboutImage } from "./about-image";
import { OtherImage } from "./other-image";

const intro = `
I'm Vedant, a developer and technical writer obsessed with building things that matter. For the past three years, I've been deep in the Web3 space, shipping products that push boundaries, attending IRL events, and diving into hackathons where ideas turn into deploys.
Currently, I'm focused on building a secure Battleship game on the Nillion Network, blending cryptography, game mechanics, and user experience into something both fun and resilient.`;

const intro2 = `I'm thinking about the next challenge, idea, or innovation. Perfectionism drives me to explore smarter solutions and refine every detail.
I’m obsessed with Silicon Valley reruns, love gaming, and spend most of my time reading technical content. I also love traveling, always curious to explore new places, people, and technologies that inspire what's next.`;

export const About = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-8 py-4">
      <div className="pb-8 text-center font-formula font-medium text-5xl uppercase tracking-wider sm:text-5xl md:text-6xl lg:text-7xl">
        Web Developer and
        <br />A Little Bit of Everything
        <span className="text-primary">...</span>
      </div>
      <div className="flex h-full flex-col justify-around gap-12">
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
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-24 p-2 px-4 sm:gap-8 md:flex-row">
          <div className="order-2 flex basis-1/2 items-center justify-center md:order-1">
            <OtherImage />
          </div>
          <div className="order-1 flex w-full basis-1/2 flex-col justify-center gap-8 md:order-2">
            <div className="flex-wrap text-center mx:text-start font-formula text-4xl uppercase tracking-wider md:text-start md:text-[2.85rem] md:leading-[1]">
              When i am not <br className="md:hidden" />
              developing <span className="text-primary">...</span>
            </div>
            <div className="max-w-[34rem] whitespace-pre-wrap text-center font-sans text-muted-foreground text-xs md:text-left md:text-base">
              {intro2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
