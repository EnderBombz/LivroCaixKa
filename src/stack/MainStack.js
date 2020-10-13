import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import MainTab from './MainTab'
import CadastroCard from '../screens/CadastroCard/index'

const Stack = createStackNavigator()

export default ()=>{
  return (
    <Stack.Navigator initialRouteName="MainTab" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="MainTab" component={MainTab}/>
         <Stack.Screen name="CadastroCard" component={CadastroCard}/>
    </Stack.Navigator>
  );
}
