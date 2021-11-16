import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorsScreen from './screens/Meteors';

const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <stack.Screen name="Home" component={HomeScreen} />

        <stack.Screen name="IssLocation" component={IssLocationScreen} />

        <stack.Screen name="Meteors" component={MeteorsScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
