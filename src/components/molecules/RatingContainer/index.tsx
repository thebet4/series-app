import Colors from '@theme/Colors'
import { RatingIcon } from '@theme/Svgs'
import React from 'react'

import { Container, AverageText } from './styles'

type IRatingContianerProps = {
  average: string
}

const RatingContainer = ({ average }: IRatingContianerProps) => {
  return (
    <Container>
      {average && (
        <>
          <RatingIcon width={24} height={24} color={Colors.Primary.Normal} />
          <AverageText>{average}</AverageText>
        </>
      )}
    </Container>
  )
}

export default RatingContainer
