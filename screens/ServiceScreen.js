// screens/ServicesScreen.js
import React from 'react';
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity, Linking, ImageBackground } from 'react-native';

const ServicesScreen = () => {
  const openWebsite = () => {
    Linking.openURL('https://designdart.site');
  };

  return (
    <ImageBackground 
      source={require('../assets/banner.jpg')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require('../assets/dd.jpg')} style={styles.logo} />
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.header}>Our Services</Text>
          <Text style={styles.paragraph}>
            We provide exceptional freelancing services in design and web development. Our team is dedicated to delivering high-quality solutions tailored to your needs.
          </Text>

          <View style={styles.serviceSection}>
            <Text style={styles.subHeader}>Design Services:</Text>
            <Text style={styles.serviceItem}>- Graphic Design</Text>
            <Text style={styles.serviceItem}>- UI/UX Design</Text>
            <Text style={styles.serviceItem}>- Branding</Text>
          </View>

          <View style={styles.serviceSection}>
            <Text style={styles.subHeader}>Web Development Services:</Text>
            <Text style={styles.serviceItem}>- Frontend Development</Text>
            <Text style={styles.serviceItem}>- Backend Development</Text>
            <Text style={styles.serviceItem}>- E-commerce Solutions</Text>
          </View>

          <Text style={styles.paragraph}>
            For more information, please visit our website:
          </Text>
          
          <TouchableOpacity onPress={openWebsite} style={styles.button}>
            <Text style={styles.buttonText}>Visit Our Website</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 225, 215, 0.6)', // Semi-transparent overlay
    paddingBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 50,
  },
  logo: {
    width: 360,  
    height: 150,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  serviceSection: {
    backgroundColor: '#e7f3ff', // Light blue background for service sections
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF',
  },
  serviceItem: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
    color: '#333',
    paddingLeft: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'left',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
