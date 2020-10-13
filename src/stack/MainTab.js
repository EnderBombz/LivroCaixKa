import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Compras from '../screens/Compras'
import Pedidos from '../screens/Pedidos'
import Relatorio from '../screens/Relatorio'
import CadastroCard from '../screens/CadastroCard'
import CustomTabBar from '../components/CustomTabBar'


const Tab = createMaterialBottomTabNavigator()

export default () => {
    return (
        
            <Tab.Navigator
                initialRouteName="Compras"
                barStyle={{ backgroundColor: '#6A1434' }}
                activeColor="#f0edf6"
                inactiveColor="#3D0B1F"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Compras') {
                            iconName = focused ? 'md-wallet' : 'md-wallet';
                        } else if (route.name === 'Pedidos') {
                            iconName = focused ? 'md-bookmark' : 'md-bookmark';
                        } else if (route.name === 'Relatorio') {
                            iconName = focused ? 'md-clipboard' : 'md-clipboard';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={24} color={color} />;
                    },
                })}
                
            >
                <Tab.Screen name="Compras" component={Compras} />
                <Tab.Screen name="Pedidos" component={Pedidos} />
                <Tab.Screen name="Relatorio" component={Relatorio} />
                
            </Tab.Navigator>
        
    );
}
