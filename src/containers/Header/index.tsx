import { IconButton } from '@components/atoms'
import Colors from '@theme/Colors'
import { BackIcon, FavoriteIcon } from '@theme/Svgs'
import React from 'react'

import { Container } from './styles'

type HeaderProps = {
  onBackButtonPress: () => void
  onSetFavorite?: () => void
  onRemoveFavorite?: () => void
  hasFavoriteButtom?: boolean
  isFavorite?: boolean
}

const Header = ({
  onBackButtonPress,
  onRemoveFavorite,
  onSetFavorite,
  hasFavoriteButtom,
  isFavorite
}: HeaderProps) => {
  return (
    <Container>
      <IconButton
        onPress={onBackButtonPress}
        Icon={{
          color: Colors.Base.Lightest,
          height: 24,
          width: 24,
          IconComponent: BackIcon
        }}
      />

      {hasFavoriteButtom && (
        <IconButton
          onPress={isFavorite ? onRemoveFavorite : onSetFavorite}
          Icon={{
            color: isFavorite ? Colors.Primary.Normal : Colors.Base.Lightest,
            height: 32,
            width: 32,
            IconComponent: FavoriteIcon
          }}
        />
      )}
    </Container>
  )
}

export default Header
