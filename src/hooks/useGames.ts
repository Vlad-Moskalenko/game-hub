import { useInfiniteQuery } from "@tanstack/react-query";
import {useGameQueryStore} from '../statement/gameQueryStore'
import ms from "ms";

import APIClient, {FetchResponse} from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games')
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
