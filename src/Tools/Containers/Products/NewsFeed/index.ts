/**
 * Lib
 */
import { container } from 'tsyringe';

/**
 * UseCase
 */
import { NewsfeedInteract } from '@/Products/Core/UseCase/NewsfeedInteract';

/**
 * Adapter
 */
import { NewsfeedController } from '@/Products/Adapter/Controller/NewsfeedController';
import { NewsfeedPresenter } from '@/Products/Adapter/Presenter/NewsfeedPresenter';

/**
 * Driver
 */
import { NewsfeedWeb } from '@/Products/Driver/Web/NewsfeedWeb';

/**
 * Inject
 */
container.register<NewsfeedInteract>('NewsFeedInteract', { useClass: NewsfeedInteract });
container.register<NewsfeedWeb>('NewsFeedWebApi', { useClass: NewsfeedWeb });
container.register<NewsfeedController>('NewsFeedController', { useClass: NewsfeedController });
container.register<NewsfeedPresenter>('NewsFeedPresenter', { useClass: NewsfeedPresenter });

export { container };
