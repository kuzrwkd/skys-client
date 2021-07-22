import { injectable } from 'tsyringe';

@injectable()
export class NewsFeedEntity {
  private entity!: NewsFeed.Entity[];

  /**
   * newsFeedのsetter
   * @param data
   */
  set setNewsFeed(data: NewsFeed.Entity[]) {
    this.entity = data;
  }

  /**
   * newsFeedのgetter
   */
  get getNewsFeed(): NewsFeed.Entity[] {
    return this.entity;
  }
}
