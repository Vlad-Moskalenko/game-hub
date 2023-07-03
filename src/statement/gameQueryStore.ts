import { create } from "zustand";
import {mountStoreDevtool} from 'simple-zustand-devtools'

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

export const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: searchText => set(()=> ({gameQuery: {searchText}})),
  setGenreId: genreId => set(state=> ({gameQuery: {...state.gameQuery, genreId}})),
  setPlatformId: platformId => set(state => ({gameQuery: {...state.gameQuery, platformId}})),
  setSortOrder: sortOrder => set(state=> ({gameQuery: {...state.gameQuery, sortOrder}}))
}))

if(process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GameQueryStore', useGameQueryStore)
}