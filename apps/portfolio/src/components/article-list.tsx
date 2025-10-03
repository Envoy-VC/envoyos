import { InfiniteSlider } from "@/components/infinite-slider";
import { getLatestArticles } from "@/helpers/articles";

import { ArticleCard } from "./article-card";

export const ArticleList = async () => {
  const articles = await getLatestArticles();
  return (
    <InfiniteSlider className="py-10" gap={24} speedOnHover={20}>
      {articles.map((article, index) => (
        <ArticleCard
          index={index}
          key={`article-${index.toString()}`}
          {...article}
        />
      ))}
    </InfiniteSlider>
  );
};
