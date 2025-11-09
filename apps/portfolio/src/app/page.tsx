import {
  About,
  Articles,
  Contact,
  Focus,
  Hero,
  Projects,
  Socials,
  Vision,
} from "@/sections";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Vision />
      <Focus />
      <Projects />
      <Articles />
      <Socials />
      <Contact />
    </div>
  );
};

export default HomePage;
