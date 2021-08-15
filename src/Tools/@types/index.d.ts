/**
 * Lib
 */
import {
  AxiosError as _AxiosError,
  AxiosRequestConfig as _AxiosRequestConfig,
  AxiosResponse as _AxiosResponse,
} from 'axios';

/**
 * Tools
 */
import type { IDateTool as _IDateTool } from '@/Tools/@types/Tools/Utility/Date/';

/**
 * Store
 */
import { AppStore as _AppStore, AppState as _AppState, AppThunk as _AppThunk } from '@/Products/Driver/Store/main';

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
  INewsFeedWeb as _INewsFeedWeb,
  NewsFeedRead as _NewsFeedRead,
} from '@/Tools/@types/Products/Driver/Web/NewsFeed';
import type { INewsFeedInteract as _INewsFeedInteract } from '@/Tools/@types/Products/Core/UseCase/NewsFeed';
import type { INewsFeedController as _INewsFeedController } from '@/Tools/@types/Products/Adapter/Controller/NewsFeed';

declare global {
  /**
   * Lib
   */
  export namespace Lib {
    export type AxiosRequestConfig = _AxiosRequestConfig;
    export type AxiosResponse<T = any> = _AxiosResponse<T>;
    export type AxiosError<T = any> = _AxiosError<T>;
  }

  /**
   * Tools
   */
  export namespace Tools {
    export type IDateTool = _IDateTool;
  }

  /**
   * Store
   */
  export namespace Store {
    export type AppStore = _AppStore;
    export type AppState = _AppState;
    export type AppThunk = _AppThunk;
  }

  /**
   * NewsFeed
   */
  export namespace NewsFeed {
    export type INewsFeedEntity = _INewsFeedEntity;
    export type Entity = _Entity;
    export type Organization = _Organization;
    export type Contents = _Contents;
    export type INewsFeedWeb = _INewsFeedWeb;
    export type NewsFeedRead = _NewsFeedRead;
    export type INewsFeedInteract = _INewsFeedInteract;
    export type INewsFeedController = _INewsFeedController;
  }
}
