import { IconButton } from '@components/atoms'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Colors from '@theme/Colors'
import { FavoriteIcon, SearchIcon } from '@theme/Svgs'
import React from 'react'

import { Container, Wrapper } from './styles'

const TabBar = ({ navigation, state }: BottomTabBarProps) => {
  const getIconByRouteName = (routeName: string) => {
    switch (routeName) {
      case 'SeriesStackNavigator':
        return SearchIcon

      case 'FavoriteSeriesStackNavigator':
        return FavoriteIcon

      default:
        return SearchIcon
    }
  }

  return (
    <Wrapper>
      <Container>
        {state.routes.map((route, index) => {
          const isSelected = state.index === index
          return (
            <IconButton
              key={route.name}
              onPress={() => navigation.navigate(route.name, route.params)}
              Icon={{
                color: isSelected ? Colors.Base.Lightest : Colors.Secondary.Light,
                height: 32,
                width: 32,
                IconComponent: getIconByRouteName(route.name)
              }}
              style={{
                backgroundColor: isSelected ? Colors.Primary.Light : Colors.Secondary.Normal,
                paddingHorizontal: 24,
                borderRadius: 24
              }}
            />
          )
        })}
      </Container>
    </Wrapper>
  )
}

export default TabBar
