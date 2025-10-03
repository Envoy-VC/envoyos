import {
  About,
  Articles,
  // CustomCursor,
  Focus,
  Footer,
  Hero,
  Navbar,
  Projects,
  Vision,
} from "@/components";
import { Socials } from "@/components/socials";
import { Contact } from "@/sections";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* <CustomCursor /> */}
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
