import { HelloGetResponse as GetResponse } from '@/redux/Http/hello/types'
export type HelloGetResponse = GetResponse

export type HelloState = {
  getResponse: HelloGetResponse
}
