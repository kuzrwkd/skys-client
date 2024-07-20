import {useGetNewsfeedQuery} from '@skys-client/queries/graphql';
import {renderHook} from '@testing-library/react';
import useClientNewsFeedTable from './hooks';

jest.mock('@skys-client/queries/graphql', () => ({
  useGetNewsFeedQuery: jest.fn(),
}));

describe('useClientNewsFeedTable', () => {
  it('should provide newsfeed data', () => {
    const data = ['test data'];
    (useGetNewsfeedQuery as jest.Mock).mockReturnValue({
      data,
      isLoading: false,
    });

    const {result} = renderHook(() => useClientNewsFeedTable());

    expect(result.current.data).toEqual(data);
    expect(result.current.isLoading).toEqual(false);
  });

  it('should handle loading state', () => {
    (useGetNewsfeedQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    const {result} = renderHook(() => useClientNewsFeedTable());

    expect(result.current.isLoading).toEqual(true);
  });

  it('should handle error state', () => {
    (useGetNewsfeedQuery as jest.Mock).mockReturnValue({error: new Error()});

    const {result} = renderHook(() => useClientNewsFeedTable());

    expect(result.current.error).toBeDefined();
  });
});
