import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Page from './screens/Page'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
