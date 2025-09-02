/** biome-ignore-all lint/performance/noImgElement: safe */
export const About = () => {
  return (
    <div className="flex h-[60dvh] w-full flex-col items-center justify-center gap-4 text-center font-formula text-5xl text-[#D0D5FF] uppercase leading-[0.9] tracking-wider">
      <div className="flex flex-row items-center gap-2">
        <div className="min-w-fit">Curious by nature,</div>
        <div className="relative h-12 w-16">
          <div className="-top-1/2 absolute right-1/2 flex size-16 translate-x-1/2 translate-y-2 rotate-6 items-center justify-center rounded-2xl bg-[#D0D5FF] transition-all duration-[0.5s] ease-in-out hover:rotate-0 hover:scale-105">
            <img
              alt="developer"
              className="h-full w-full"
              src="/about/developer.png"
            />
          </div>
        </div>
        <div className="min-w-fit">by choice</div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="min-w-fit">Three years on</div>
        <div className="relative h-12 w-16">
          <img
            alt="ethereum"
            className="-top-1/2 absolute right-1/2 max-h-18 max-w-18 translate-x-1/2 rotate-15 rounded-full transition-all duration-[0.5s] ease-in-out hover:rotate-6 hover:scale-105"
            src="/about/eth.svg"
          />
        </div>
        <div className="min-w-fit"> still debugging reality</div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div>Fueled by</div>
        <div className="relative h-12 w-18">
          <img
            alt="coffee"
            className="-top-1/2 absolute right-1/2 size-18 translate-x-1/2 rotate-6 transition-all duration-[0.5s] ease-in-out hover:rotate-0 hover:scale-105"
            src="/about/coffee.png"
          />
        </div>
        <div> and silicon valley reruns</div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div>Most active on</div>
        <div className="relative h-12 w-18">
          <img
            alt="twitter"
            className="-top-1/2 -rotate-9 absolute right-1/2 size-18 translate-x-1/2 transition-all duration-[0.5s] ease-out hover:rotate-0 hover:scale-105"
            src="/about/twitter.png"
          />
        </div>
        <div>usually lurking on</div>
        <div className="relative h-12 w-18">
          <img
            alt="github"
            className="-top-1/2 absolute right-1/2 size-18 translate-x-1/2 rotate-9 transition-all duration-[0.5s] ease-out hover:rotate-0 hover:scale-105"
            src="/about/github.png"
          />
        </div>
      </div>
    </div>
  );
};
