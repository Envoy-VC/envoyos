/** biome-ignore-all lint/style/useNamingConvention: safe for Global MDX Components */
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { Mermaid } from "./mermaid";

export const getMDXComponents = (components?: MDXComponents): MDXComponents => {
  return {
    ...defaultMdxComponents,
    Mermaid,
    ...components,
  };
};
