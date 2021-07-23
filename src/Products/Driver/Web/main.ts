/**
 * Expressjs core
 */
import { Request, Response } from 'express';

/**
 * Nextjs core
 */
import next from 'next';

/**
 * Lib
 */
import 'reflect-metadata';
import { Controller, createExpressServer, Get } from 'routing-controllers';

/**
 * NewsFeed
 */
import { container } from '@/Tools/Containers/Products/NewsFeed';

const port = parseInt(process.env.PORT ?? '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

@Controller('/v1')
class Demo {
  @Get('/demo')
  async getDemo() {
    const newsFeedController = container.resolve<NewsFeed.INewsFeedController>('NewsFeedController');
    return JSON.stringify(await newsFeedController.handle());
  }
}

app.prepare().then(() => {
  const server = createExpressServer({
    controllers: [Demo],
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
