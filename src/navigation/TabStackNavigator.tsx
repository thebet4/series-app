import { TabStackNavigatorParamsList } from '@Navigation/types'
import TabBar from '@containers/TabBar'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import FavoriteSeriesStackNavigator from './FavoriteSeriesStackNavigator'
import SeriesStackNavigator from './SeriesStackNavigator'

const TabBarContent = (props: BottomTabBarProps) => <TabBar {...props} />

const TabStackNavigator = () => {
  const Tab = createBottomTabNavigator<TabStackNavigatorParamsList>()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={TabBarContent}
    >
      <Tab.Screen name='SeriesStackNavigator' component={SeriesStackNavigator} />
      <Tab.Screen name='FavoriteSeriesStackNavigator' component={FavoriteSeriesStackNavigator} />
    </Tab.Navigator>
  )
}

export default TabStackNavigator
