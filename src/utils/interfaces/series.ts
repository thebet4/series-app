export type GetSeriesResponse = {
  id: string
  summary: string
  name: string
  genres: string[]
  status: string
  rating: {
    average: string
  }
  image?: {
    medium?: string
    original?: string
  }
  schedule?: {
    time?: string
    days?: string[]
  }
}

export type GetSeriesByNameResponse = {
  show?: {
    id: string
    summary: string
    name: string
    genres: string[]
    status: string
    rating: {
      average: string
    }
    image?: {
      medium?: string
      original?: string
    }
    schedule?: {
      time?: string
      days?: string[]
    }
  }
}

export type getSeriesSeasonsResponse = {
  id: string
  number: string
  episodeOrder: string
  premiereDate: string
  endDate: string
  image?: {
    medium: string
    original: string
  }
}

export type getEpisodesBySeasons = {
  id: string
  name: string
  number: string
  rating: {
    average: string
  }
  image: {
    medium: string
    original: string
  }
  summary: string
}
