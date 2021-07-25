/**
 * Next
 */
import type {
  NextApiRequest as _NextApiRequest,
  NextApiResponse as _NextApiResponse,
  NextPage as _NextPage,
  DocumentContext as _DocumentContext,
  NextPageContext as _NextPageContext,
  AppProps as _AppProps,
} from 'next';

/**
 * Tools
 */
import type { IDayJs as _IDayJs } from '@/Tools/@types/Tools/Utility/Date/';

/**
 * NewsFeed
 */
import type {
  INewsFeedEntity as _INewsFeedEntity,
  Entity as _Entity,
  Organization as _Organization,
  Contents as _Contents,
} from '@/Tools/@types/Products/Core/Entity/NewsFeed';
import type {
  INewsFeedWebApi as _INewsFeedWebApi,
  NewsFeedReadApi as _NewsFeedReadApi,
} from '@/Tools/@types/Products/Driver/Web/NewsFeed';
import type { INewsFeedInteract as _INewsFeedInteract } from '@/Tools/@types/Products/Core/UseCase/NewsFeed';
import type { INewsFeedController as _INewsFeedController } from '@/Tools/@types/Products/Adapter/Controller/NewsFeed';

declare global {
  /**
   * Next
   */
  export namespace Next {
    export type DocumentContext = _DocumentContext;
    export type NextApiRequest = _NextApiRequest;
    export type NextApiResponse<T = any> = _NextApiResponse<T>;
    export type NextPage<T = any> = _NextPage<T>;
    export type NextPageContext = _NextPageContext;
    export type AppProps<P = {}> = _AppProps<P>;
  }

  /**
   * Tools
   */
  export namespace Tools {
    export type IDayJs = _IDayJs;
  }

  /**
   * NewsFeed
   */
  export namespace NewsFeed {
    export type INewsFeedEntity = _INewsFeedEntity;
    export type Entity = _Entity;
    export type Organization = _Organization;
    export type Contents = _Contents;
    export type INewsFeedWebApi = _INewsFeedWebApi;
    export type NewsFeedReadApi = _NewsFeedReadApi;
    export type INewsFeedInteract = _INewsFeedInteract;
    export type INewsFeedController = _INewsFeedController;
  }
}
