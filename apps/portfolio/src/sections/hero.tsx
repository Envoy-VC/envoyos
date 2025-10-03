import { IntroLines, MarqueeTitles } from "@/components";

export const Hero = () => {
  return (
    <section
      className="flex h-screen w-full flex-col justify-around py-32"
      id="hero"
    >
      <IntroLines />
      <MarqueeTitles />
    </section>
  );
};
