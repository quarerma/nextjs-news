import { News } from "@/types/news";
import NewsModel from "./news-model";

interface NewsFeedProps {
  news: News[];
  title: string;
}

export default function NewsFeed({ news, title }: NewsFeedProps) {
  return (
    <div className="px-28  py-4 space-y-4">
      <h1 className="text-4xl">{title}</h1>
      <div className="space-y-14  gap-4">
        {news.map((news) => (
          <div key={news.title}>
            <NewsModel news={news} />
          </div>
        ))}
      </div>
    </div>
  );
}
