import { About, Hero, Navbar } from "@/components";

const HomePage = () => {
  return (
    <div className="z-[2] w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <div className="h-screen"></div>
    </div>
  );
};

export default HomePage;
