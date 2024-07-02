import { News } from "@/types/news";
import request, { gql } from "graphql-request";

const api_url =
  "https://api-sa-east-1.hygraph.com/v2/cly38l4z300ew07w10fk9ozzo/master";
const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
};

export async function getNewsByTopic(topic: string) {
  try {
    const query = gql`
      query NewsList {
        news_(where: {topic_contains_some: ${topic}}) {
          id
          imageUrl
          promoteText
          createdAt
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
    console.log("response", response);
    return response.news_ as News[];
  } catch (error) {
    console.error(error);
  }
}

export async function getNewsById(id: string) {
  try {
    console.log("id", id);
    const query = gql`
      query List {
        news_(where: { id: "${id}" }) {
          id
          imageUrl
          promoteText
          createdAt
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

    const news = response.news_ as News[];
    console.log("news", news[0]);
    return news[0];
  } catch (error) {}
}
