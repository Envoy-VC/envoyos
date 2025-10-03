import { defineSchema } from "convex/server";

import { projectsSchema } from "./schema/projects";

const schema = defineSchema({
  ...projectsSchema,
});

// biome-ignore lint/style/noDefaultExport: need to export schema
export default schema;
