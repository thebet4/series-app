import { SeriesStackNavigatorParamsList } from '@Navigation/types'
import RatingContainer from '@components/molecules/RatingContainer'
import Header from '@containers/Header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Colors from '@theme/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Dimensions } from 'react-native'
import RenderHTML from 'react-native-render-html'

import { Background, Container, Content, EpisodeName, LabelText } from './styles'

const SeriesEpisodeDetailsScreen = ({
  navigation,
  route
}: NativeStackScreenProps<SeriesStackNavigatorParamsList, 'SeriesEpisodeDetailsScreen'>) => {
  return (
    <Container>
      <Background source={{ uri: route.params.episode?.image?.original }}>
        <Header onBackButtonPress={() => navigation.pop()} />
        <LinearGradient
          colors={[Colors.Secondary.Dark, '#0000']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'flex-end',
            padding: 24
          }}
        >
          <EpisodeName>
            Episode {route.params.episode.number} - {route.params.episode.name}{' '}
          </EpisodeName>
        </LinearGradient>
      </Background>
      <Content>
        <LabelText>{route.params.seassonName}</LabelText>
        <RatingContainer average={route.params.episode.rating.average} />

        <RenderHTML
          source={{ html: route.params.episode.summary }}
          contentWidth={Dimensions.get('screen').width - 48}
          baseStyle={{
            color: Colors.Base.Lightest
          }}
        />
      </Content>
    </Container>
  )
}

export default SeriesEpisodeDetailsScreen
