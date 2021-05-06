import 'react-native-gesture-handler';

import React,{ Component } from 'react';
//import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from './src/login';
import register from './src/register'
import menu from './src/menu';
import {restuarant} from './src/restuarants'

const Stack=createStackNavigator();
class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="restuarant" headerMode='none'>
          <Stack.Screen name='restaurant' component={restuarant}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;