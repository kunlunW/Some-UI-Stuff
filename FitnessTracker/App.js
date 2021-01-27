import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StyleSheet, Text, View } from 'react-native';

import Authentication from './Authentication'
import UserInfo from './UserInfo'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
  
        <Stack.Screen name='Fitness Tracker' component={Authentication} />
        
        <Stack.Screen name='UserInfo' component={UserInfo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Notification({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}