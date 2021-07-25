/**
 * Expressjs core
 */
import { Request, Response } from 'express';

/**
 * Next
 */
import next from 'next';

/**
 * Lib
 */
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';

/**
 * Controller
 */
import { NewsFeed } from '@/Products/Driver/Server/newsfeed.controller';

const port = parseInt(process.env.PORT ?? '3000', 10);
const app = next({ dev: process.env.NODE_ENV === 'development' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createExpressServer({
    controllers: [NewsFeed],
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
