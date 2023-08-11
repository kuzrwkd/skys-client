import {NewsfeedSchema, MediaSchema} from '@kuzrwkd/skys-core/entities';

export type GetNewsFeedQueryResponse = Omit<NewsfeedSchema, 'media_id'> & {
  media: Omit<MediaSchema, 'media_id'>;
};
