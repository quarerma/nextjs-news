export type News = {
  title: string;
  id: string;
  image_url: string;
  promote_text: string;
  author: string;
  publishedAt: Date;
  content: string;
  type: Topic[];
};

export enum Topic {
  brasil,
  international,
  economy,
  technology,
  manchetes,
}

export const newsFeed: News[] = [
  {
    title: "New Advances in AI Technology",
    id: "new-advances-in-ai-technology",
    image_url:
      "https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok",
    promote_text:
      "This article explores the latest advances in AI technology, highlighting the potential impacts on various industries.",
    author: "Jane Doe",
    publishedAt: new Date("2023-04-01T10:00:00Z"),
    content:
      "Artificial Intelligence (AI) continues to be a groundbreaking force across various sectors, driving innovations and enhancing efficiencies. From healthcare to finance, AI technologies are transforming the landscape, offering new opportunities and challenges. This article delves into the recent developments in AI, discussing its implications and how it's shaping the future.",
    type: [Topic.technology],
  },
  {
    title: "Global Economic Outlook 2023",
    type: [Topic.economy],
    id: "global-economic-outlook-202",
    image_url:
      "https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok",
    promote_text:
      "An in-depth analysis of the global economic outlook for 2023, examining key trends and predictions.",
    author: "John Smith",
    publishedAt: new Date("2023-04-02T09:00:00Z"),
    content:
      "As we move into 2023, the global economy faces a myriad of challenges and opportunities. From the lingering effects of the pandemic to geopolitical tensions, various factors are shaping the economic landscape. This article provides a comprehensive overview of what to expect in the coming year, offering insights into economic forecasts, potential risks, and areas of growth.",
  },
  {
    title: "Breaking News: Peace Agreement Signed",
    id: "breaking-news-peace-agreement-signed",
    image_url:
      "https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok",
    promote_text:
      "A historic peace agreement has been signed, bringing an end to the long-standing conflict.",
    author: "World News Network",
    publishedAt: new Date("2023-04-03T11:30:00Z"),
    content: "",
    type: [Topic.manchetes, Topic.international],
  },
];
