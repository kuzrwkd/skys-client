import type {GetNewsfeedQuery} from '@skys-client/queries/graphql';

export type Newsfeed = GetNewsfeedQuery;

export type NewsfeedRecord = Newsfeed['newsfeed'][number];
