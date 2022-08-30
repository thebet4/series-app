import { SeriesStackNavigatorParamsList } from '@Navigation/types'
import RatingContainer from '@components/molecules/RatingContainer'
import SeriesDescription from '@components/molecules/SeriesDescription'
import SeriesScheduler from '@components/molecules/SeriesScheduler'
import SeriesSeasonsList from '@components/organisms/SeriesSeasonsList'
import Header from '@containers/Header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { getSeriesSeasons } from '@services/SeriesServices'
import { useFavoriteSeriesStore } from '@store/useFavoriteSeriesStore'
import Colors from '@theme/Colors'
import { getSeriesSeasonsResponse } from '@utils/interfaces/series'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Dimensions } from 'react-native'
import RenderHtml from 'react-native-render-html'

import { Container, Content, HeaderImage, LabelText, TitleText } from './styles'

const SeriesDetailsScreen = ({
  navigation,
  route
}: NativeStackScreenProps<SeriesStackNavigatorParamsList, 'SeriesDetailsScreen'>) => {
  const [seasons, setSeasons] = React.useState<getSeriesSeasonsResponse[]>([])
  const { favoriteSeries, setState: setFavoriteSeries } = useFavoriteSeriesStore()

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await getSeriesSeasons(route.params.seriesId)
        setSeasons(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const onSetFavorite = () => {
    const series = favoriteSeries
    series.push({
      genres: route.params.genres,
      seriesId: route.params.seriesId,
      image: route.params.image,
      seriesName: route.params.seriesName,
      average: route.params.average,
      scheduler: route.params.scheduler,
      status: route.params.status,
      summary: route.params.summary
    })
    setFavoriteSeries({
      favoriteSeries: series
    })
  }

  const onRemoveFavorite = () => {
    const series = favoriteSeries.filter((item) => item.seriesId !== route.params.seriesId)
    setFavoriteSeries({
      favoriteSeries: series
    })
  }

  const onSelectSeasson = (seassonId: string, seassonName: string) =>
    navigation.navigate('SeriesEpisodesScreen', { seassonId, seassonName })

  return (
    <Container>
      <HeaderImage
        source={{
          uri: route.params.image
        }}
      >
        <Header
          onBackButtonPress={() => navigation.pop()}
          hasFavoriteButtom
          onSetFavorite={onSetFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={!!favoriteSeries.find((item) => item.seriesId === route.params.seriesId)}
        />
        <LinearGradient
          colors={[Colors.Secondary.Dark, '#0000']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'flex-end'
          }}
        >
          <TitleText>{route.params.seriesName}</TitleText>
        </LinearGradient>
      </HeaderImage>

      <Content>
        <LabelText>Description</LabelText>

        <SeriesDescription categories={route.params.genres} />

        <SeriesScheduler scheduler={route.params.scheduler} status={route.params.status} />

        <LabelText>
          Overview <RatingContainer average={route.params.average} />
        </LabelText>
        <RenderHtml
          source={{
            html: route.params.summary
          }}
          contentWidth={Dimensions.get('screen').width - 48}
          baseStyle={{
            color: Colors.Secondary.Light
          }}
        />

        <LabelText>Seasons</LabelText>
        <SeriesSeasonsList data={seasons} onSelectSeasson={onSelectSeasson} />
      </Content>
    </Container>
  )
}

export default SeriesDetailsScreen
