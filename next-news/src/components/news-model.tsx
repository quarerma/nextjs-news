import { News } from "@/types/news";
import Image from "next/image";
import image from "../../public/next.svg";
import Link from "next/link";

interface NewsProps {
  news: News;
}

export default function NewsModel({ news }: NewsProps) {
  return (
    <div className="flex gap-x-6 relative">
      <div className="min-w-[500px] h-[300px] bg-black"></div>
      <div className="mt-1 space-y-3 w-full">
        <h1 className="text-[2rem] drop-shadow-sm font-semibold ">
          {news.title}
        </h1>
        <span className="text-[1.3rem] font-light">
          {news.publishedAt.toString()}
        </span>
        <p className="text-[1.3rem] ">{news.content}</p>
        <div className="absolute bottom-0 right-0 mb-3 mr-3">
          <Link href={`/news/${news.title}`} className="font-extrabold text-lg">
            Confira mais {"->"}
          </Link>
        </div>
      </div>
    </div>
  );
}
