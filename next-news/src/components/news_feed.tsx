import { News } from "@/types/news";
import NewsModel from "./news-model";

interface NewsFeedProps {
  news: News[];
  title: string;
}

export default function NewsFeed({ news, title }: NewsFeedProps) {
  return news.length > 0 ? (
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
  ) : (
    <div className="flex justify-center  mt-20">
      <h1 className="text-4xl">Nenhuma notícia encontrada</h1>
    </div>
  );
}
