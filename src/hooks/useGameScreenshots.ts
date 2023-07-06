import { useQuery } from "@tanstack/react-query"

import { GameScreenshots } from "../entities/GameScreenshots"
import APIClient from "../services/api-client"

const useGameScreenshots = (id: number) => {
  const apiClient = new APIClient<GameScreenshots>(`/games/${id}/screenshots`)
  return useQuery({
    queryKey: ['gameScreenshots', id],
    queryFn: apiClient.getAll
  })
}

export default useGameScreenshots;