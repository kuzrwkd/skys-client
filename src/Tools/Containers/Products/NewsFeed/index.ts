/**
 * Lib
 */
import { container } from 'tsyringe';

/**
 * UseCase
 */
import { NewsfeedInteract } from '@/Products/Core/UseCase/newsfeed.interact';

/**
 * Adapter
 */
import { NewsfeedController } from '@/Products/Adapter/Controller/newsfeed.controller';
import { NewsfeedPresenter } from '@/Products/Adapter/Presenter/newsfeed.presenter';

/**
 * Driver
 */
import { NewsfeedWeb } from '@/Products/Driver/Web/newsfeed.web';

/**
 * Inject
 */
container.register<NewsfeedInteract>('NewsFeedInteract', { useClass: NewsfeedInteract });
container.register<NewsfeedWeb>('NewsFeedWebApi', { useClass: NewsfeedWeb });
container.register<NewsfeedController>('NewsFeedController', { useClass: NewsfeedController });
container.register<NewsfeedPresenter>('NewsFeedPresenter', { useClass: NewsfeedPresenter });

export { container };
