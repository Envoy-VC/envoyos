import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

const items = [
  {
    color: "#f54e25",
    description:
      "Building decentralized solutions with smart contracts, protocols, and user-friendly interfaces. turning ideas into shipped products.",
    id: "develop-web3-applications",
    title: "Develop Web3 Applications",
  },
  {
    color: "#FFCCDD",
    description:
      "Creating technical content that helps others learn, explore new tools, and understand complex systems making tech more accessible.",
    id: "write-and-share-knowledge",
    title: "Write & Share Knowledge",
  },
  {
    color: "#007656",
    description:
      "Participating in hackathons, attending IRL events, and connecting with developers to exchange ideas and fuel innovation.",
    id: "connect-with-the-community",
    title: "Collaborate with the Community",
  },
  {
    color: "#FABE29",
    description:
      "Since 2020, I've been diving deep into new technologies, refining my skills, and embracing challenges that push both code and creativity forward.",
    id: "constantly-explore-and-learn",
    title: "Constantly Explore & Learn",
  },
];

export const FocusList = () => {
  return (
    <Accordion
      className="flex w-full flex-col divide-y-2 divide-[#A6A9BE]"
      defaultOpenKey="develop-web3-applications"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {items.map((item) => {
        return (
          <AccordionItem className="py-4" key={item.id} value={item.id}>
            <AccordionTrigger className="w-full cursor-pointer text-left font-formula text-[#A6A9BE] text-[1.65rem] uppercase leading-[1] tracking-wider sm:text-4xl">
              <div className="flex items-start justify-between gap-4">
                <div
                  className="transition-all duration-300 group-data-expanded:text-[var(--color)]"
                  // @ts-expect-error safe to ignore
                  style={{ "--color": item.color }}
                >
                  {item.title}
                </div>
                <div className="relative flex size-6 items-center justify-center sm:size-8">
                  <div className="h-[3px] w-full rounded-full bg-[#6E717D] sm:h-1" />
                  <div className="-translate-x-1/2 group-data-expanded:-rotate-90 absolute top-0 left-1/2 h-full w-[3px] rounded-full bg-[#6E717D] transition-transform duration-300 sm:w-1" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="py-2 font-sans text-[#e8e8ee] text-sm sm:text-base">
                {item.description}
              </p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
