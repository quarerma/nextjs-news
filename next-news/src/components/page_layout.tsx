"use client";

import { getNewsByTopic } from "@/app/data/fecth.news";
import Header from "@/components/header";
import NewsFeed from "@/components/news_feed";
import TopicsNav from "@/components/topics_nav";
import { News } from "@/types/news";
import { useEffect, useState } from "react";

interface NewsProps {
  type: string;
}
export default function PageLayout({ type }: NewsProps) {
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    const fecthNews = async () => {
      try {
        const response: News[] | undefined = await getNewsByTopic(type);

        if (!response) return console.log("No data");
        setNews(response);
      } catch (error) {
        console.error(error);
      }
    };
    fecthNews();
  }, []);
  return (
    <div className="min-h-screen w-full bg-background-white">
      <Header />
      <TopicsNav />
      <NewsFeed
        news={news}
        title={`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()}`}
      />
    </div>
  );
}
