export type Article = {
  title: string;
  url: string;
  tags: { id: string; name: string }[];
  brief: string;
  coverImage: { url: string; attribution: string | null };
};
