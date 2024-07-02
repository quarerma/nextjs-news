import { News, newsFeed } from "@/types/news";
import request, { gql } from "graphql-request";

const api_url =
  "https://api-sa-east-1.hygraph.com/v2/cly38l4z300ew07w10fk9ozzo/master";
const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
};

export async function getNewsByTopic(topic: string) {
  try {
    console.log("entrou");
    const query = gql`
      query NewsList {
        news_(where: {topic_contains_some: ${topic}}) {
          id
          imageUrl
          promoteText
          publishedAt
          title
          topic
          author
          content {
            html
          }
        }
      }
    `;

    const response = await request(`${api_url}`, query);

    console.log(response.news_);
    return response.news_ as News[];
  } catch (error) {
    console.error(error);
  }
}

export function getNewsById(id: string) {
  console.log(id);
  return newsFeed.find((news) => news.id === id);
}
