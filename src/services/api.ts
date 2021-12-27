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
      // handle server errors
    }
  })
  .catch((error: any) => {
    // handle error
    console.log("DO FETCH ERROR", error)
  })
}

export default api;