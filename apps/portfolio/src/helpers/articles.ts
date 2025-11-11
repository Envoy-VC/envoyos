"use cache";

import type { Article } from "@/types";

const query = `query GetPosts {
  publication(host: "blog.envoy1084.xyz") {
    posts(first: 20) {
      edges {
        node {
          title
          brief
          url
          tags {
            id
            name
          }
          coverImage {
            url
            attribution
          }
        }
      }
    }
  }
}`;

export const getLatestArticles = async () => {
  const res = await fetch("https://gql.hashnode.com/", {
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const posts = (await res.json()) as {
    data: {
      publication: {
        posts: {
          edges: {
            node: Article;
          }[];
        };
      };
    };
  };

  return posts.data.publication.posts.edges.map(({ node }) => node);
};
