import { Hero, Navbar } from "@/components";

const HomePage = () => {
  return (
    <div className="z-[2] h-[400vh] w-full overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
