// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icons

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/banner.jpg')} // Set your banner image as the background
      style={styles.background} // Apply styles to the background
      resizeMode="cover" // Ensures the image covers the entire area
    >
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image source={require('../assets/silo.jpg')} style={styles.logo} />
          <Text style={styles.appName}>SILO</Text>
        </View>

        {/* Quote Section */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "The best way to predict the future is to create it."
          </Text>
        </View>

        {/* Call to Action Button Above Features */}
        <TouchableOpacity 
          style={styles.ctaButton} 
          onPress={() => navigation.navigate('Service')}
        >
          <Text style={styles.ctaButtonText}>Discover Our Services</Text>
        </TouchableOpacity>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Our Features</Text>
          <View style={styles.features}>
            <View style={styles.featureItem}>
              <Icon name="checkmark-circle-outline" size={40} color="#4a90e2" />
              <Text style={styles.featureText}>Quality Services</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="star-outline" size={40} color="#4a90e2" />
              <Text style={styles.featureText}>Customer Satisfaction</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="time-outline" size={40} color="#4a90e2" />
              <Text style={styles.featureText}>Timely Delivery</Text>
            </View>
          </View>
        </View>
        
      </ScrollView>

      {/* Footer - Static Position */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('About Us')} style={styles.footerItem}>
          <Icon name="information-circle-outline" size={28} color="white" />
          <Text style={styles.footerText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Projects')} style={styles.footerItem}>
          <Icon name="briefcase-outline" size={28} color="white" />
          <Text style={styles.footerText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Media')} style={styles.footerItem}>
          <Icon name="people-outline" size={28} color="white" />
          <Text style={styles.footerText}>Media</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Service')} style={styles.footerItem}>
          <Icon name="laptop" size={28} color="white" />
          <Text style={styles.footerText}>Our Service</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

// Add styling
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 225, 215, 0.6)', // Semi-transparent background for better text visibility
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4a90e2',
    marginBottom: 10,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginTop: 10,
  },
  quoteContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#e7f3ff',
    borderRadius: 10,
    padding: 15,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
  featuresContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  featuresTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 10,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  featureText: {
    textAlign: 'center',
    color: '#333',
  },
  ctaButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});
