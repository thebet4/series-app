import { getEpisodesBySeasons } from '@utils/interfaces/series'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

import { Container, EpisodeNameText, EpisodeNumber, TouchableArea } from './styles'

type EpisodeCardProps = {
  episode: getEpisodesBySeasons
  onSelectEpisode: (episodeId: string) => void
}

const EpisodeCard = ({ episode, onSelectEpisode }: EpisodeCardProps) => {
  return (
    <TouchableArea onPress={() => onSelectEpisode(episode.id)}>
      <Container source={{ uri: episode?.image?.medium }}>
        <LinearGradient
          colors={['#000', '#0000']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingBottom: 32,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            justifyContent: 'flex-end'
          }}
        >
          {episode?.number && <EpisodeNumber>Episode {episode.number}</EpisodeNumber>}
          {episode?.name && <EpisodeNameText>{episode.name}</EpisodeNameText>}
        </LinearGradient>
      </Container>
    </TouchableArea>
  )
}

export default EpisodeCard
