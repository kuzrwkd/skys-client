import {request, ClientError} from 'graphql-request';

type GraphqlBaseQueryParams = {
  baseUrl: string;
};

export const graphqlBaseQuery =
  ({baseUrl}: GraphqlBaseQueryParams) =>
  async ({body}: {body: string}) => {
    try {
      const result = await request(baseUrl, body);
      return {data: result};
    } catch (error) {
      if (error instanceof ClientError) {
        return {error: {status: error.response.status, data: error}};
      }
      return {error: {status: 500, data: error}};
    }
  };
