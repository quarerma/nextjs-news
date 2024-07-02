import { getNewsById } from "@/app/data/fecth.news";
import FullNewsView from "@/components/full_news";
import Header from "@/components/header";
import TopicsNav from "@/components/topics_nav";

export default function NewsPage({ params }: { params: { slug: string } }) {
  const news = getNewsById(params.slug);
  return (
    <div className="min-h-screen w-full bg-background-white">
      <Header />
      <TopicsNav />{" "}
      {news ? (
        <FullNewsView news={news} />
      ) : (
        <div className="text-4xl text-center mt-20 w-full">Not Found</div>
      )}
    </div>
  );
}
