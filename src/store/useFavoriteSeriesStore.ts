import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'

type FavoriteSeriesProps = Omit<FavoriteSeriesSetStateProps, 'setState'>
type FavoriteSeriesSetStateProps = {
  favoriteSeries: {
    seriesId: string
    seriesName: string
    image?: string
    summary: string
    genres: string[]
    average: string
    scheduler?: {
      time: string
      days: string[]
    }
    status: string
  }[]
  setState: (data: FavoriteSeriesProps) => void
}

export const useFavoriteSeriesStore = create<FavoriteSeriesSetStateProps>(
  persist(
    (set, get) => ({
      favoriteSeries: [],
      setState: (data: FavoriteSeriesProps) => set({ ...get(), ...data })
    }),
    {
      name: 'favorite-series-storage',
      version: 0,
      getStorage: () => AsyncStorage
    }
  )
)
