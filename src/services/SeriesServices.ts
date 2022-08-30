import {
  getEpisodesBySeasons,
  GetSeriesByNameResponse,
  GetSeriesResponse,
  getSeriesSeasonsResponse
} from '@utils/interfaces/series'

import axios from './config'
import {
  GET_SERIES,
  GET_EPISODES_BY_SEASONS,
  GET_SERIES_SEASONS,
  GET_SERIES_BY_NAME
} from './config/constants'

export const getSeries = async (page = 0) => {
  const { data } = await axios.get<GetSeriesResponse[]>(GET_SERIES(page))
  if (!data) throw new Error('Can not get data from getSeries!')
  return data
}

export const getSeriesByName = async (seriesName: string) => {
  const { data } = await axios.get<GetSeriesByNameResponse[]>(GET_SERIES_BY_NAME(seriesName))
  if (!data) throw new Error('Can not get data from getSeries!')

  const formattedSeriesArray: GetSeriesResponse[] = []
  data.map((series) => {
    if (series.show) {
      formattedSeriesArray.push(series.show)
    }
  })
  return formattedSeriesArray
}

export const getSeriesSeasons = async (seriesId: string) => {
  const { data } = await axios.get<getSeriesSeasonsResponse[]>(GET_SERIES_SEASONS(seriesId))
  if (!data) throw new Error('Can not get data from getSeries!')
  return data
}

export const getEpisodesBySeasson = async (seassonId: string) => {
  const { data } = await axios.get<getEpisodesBySeasons[]>(GET_EPISODES_BY_SEASONS(seassonId))
  if (!data) throw new Error('Can not get data from getSeries!')
  return data
}
