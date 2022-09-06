import { FavoriteSeriesStackNavigatorParamsList } from '@Navigation/types'
import SeriesList from '@components/organisms/SeriesList'
import { useIsFocused } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useFavoriteSeriesStore } from '@store/useFavoriteSeriesStore'
import { GetSeriesResponse } from '@utils/interfaces/series'
import React from 'react'

import { Container, Content } from './styles'

const FavoriteSeriesScreen = ({
  navigation,
  route
}: NativeStackScreenProps<FavoriteSeriesStackNavigatorParamsList, 'FavoriteSeriesScreen'>) => {
  const { favoriteSeries } = useFavoriteSeriesStore()
  const [favoriteSeriesList, setFavoriteSeriesList] = React.useState<GetSeriesResponse[]>([])
  const isFocused = useIsFocused()

  React.useEffect(() => {
    const orderedSeries = favoriteSeries.sort((a, b) => a.seriesName.localeCompare(b.seriesName))
    const formattedSeries: GetSeriesResponse[] = []
    orderedSeries.forEach((series) => {
      formattedSeries.push({
        id: series.seriesId,
        summary: series.summary,
        name: series.seriesName,
        genres: series.genres,
        status: series.status,
        rating: {
          average: series.average
        },
        image: {
          medium: series?.image,
          original: series?.image
        },
        schedule: series?.scheduler
      })
    })
    setFavoriteSeriesList(formattedSeries)
  }, [isFocused])

  const handleSelectSerie = (serieId: string) => {
    const serie = favoriteSeries.find((item) => {
      return item.seriesId === serieId
    })

    if (serie) {
      navigation.navigate('SeriesDetailsScreen', {
        seriesId: serieId,
        image: serie.image,
        seriesName: serie.seriesName,
        summary: serie.summary,
        average: serie.average,
        genres: serie.genres,
        scheduler: serie.scheduler,
        status: serie?.status
      })
    }
  }

  return (
    <Container>
      <Content>
        <SeriesList
          data={favoriteSeriesList}
          onLoadMore={() => {}}
          onRefresh={() => {}}
          onSelect={handleSelectSerie}
        />
      </Content>
    </Container>
  )
}

export default FavoriteSeriesScreen
