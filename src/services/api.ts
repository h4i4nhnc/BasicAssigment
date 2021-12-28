import axios from 'axios';
import { env } from './const';

const api = axios.create({
  baseURL: env.baseUrl,
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export const doGet = async (url: string) => {
  return api.get(url).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      // TODO: handle server errors
    }
  })
  .catch((error: any) => {
    // TODO: handle unexpected error
    console.log("DO FETCH ERROR", error)
  })
}

export default api;