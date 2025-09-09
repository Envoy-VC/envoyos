import { About, Focus, Hero, Navbar, Vision } from "@/components";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* <Cursor
        attachToParent={true}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          duration: 0.15,
          ease: "easeInOut",
        }}
        variants={{
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.3 },
          initial: { opacity: 0, scale: 0.3 },
        }}
      >
        <motion.div
          animate={{
            height: isHovering ? 32 : 16,
            width: isHovering ? 80 : 16,
          }}
          className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
        ></motion.div>
      </Cursor> */}
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Focus />
      <div className="h-[400dvh]"></div>
    </div>
  );
};

export default HomePage;
