/**
 * Lib
 */
import axios from 'axios';

/**
 * Axios Instance
 */
const $axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL,
});

/**
 * Request Interceptors
 */
$axios.interceptors.request.use(
  (req: Lib.AxiosRequestConfig) => {
    return req;
  },
  (error: Lib.AxiosError) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

/**
 * Response Interceptors
 */
$axios.interceptors.response.use(
  (res: Lib.AxiosResponse) => {
    return res;
  },
  (error: Lib.AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default $axios;
