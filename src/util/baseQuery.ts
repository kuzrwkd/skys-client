import {request, ClientError} from 'graphql-request';

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`;

export const graphqlBaseQuery =
  () =>
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
