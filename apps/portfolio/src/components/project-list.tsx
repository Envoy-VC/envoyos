"use client";

import { useState } from "react";

import { data } from "@/data";
import { cn } from "@/lib/utils";

import { Modal } from "./project-image-modal";

const projects = data.projects;

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
