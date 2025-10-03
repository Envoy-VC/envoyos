import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { createCompiler } from "@fumadocs/mdx-remote";
import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { getMDXComponents } from "@/components/mdx";

const compiler = createCompiler({
  rehypePlugins: (v) => [rehypeKatex, ...v],
  remarkPlugins: [remarkMath, remarkMdxMermaid],
});

export default async function Page(props: PageProps<"/[slug]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const compiled = await compiler.compile({
    source: page.content,
  });

  const MdxContent = compiled.body;

  return (
    <DocsPage toc={compiled.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MdxContent components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/[slug]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    description: page.data.description,
    title: page.data.title,
  };
}
