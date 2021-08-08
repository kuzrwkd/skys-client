import { Controller, Get } from 'routing-controllers';
import { container } from '@/Tools/Containers/Products/NewsFeed';

@Controller('/newsfeed')
export class NewsFeed {
  @Get()
  async get() {
    const newsFeedController = container.resolve<NewsFeed.INewsFeedController>('NewsFeedController');
    return JSON.stringify(await newsFeedController.handle());
  }
}
