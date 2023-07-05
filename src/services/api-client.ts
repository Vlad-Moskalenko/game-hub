import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '47b3ab537dbd42dd87cb0c886fdefa7d',
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }

  getGameDetails = (id: string | number) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }
}

export default APIClient;
