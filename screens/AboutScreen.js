// screens/AboutUsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import Footer from './Footer';

const AboutUsScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/banner.jpg')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/silo.jpg')} style={styles.logo} />
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.paragraph}>
          We are a team of passionate developers dedicated to building innovative solutions. Our mission is to create applications that enhance user experience and make lives easier.
        </Text>
        <Text style={styles.paragraph}>
          Our team members bring a diverse set of skills and experiences to the table, ensuring that we approach challenges from multiple angles. We believe in collaboration and continuous learning.
        </Text>
        <Text style={styles.paragraph}>
          Thank you for visiting our application! If you have any questions or feedback, feel free to reach out to us.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Our Mission:</Text> To deliver exceptional web services that drive success and growth for our clients through innovation, dedication, and collaboration.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Our Vision:</Text> To be a leading provider of web solutions, recognized for our creativity, quality, and client satisfaction. Connect with us to learn more about how we can help you achieve your digital goals!
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Contact Information:</Text> Feel free to reach out to us through our LinkedIn page or via email at silowebservices@gmail.com. Let's build something great together!
        </Text>
        <Footer />
      </ScrollView>
    </ImageBackground>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'rgba(230, 225, 215, 0.6)', // Semi-transparent overlay
    alignItems: 'center',
  },
  logo: {
    width: 150,  // Adjust width as needed
    height: 150,
    borderRadius: 100, // Circular logo
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold', // Style for bold text
  },
});
