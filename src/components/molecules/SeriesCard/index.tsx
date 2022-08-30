import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

import RatingContainer from '../RatingContainer'
import { Container, TouchableArea, TitleText } from './styles'

type SeriesCardProps = {
  id: string
  image: string
  title: string
  average: string
  onSelect: (serieId: string) => void
}

const SeriesCard = ({ id, average, image, title, onSelect }: SeriesCardProps) => {
  return (
    <TouchableArea onPress={() => onSelect(id)}>
      <Container
        source={{
          uri: image
        }}
      >
        <LinearGradient
          colors={['#000', '#0000']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingBottom: 32,
            borderBottomLeftRadius: 48,
            borderBottomRightRadius: 48,
            justifyContent: 'flex-end'
          }}
        >
          <TitleText>{title}</TitleText>
          {average && <RatingContainer average={average} />}
        </LinearGradient>
      </Container>
    </TouchableArea>
  )
}

export default SeriesCard
