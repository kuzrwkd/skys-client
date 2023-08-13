import {NewsfeedSchema, MediaSchema} from '@kuzrwkd/skys-core/entities';

export type GetNewsFeedQueryResponse = {
  newsfeed: Omit<
    NewsfeedSchema & {
      media: Omit<MediaSchema, 'media_id'>;
    },
    'media_id'
  >[];
};
