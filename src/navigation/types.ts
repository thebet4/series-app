import { NavigatorScreenParams } from '@react-navigation/native'
import { getEpisodesBySeasons } from '@utils/interfaces/series'

export type TabStackNavigatorParamsList = {
  SeriesStackNavigator: {
    screen: keyof SeriesStackNavigatorParamsList
  }
  FavoriteSeriesStackNavigator: {
    screen: keyof FavoriteSeriesStackNavigatorParamsList
  }
}

export type SeriesStackNavigatorParamsList = {
  SeriesSearchScreen: undefined
  SeriesDetailsScreen: {
    seriesId: string
    seriesName: string
    image?: string
    summary: string
    genres: string[]
    average: string
    scheduler?: {
      time?: string
      days?: string[]
    }
    status: string
  }
  SeriesEpisodesScreen: {
    seassonId: string
    seassonName: string
  }
  SeriesEpisodeDetailsScreen: {
    episode: getEpisodesBySeasons
    seassonName: string
  }
}

export type FavoriteSeriesStackNavigatorParamsList = {
  FavoriteSeriesScreen: undefined
  SeriesDetailsScreen: {
    seriesId: string
    seriesName: string
    image?: string
    summary: string
    genres: string[]
    average: string
    scheduler?: {
      time?: string
      days?: string[]
    }
    status: string
  }
}
