import PageLayout from "@/components/page_layout";
import { Topic } from "@/types/news";

export default function Home() {
  const newsType = "BREAKING_NEWS";
  return <PageLayout type={newsType} />;
}
