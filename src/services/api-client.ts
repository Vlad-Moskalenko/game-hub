import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '47b3ab537dbd42dd87cb0c886fdefa7d',
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
