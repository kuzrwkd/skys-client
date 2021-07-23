/**
 * Expressjs core
 */
import express from 'express';

/**
 * Nextjs core
 */
import next from 'next';

/**
 * Lib
 */
import 'reflect-metadata';

/**
 * NewsFeed
 */
import { container } from '@/Tools/Containers/Products/NewsFeed';

const port = parseInt(process.env.PORT ?? '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const router = express.Router();

router.get('/', async (req, res, next) => {
  const newsFeedController = container.resolve<NewsFeed.INewsFeedController>('NewsFeedController');
  const result = await newsFeedController.handle();
  res.json(`GET OK! query is ${result}`);
  next();
});

router.get('/:id', (req, res, next) => {
  res.json(`GET OK! params is ${req.params.id}`);
  next();
});

router.post('/', (req, res, next) => {
  res.json(`POST OK! params is ${req.body}`);
  next();
});

app.prepare().then(() => {
  const server = express();

  server.use('/demo', router);
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
