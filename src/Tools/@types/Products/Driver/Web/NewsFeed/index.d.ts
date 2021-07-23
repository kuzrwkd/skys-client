export interface INewsFeedWebApi {
  getNewsFeed(): Promise<any>;
}

export type NewsFeedReadApi = {
  newsfeed: NewsFeed.Entity[];
};
