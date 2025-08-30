import { type } from "arktype";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

// Mocked DB
export interface Post {
  id: number;
  name: string;
}
const posts: Post[] = [
  {
    id: 1,
    name: "Hello World",
  },
];

const CreatePostSchema = type({
  name: "string > 0",
});

export const postRouter = createTRPCRouter({
  create: publicProcedure.input(CreatePostSchema).mutation(({ input }) => {
    const post: Post = {
      id: posts.length + 1,
      name: input.name,
    };
    posts.push(post);
    return Promise.resolve(post);
  }),

  getLatest: publicProcedure.query(() => {
    return posts.at(-1) ?? null;
  }),
});
