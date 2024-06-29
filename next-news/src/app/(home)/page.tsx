import Header from "@/components/header";
import TopicsNav from "@/components/topics_nav";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background-white">
      <Header />
      <TopicsNav />
    </div>
  );
}
