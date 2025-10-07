import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartNavigation from '@navigations/StartNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StartNavigation />
    </NavigationContainer>
  );
};

export default App;
