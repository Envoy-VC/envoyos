import { Footer, Navbar } from "@/components";
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
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Focus />
      <Projects />
      <Articles />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
