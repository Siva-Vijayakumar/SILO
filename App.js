import * as React from 'react';
import 'whatwg-fetch';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import MediaScreen from './screens/MediaScreen'; 
import ServicesScreen from './screens/ServiceScreen'; 
import SplashScreen from './screens/SplashScreen'; // Import the SplashScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hide header for SplashScreen
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Welcome to SILO' }} 
        />
        <Stack.Screen 
          name="About Us" 
          component={AboutUsScreen} 
          options={{ title: 'About Us' }} 
        />
        <Stack.Screen 
          name="Projects" 
          component={ProjectsScreen} 
          options={{ title: 'Our Projects' }} 
        />
        <Stack.Screen 
          name="Media" 
          component={MediaScreen} 
          options={{ title: 'Our Media' }} 
        />
        <Stack.Screen 
          name="Service" 
          component={ServicesScreen} 
          options={{ title: 'Our Services' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
