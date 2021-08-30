import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import LoginScreen from './src/screens/LoginScreen'
import PostScreen from './src/screens/PostScreen'
import PostDetailScreen from './src/screens/PostDetailScreen'
import { Context as DetailContext, Provider as DetailProvider } from './src/context/DetailsContext'

const Stack = createNativeStackNavigator()

const App = () => {

  const { state: detailState } = useContext(DetailContext)

  return (
    <NavigationContainer>

      <Stack.Navigator>

        { detailState.token === null ? (

          <>

            <Stack.Screen name = 'Login' component = { LoginScreen }
            options = {{
              headerShown: false
            }}/>

          </>
        ) : (
          <>

            <Stack.Screen name = 'Post' component = { PostScreen }
            options = {{
              title: 'Posts'
            }}/>

            <Stack.Screen name = 'PostDetail' component = { PostDetailScreen }
            options = {{
              title: 'Post Detail'
            }}/>

          </>
        ) }

      </Stack.Navigator>

    </NavigationContainer>
  )

}

export default () => {
  
  return (
    <DetailProvider>

      <App/>

    </DetailProvider>
  )
  
}
