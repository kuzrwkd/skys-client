export interface INewsFeedPresenter {
  handle(data: NewsFeed.NewsFeedRead): NewsFeed.Entity[];
}
