// components/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Design Dart - All rights reserved.</Text>
      <Text style={styles.text}>Visit us at: designdart.site</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default Footer;
