import { getNewsByTopic } from "@/app/data/fecth.news";
import Header from "@/components/header";
import NewsFeed from "@/components/news_feed";
import TopicsNav from "@/components/topics_nav";
import { News } from "@/types/news";

interface NewsProps {
  type: string;
}
export default function PageLayout({ type }: NewsProps) {
  const news: News[] = getNewsByTopic(type);
  return (
    <div className="min-h-screen w-full bg-background-white">
      <Header />
      <TopicsNav />
      <NewsFeed news={news} title="Manchetes" />
    </div>
  );
}
