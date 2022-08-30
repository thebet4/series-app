import React from 'react'

import { Container, DescriptionText } from './styles'

type SeriesDescriptionProps = {
  categories?: string[]
}

const SeriesDescription = ({ categories }: SeriesDescriptionProps) => {
  return (
    <Container>
      {categories &&
        categories.map((category, index) => (
          <DescriptionText key={category}>
            {category}
            {index !== categories.length - 1 ? ', ' : ''}
          </DescriptionText>
        ))}
    </Container>
  )
}

export default SeriesDescription
