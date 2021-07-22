/**
 * Lib
 */
import { container } from 'tsyringe';

/**
 * Core
 */
import { NewsFeedInteract } from '@/Products/Core/UseCase/NewsFeed/NewsFeedInteract';

/**
 * Adapter
 */
import { NewsFeedController } from '@/Products/Adapter/Controller/NewsFeedController';
import { NewsFeedPresenter } from '@/Products/Adapter/Presenter/NewsFeedPresenter';

/**
 * Driver
 */
import { NewsFeedWebApi } from '@/Products/Driver/Web/NewsFeedWebApi';

/**
 * Inject
 */
container.register<NewsFeedInteract>('NewsFeedInteract', { useClass: NewsFeedInteract });
container.register<NewsFeedWebApi>('NewsFeedWebApi', { useClass: NewsFeedWebApi });
container.register<NewsFeedController>('NewsFeedController', { useClass: NewsFeedController });
container.register<NewsFeedPresenter>('NewsFeedPresenter', { useClass: NewsFeedPresenter });

export { container };
