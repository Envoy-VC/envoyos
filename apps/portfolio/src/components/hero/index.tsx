import { IntroLines } from "./intro-lines";
import { Marquee } from "./marquee";

export const Hero = () => {
  return (
    <section className="flex h-screen w-full flex-col justify-around py-32">
      <IntroLines />
      <Marquee />
    </section>
  );
};
