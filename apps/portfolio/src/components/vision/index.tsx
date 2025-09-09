const statement = `Sometimes the best way to solve a problem is to build something completely new.`;
const answer = `For me, building in Web3 is about creating systems that people actually own and control. I thrive in the spaces where tech moves quickly, ideas are radical, and progress isn't optional. Web3 gives me a sandbox to experiment, ship, and iterate building systems that actually accelerate the pace of change.`;

export const Vision = () => {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center gap-4 bg-[#FFCCDD] px-8 py-12 text-center">
      <div className="mx-auto max-w-screen-xl font-formula text-3xl text-[#5737AF] uppercase tracking-wider sm:text-4xl md:text-5xl">
        <span className="font-bold text-primary">"</span>
        {statement}
        <span className="font-bold text-primary">"</span>
      </div>
      <div className="mx-auto max-w-screen-lg font-sans text-black text-sm sm:text-base md:text-lg">
        {answer}
      </div>
    </div>
  );
};
