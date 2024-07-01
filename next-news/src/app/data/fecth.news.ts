import { Topic, newsFeed } from "@/types/news";

export function getNewsByTopic(type: string) {
  // transform the string into a Topic
  const topic = Topic[type as keyof typeof Topic];
  return newsFeed.filter((news) => news.type.includes(topic));
}
