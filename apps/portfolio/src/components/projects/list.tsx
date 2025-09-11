"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Modal } from "./modal";

const projects = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kora",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "Vite"],
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "BattleshipX",
    tags: ["ThreeJS", "React", "TypeScript"],
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "zkPersona",
    tags: ["NextJS", "Aztec", "Noir", "ZKP"],
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1534803522048-835d05301b08?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Karma Wallet",
    tags: ["Wallet Connect", "NextJS", "TailwindCSS", "TypeScript", "Vite"],
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1705704661018-5f9c4aab62eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Tesser Streams",
    tags: [
      "Fractional Vesting",
      "Wagmi",
      "NextJS",
      "TailwindCSS",
      "TypeScript",
    ],
  },
];

export const ProjectList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className="flex w-full flex-col">
        {projects.map((project, projectIndex) => {
          return (
            // biome-ignore lint/a11y/noStaticElementInteractions: safe
            <div
              className="flex flex-col gap-4 pt-8"
              key={project.id}
              onMouseEnter={() => {
                setModal({ active: true, index: projectIndex });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index: projectIndex });
              }}
            >
              <div className="px-4 font-formula text-4xl uppercase tracking-wider lg:px-8 lg:text-5xl">
                {project.name}
              </div>
              <div className="flex flex-row flex-wrap items-center gap-2 px-4 font-sans font-semibold text-xs lg:px-8">
                {project.tags.map((tag, index) => {
                  return (
                    <div
                      className={cn(
                        "rounded-sm px-3 py-1",
                        index === 0
                          ? "bg-[#5737AF] text-[#E7E8ED]"
                          : "bg-[#000000] text-[#E7E8ED]",
                      )}
                      key={`project-${project.id}-tag-${index.toString()}`}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 w-full border-t"></div>
            </div>
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </>
  );
};
