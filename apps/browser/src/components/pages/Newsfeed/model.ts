import type {GetNewsfeedQuery} from '@skys-client/querys/graphql';

export type Newsfeed = GetNewsfeedQuery;

export type NewsfeedRecord = Newsfeed['newsfeed'][number];
