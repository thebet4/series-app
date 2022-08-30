import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

import { Container, SeassonText, TouchableArea } from './styles'

type SeriesSeassonCardProps = {
  image?: string
  seassonId: string
  seassonNumber: string
  onSelectSeasson: (seassonId: string, seassonName: string) => void
}

const SeriesSeassonCard = ({
  image,
  seassonNumber,
  seassonId,
  onSelectSeasson
}: SeriesSeassonCardProps) => {
  return (
    <TouchableArea onPress={() => onSelectSeasson(seassonId, `Seasson ${seassonNumber}`)}>
      <Container source={{ uri: image }}>
        <LinearGradient
          colors={['#000', '#0000']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'flex-end',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            padding: 12
          }}
        >
          <SeassonText>Seasson {seassonNumber}</SeassonText>
        </LinearGradient>
      </Container>
    </TouchableArea>
  )
}

export default SeriesSeassonCard
