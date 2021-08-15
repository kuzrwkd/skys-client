export interface INewsFeedWeb {
  getNewsFeed(): Promise<any>;
}

export type NewsFeedRead = {
  newsfeed: NewsFeed.Entity[];
};
