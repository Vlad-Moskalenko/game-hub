import { useQuery } from "@tanstack/react-query";
import ms from 'ms';

import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>('/games')

const useGameDetails = (slug: string) => useQuery({
  queryKey: ['gameDetails', slug],
  queryFn: () => apiClient.getGameDetails(slug),
  staleTime: ms('24h'),
})

export default useGameDetails;