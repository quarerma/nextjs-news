import { getNewsByTopic } from "@/app/data/fecth.news";
import Header from "@/components/header";
import NewsFeed from "@/components/news_feed";
import TopicsNav from "@/components/topics_nav";
import { News } from "@/types/news";
import { useEffect, useState } from "react";

interface NewsProps {
  type: string;
}

async function getNews(type: string) {
  try {
    const response: News[] | undefined = await getNewsByTopic(type);

    if (!response) return;
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default async function PageLayout({ type }: NewsProps) {
  const news = await getNews(type);

  return (
    news && (
      <div className="min-h-screen w-full bg-background-white">
        <Header />
        <TopicsNav />
        <NewsFeed
          news={news}
          title={`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()}`}
        />
      </div>
    )
  );
}
