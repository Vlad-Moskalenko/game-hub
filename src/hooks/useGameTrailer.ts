import { useQuery } from "@tanstack/react-query";

import { GameTrailer } from "../entities/GameTrailer";
import APIClient from "../services/api-client";
import ms from "ms";

const useGameTrailer = (id:number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${id}/movies`)

  return useQuery({
  queryKey: ['gameTrailer', id],
  queryFn: apiClient.getAll,
  staleTime: ms('24h')
})
}

export default useGameTrailer;