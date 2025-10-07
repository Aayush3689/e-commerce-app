import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images } from '@assets/images';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={Images.logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 350,
    resizeMode: 'contain'
  }
});
