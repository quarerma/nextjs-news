import { useRouter } from "next/router";
import PageLayout from "@/components/page_layout";

export default function Topic({ params }: { params: { slug: string } }) {
  return <PageLayout type={params.slug} />;
}
