import axios from 'axios'

export const rssFetch = axios.create({
  baseURL: 'http://localhost:3000/api/rss/',
})
