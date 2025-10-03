import { GitHubIcon, TelegramIcon, TwitterIcon } from "./icons";

export const Socials = () => {
  return (
    <div className="hidden h-[50dvh] w-full flex-col items-center justify-center gap-4 text-center font-formula text-5xl text-[#D0D5FF] uppercase leading-[0.9] tracking-wider md:flex">
      <div className="flex flex-row items-center gap-2">
        <div className="min-w-fit">I'm most active on</div>
        <div className="relative h-12 w-16">
          <div className="-top-1/2 absolute right-1/2 flex size-16 translate-x-1/2 translate-y-2 rotate-6 items-center justify-center rounded-2xl bg-black transition-all duration-[0.5s] ease-in-out hover:rotate-0 hover:scale-105">
            <TwitterIcon className="size-10" fill="#fff" />
          </div>
        </div>
        <div className="min-w-fit">and</div>
        <div className="relative h-12 w-16">
          <TelegramIcon className="-top-1/2 absolute right-1/2 flex size-16 translate-x-1/2 translate-y-2 rotate-6 items-center justify-center rounded-2xl bg-[#D0D5FF] transition-all duration-[0.5s] ease-in-out hover:rotate-0 hover:scale-105" />
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="min-w-fit">
          When not coding, I'm gaming or traveling
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div>Fueled by</div>
        <div className="relative h-12 w-18">
          {/** biome-ignore lint/performance/noImgElement: safe */}
          <img
            alt="coffee"
            className="-top-1/2 absolute right-1/2 size-18 translate-x-1/2 rotate-6 transition-all duration-[0.5s] ease-in-out hover:rotate-0 hover:scale-105"
            src="/coffee.png"
          />
        </div>
        <div> and silicon valley reruns</div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div>usually lurking on</div>
        <div className="relative h-12 w-16">
          <GitHubIcon className="-top-1/2 absolute right-1/2 flex size-16 translate-x-1/2 translate-y-2 rotate-6 items-center justify-center rounded-2xl transition-all duration-[0.5s] ease-in-out hover:rotate-0 hover:scale-105" />
        </div>
      </div>
    </div>
  );
};
