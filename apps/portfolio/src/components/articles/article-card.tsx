"use client";

import { Squircle } from "@squircle-js/react";

import type { Article } from "@/types";

const colors = ["#FFCCDD", "#F9BE27", "#FEF6E7", "#D0D5FF"];

const getShortTitle = (title: string) => {
  const words = title.split(" ");
  let currentLength = 0;
  let shortTitle = "";
  for (const word of words) {
    if (currentLength + word.length > 48) break;
    shortTitle += `${word} `;
    currentLength += word.length + 1;
  }
  return shortTitle;
};

const getShortBrief = (brief: string) => {
  const words = brief.split(" ");
  let currentLength = 0;
  let shortBrief = "";
  for (const word of words) {
    if (currentLength + word.length > 208) break;
    shortBrief += `${word} `;
    currentLength += word.length + 1;
  }
  return shortBrief;
};

const getTagName = (tag: string) => {
  const words = tag.split("-");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const ArticleCard = ({
  index,
  title,
  tags,
  brief,
  url,
}: Article & { index: number }) => {
  const color = colors[index % colors.length] ?? "#FFCCDD";
  return (
    <Squircle asChild={true} className="" cornerRadius={24} cornerSmoothing={2}>
      <a
        className="hover:-rotate-1 flex h-[16rem] min-w-[22rem] flex-col gap-4 rounded-3xl p-8 transition-all duration-300 ease-in-out hover:scale-[1.02] md:h-[20rem] md:min-w-[28rem]"
        href={url}
        rel="noopener noreferrer"
        style={{ backgroundColor: color }}
        target="_blank"
      >
        <div className="font-formula text-2xl text-black uppercase tracking-wide md:text-3xl">
          {getShortTitle(title)}
        </div>
        <div className="whitespace-pre-wrap text-black text-xs md:text-sm">
          {getShortBrief(brief)}...
        </div>
        <div className="flex flex-row flex-wrap items-center gap-1">
          {tags.map((tag, index) => {
            return (
              <div
                className="text-nowrap rounded-xl bg-primary px-[6px] py-[2px] text-sm md:px-3 md:py-1 md:text-base"
                key={`article-card-tag-${index.toString()}`}
              >
                {getTagName(tag.name)}
              </div>
            );
          })}
        </div>
      </a>
    </Squircle>
  );
};
