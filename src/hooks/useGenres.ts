import {useQuery} from '@tanstack/react-query'
import APIClient, { FetchResponse } from "../services/api-client";

import genres from '../data/genres';

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery<FetchResponse<Genre>>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000, //24h
    initialData: {count: genres.length, results: genres}
  })

export default useGenres;