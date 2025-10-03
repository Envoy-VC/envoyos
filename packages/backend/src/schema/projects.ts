import { defineTable } from "convex/server";
import { v } from "convex/values";

export const projectsSchema = {
  projects: defineTable({
    content: v.string(),
    demoVideo: v.optional(v.string()),
    images: v.object({
      cover: v.string(),
      icon: v.string(),
      other: v.array(v.string()),
    }),
    liveDemo: v.optional(v.string()),
    seo: v.object({
      description: v.string(),
      ogImage: v.string(),
      title: v.string(),
    }),
    shortDescription: v.string(),
    slug: v.string(),
    sourceCode: v.optional(v.string()),
    tags: v.array(v.string()),
    title: v.string(),
    tldr: v.optional(v.string()),
  })
    .index("by_slug", ["slug"])
    .index("by_title", ["title"])
    .index("by_tags", ["tags"])
    .searchIndex("search_title", {
      filterFields: ["tags"],
      searchField: "title",
    })
    .searchIndex("search_content", {
      searchField: "content",
    }),
};
