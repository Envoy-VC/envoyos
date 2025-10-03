import { defineTable } from "convex/server";
import { v } from "convex/values";

export const projectsSchema = {
  projects: defineTable({
    description: v.string(),
    title: v.string(),
  }),
};
