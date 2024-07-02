import { News } from "@/types/news";
import Image from "next/image";
import image from "../../public/oie_7u1XSEaGW2Ut.jpg";
import Link from "next/link";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NewsProps {
  news: News;
}

export default function NewsModel({ news }: NewsProps) {
  const formatDate = formatDistanceToNowStrict(news.createdAt, {
    locale: ptBR,
  });
  return (
    <div className="flex gap-x-6 relative">
      <Image
        alt="Imagem de capa da notícia"
        src={image}
        width={500}
        height={300}
      />
      <div className="mt-1 space-y-3 w-full">
        <Link
          href={`/news/${news.id}`}
          className="text-[2rem] drop-shadow-sm font-semibold "
        >
          {news.title}
        </Link>
        <h1 className="text-[1.3rem] font-light">Há {formatDate}</h1>
        <p className="text-[1.3rem] ">{news.promoteText}</p>
        <div className="absolute bottom-0 right-0 mb-3 mr-3">
          <Link href={`/news/${news.id}`} className="font-extrabold text-lg">
            Confira mais {"->"}
          </Link>
        </div>
      </div>
    </div>
  );
}
