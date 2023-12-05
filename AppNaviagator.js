// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from './screens/HomeSreen';
import LoginScreen from './screens/LoginScreen';
import OnBoarding from './screens/OnboardingScreen';
import CommentsSection from './screens/Comments';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="OnBoard" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeSreen} options={{ headerShown: false }} />
        <Stack.Screen name="Comments" component={CommentsSection} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;