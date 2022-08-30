import { Router } from '@Navigation/index'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '@theme/Colors'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
      <StatusBar style='auto' backgroundColor={Colors.Secondary.Dark} hidden />
    </NavigationContainer>
  )
}
