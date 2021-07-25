import { Controller, Get } from 'routing-controllers';
import { container } from '@/Tools/Containers/Products/NewsFeed';

@Controller('/v1')
export class NewsFeed {
  @Get('/newsfeed')
  async get() {
    const newsFeedController = container.resolve<NewsFeed.INewsFeedController>('NewsFeedController');
    return JSON.stringify(await newsFeedController.handle());
  }
}
