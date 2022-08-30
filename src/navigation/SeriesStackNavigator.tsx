import { SeriesStackNavigatorParamsList } from '@Navigation/types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  SeriesDetailsScreen,
  SeriesEpisodeDetailsScreen,
  SeriesEpisodesScreen,
  SeriesSearchScreen
} from '@screens/SeriesStack'
import React from 'react'

const SeriesStackNavigator = () => {
  const Stack = createNativeStackNavigator<SeriesStackNavigatorParamsList>()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name='SeriesSearchScreen' component={SeriesSearchScreen} />
      <Stack.Screen name='SeriesDetailsScreen' component={SeriesDetailsScreen} />
      <Stack.Screen name='SeriesEpisodesScreen' component={SeriesEpisodesScreen} />
      <Stack.Screen
        name='SeriesEpisodeDetailsScreen'
        component={SeriesEpisodeDetailsScreen}
        options={{ animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  )
}

export default SeriesStackNavigator
