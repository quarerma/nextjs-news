export type News = {
  title: string;
  id: string;
  image_url: string;
  promoteText: string;
  author: string;
  createdAt: Date;
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
