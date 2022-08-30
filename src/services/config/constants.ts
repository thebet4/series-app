const BASEURL = 'https://api.tvmaze.com'

export const GET_SERIES = (page: number) => {
  return `${BASEURL}/shows?page=${page}`
}

export const GET_SERIES_BY_NAME = (seriesName: string) => `${BASEURL}/search/shows?q=${seriesName}`

export const GET_SERIES_SEASONS = (seriesId: string) => {
  return `https://api.tvmaze.com/shows/${seriesId}/seasons`
}

export const GET_EPISODES_BY_SEASONS = (seassonId: string) =>
  `https://api.tvmaze.com/seasons/${seassonId}/episodes`
