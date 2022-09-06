import { FavoriteSeriesStackNavigatorParamsList } from '@Navigation/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FavoriteSeriesScreen } from '@screens/FavoriteSeriesStack'
import { SeriesDetailsScreen } from '@screens/SeriesStack'
import React from 'react'

const FavoriteSeriesStackNavigator = () => {
  const Stack = createNativeStackNavigator<FavoriteSeriesStackNavigatorParamsList>()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name='FavoriteSeriesScreen' component={FavoriteSeriesScreen} />
      <Stack.Screen name='SeriesDetailsScreen' component={SeriesDetailsScreen} />
    </Stack.Navigator>
  )
}

export default FavoriteSeriesStackNavigator
