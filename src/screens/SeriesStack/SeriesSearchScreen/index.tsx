import { SeriesStackNavigatorParamsList } from '@Navigation/types'
import SeriesList from '@components/organisms/SeriesList'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { getSeries, getSeriesByName } from '@services/SeriesServices'
import { GetSeriesResponse } from '@utils/interfaces/series'
import React from 'react'

import Header from './components/header'
import { Container, Content } from './styles'

const SeriesSearchScreen = ({
  navigation
}: NativeStackScreenProps<SeriesStackNavigatorParamsList, 'SeriesSearchScreen'>) => {
  const [series, setSeries] = React.useState<GetSeriesResponse[]>([])
  const [page, setPage] = React.useState(0)
  const [textToSearch, setTextToSearch] = React.useState('')

  React.useEffect(() => {
    ;(async () => {
      try {
        const seriesResponse = await getSeries(page)
        setSeries(seriesResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const handleSelectSerie = (serieId: string) => {
    const serie = series.find((item) => {
      return item.id === serieId
    })

    if (serie) {
      navigation.navigate('SeriesDetailsScreen', {
        seriesId: serieId,
        image: serie.image?.original,
        seriesName: serie.name,
        summary: serie.summary,
        average: serie.rating.average,
        genres: serie.genres,
        scheduler: serie?.schedule,
        status: serie?.status
      })
    }
  }

  const onSearch = async (textToSearch: string) => {
    if (textToSearch) {
      try {
        setTextToSearch(textToSearch)
        const seriesResponse = await getSeriesByName(textToSearch)
        setSeries(seriesResponse)
        setPage(0)
      } catch (error) {
        console.error(error)
      }
    } else {
      onRefresh()
    }
  }

  const onLoadMore = async () => {
    if (textToSearch) return
    try {
      const seriesResponse = await getSeries(page + 1)
      setPage(page + 1)
      setSeries([...series, ...seriesResponse])
    } catch (error) {
      console.error(error)
    }
  }

  const onRefresh = async () => {
    try {
      setPage(0)
      const seriesResponse = await getSeries(0)
      setSeries(seriesResponse)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Header onSearch={onSearch} placeHolder='Type Something' />
      <Content>
        <SeriesList
          data={series}
          onLoadMore={onLoadMore}
          onRefresh={onRefresh}
          onSelect={handleSelectSerie}
        />
      </Content>
    </Container>
  )
}

export default SeriesSearchScreen
