import {NewsfeedSchema, MediaSchema, CategorySchema} from '@kuzrwkd/skys-core/entities';

export type GetNewsFeedQueryResponse = {
  newsfeed: Omit<
    NewsfeedSchema & {
      media: Omit<MediaSchema, 'media_id'>;
      category: Omit<CategorySchema, 'category_id'>;
    },
    'media_id'
  >[];
};
