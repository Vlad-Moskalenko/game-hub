import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import {useGameQueryStore} from '../statement/gameQueryStore'

import APIClient, {FetchResponse} from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Game>('/games')
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}

const useGames = () => {
  const gameQuery = useGameQueryStore(state => state.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime: ms('24h')
})
}

export default useGames;
