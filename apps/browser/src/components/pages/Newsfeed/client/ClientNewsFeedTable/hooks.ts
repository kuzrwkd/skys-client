import type {NewsfeedRecord} from '@/components/pages/Newsfeed/model';
import {useGetNewsfeedQuery} from '@/redux/services/skysApi';

const isTitleProperty = (title: unknown): title is string =>
  typeof title === 'string';

const isUrlProperty = (url: unknown): url is string => typeof url === 'string';

const isMediaProperty = (media: unknown): media is NewsfeedRecord['media'] => {
  const mediaKeys = ['id', 'name'];
  if (!Array.isArray(media)) {
    return false;
  }
  const argsKeys = Object.keys(media);
  return argsKeys.every(key => mediaKeys.includes(key));
};

const isCategoryProperty = (
  category: unknown,
): category is NewsfeedRecord['category'] => {
  if (!Array.isArray(category)) {
    throw new Error('Category must be an array');
  }
  return category.every(item => {
    const argsKeys = Object.keys(item);
    return argsKeys.includes('id') && argsKeys.includes('name');
  });
};

const isNewsfeedRecord = (record: unknown): record is NewsfeedRecord => {
  const newsfeedKeys = [
    'id',
    'title',
    'url',
    'last_publish_date',
    'media',
    'category',
  ];
  if (!Array.isArray(record)) {
    return false;
  }
  const argsKeys = Object.keys(record);
  return newsfeedKeys.every(key => argsKeys.includes(key));
};

export default function useClientNewsFeedTable() {
  const {data, isLoading} = useGetNewsfeedQuery();

  return {
    isLoading,
    data,
    isTitleProperty,
    isUrlProperty,
    isMediaProperty,
    isCategoryProperty,
    isNewsfeedRecord,
  };
}
