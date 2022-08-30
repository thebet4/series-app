import { SeriesStackNavigatorParamsList } from '@Navigation/types'
import EpisodeList from '@components/organisms/EpisodesList'
import Header from '@containers/Header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { getEpisodesBySeasson } from '@services/SeriesServices'
import { getEpisodesBySeasons } from '@utils/interfaces/series'
import React from 'react'

import { Container, Content, SeassonText } from './styles'

const SeriesEpisodesScreen = ({
  navigation,
  route
}: NativeStackScreenProps<SeriesStackNavigatorParamsList, 'SeriesEpisodesScreen'>) => {
  const [episodes, setEpisodes] = React.useState<getEpisodesBySeasons[]>([])

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await getEpisodesBySeasson(route.params.seassonId)
        setEpisodes(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const onSelectEpisode = (episodeId: string) => {
    const episode = episodes.find((item) => item.id === episodeId)
    if (episode)
      navigation.navigate('SeriesEpisodeDetailsScreen', {
        episode,
        seassonName: route.params.seassonName
      })
  }

  return (
    <Container>
      <Header onBackButtonPress={() => navigation.pop()} />
      <Content>
        <SeassonText>{route.params.seassonName}</SeassonText>
        <EpisodeList data={episodes} onSelectEpisode={onSelectEpisode} />
      </Content>
    </Container>
  )
}

export default SeriesEpisodesScreen
