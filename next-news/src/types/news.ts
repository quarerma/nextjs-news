export type News = {
  title: string;
  image_url: string;
  promoter: string;
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
  BREAKING_NEWS,
}

export const newsFeed: News[] = [
  {
    title: "New Advances in AI Technology",
    image_url:
      "https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok",
    promoter: "Tech Innovations",
    author: "Jane Doe",
    publishedAt: new Date("2023-04-01T10:00:00Z"),
    content:
      "This article explores the latest advances in AI technology, highlighting the potential impacts on various industries.",
    type: [Topic.technology],
  },
  {
    title: "Global Economic Outlook 2023",
    image_url:
      "https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok",
    promoter: "Economy Today",
    author: "John Smith",
    publishedAt: new Date("2023-04-02T09:00:00Z"),
    content:
      "An in-depth analysis of the global economic outlook for 2023, examining key trends and predictions.",
    type: [Topic.economy],
  },
  {
    title: "Breaking News: Peace Agreement Signed",
    image_url:
      "https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok",
    promoter: "World News",
    author: "Alex Johnson",
    publishedAt: new Date("2023-04-03T11:30:00Z"),
    content:
      "A historic peace agreement has been signed, bringing an end to the long-standing conflict.",
    type: [Topic.BREAKING_NEWS, Topic.international],
  },
];
