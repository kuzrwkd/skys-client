import type {GetNewsfeedQuery} from '@skys-client/querys/graphql';

export default function useClientNewsFeedTable() {
  const isTitleProperty = (title: any): title is string =>
    typeof title === 'string';

  const isUrlProperty = (url: any): url is string => typeof url === 'string';

  const isMediaProperty = (
    media: any,
  ): media is GetNewsfeedQuery['newsfeed'][number]['media'] => {
    const mediaKeys = ['id', 'name'];
    const argsKeys = Object.keys(media);
    return argsKeys.every(key => mediaKeys.includes(key));
  };

  const isCategoryProperty = (
    category: any,
  ): category is GetNewsfeedQuery['newsfeed'][number]['category'] => {
    if (!Array.isArray(category)) {
      throw new Error('Category must be an array');
    }
    return category.every(item => {
      const argsKeys = Object.keys(item);
      return argsKeys.includes('id') && argsKeys.includes('name');
    });
  };

  const isNewsfeedRecord = (
    record: any,
  ): record is GetNewsfeedQuery['newsfeed'][number] => {
    const newsfeedKeys = [
      'id',
      'title',
      'url',
      'last_publish_date',
      'media',
      'category',
    ];
    const argsKeys = Object.keys(record);
    return newsfeedKeys.every(key => argsKeys.includes(key));
  };

  return {
    isTitleProperty,
    isUrlProperty,
    isMediaProperty,
    isCategoryProperty,
    isNewsfeedRecord,
  };
}
