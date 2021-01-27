import React from 'react';
import LoginPage from './LoginPage'
import Register from './Register'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function Authentication() {
    return (
        <Stack.Navigator >
            <Stack.Screen name='LoginPage' component={LoginPage} />
            <Stack.Screen name='Register' component={Register} />

        </Stack.Navigator>
    );
}