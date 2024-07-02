import { News } from "@/types/news";
import img from "../../public/oie_7u1XSEaGW2Ut.jpg";
import Image from "next/image";
import { format, formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

interface FullNewsViewProps {
  news: News;
}

export default function FullNewsView({ news }: FullNewsViewProps) {
  const formatDate = formatDistanceToNowStrict(news.createdAt, {
    locale: ptBR,
  });

  const formattedCreatedAt = format(
    new Date(news.createdAt),
    "dd/MM/yyyy - HH:mm"
  );
  return (
    <div className="px-28 py-4 mt-16 space-y-4 w-full flex flex-col ">
      <h1 className="text-5xl font-bold text-center ">{news.title}</h1>
      <div className="flex justify-center">
        <Image
          src={img}
          alt="Imagem de capa da notícia"
          width={600}
          height={360}
          className="items-center justify-center"
        />
      </div>
      <h1 className="font-semibold text-lg">Por {news.author}</h1>
      <h1 className="font-extralight text-sm">
        Há {formatDate} ({formattedCreatedAt})
      </h1>
      <div
        className="text-2xl py-10"
        dangerouslySetInnerHTML={{ __html: news.content.html }}
      ></div>
    </div>
  );
}
