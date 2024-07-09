import { getClient } from "@/server/apollo-client";
import { News } from "@/types/news";
import { gql } from "@apollo/client";

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

    const client = getClient();

    const { data } = await client.query({
      query: query,
      context: {
        fetchOptions: {
          next: {
            revalidate: 30,
          },
        },
      },
    });

    return data.news_ as News[];
  } catch (error) {
    console.log(error);
  }
}

export async function getNewsById(id: string) {
  try {
    const NEWS_QUERY = gql`
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

    const client = getClient();

    const { data } = await client.query({
      query: NEWS_QUERY,
      context: {
        fetchOptions: {
          next: {
            revalidate: 30,
          },
        },
      },
    });

    const news = data.news_ as News[];

    return news[0];
  } catch (error) {
    console.log(error);
  }
}
