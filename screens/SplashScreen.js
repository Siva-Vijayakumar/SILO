// screens/SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity of 0

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade out
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to Home screen after animation ends
      navigation.replace('Home');
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require('../assets/silo.jpg')} // Add your logo here
          style={styles.logo}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius:100,
  },
});
