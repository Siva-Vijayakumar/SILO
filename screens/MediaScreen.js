// screens/MediaScreen.js
import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const MediaScreen = () => {
  // Define WhatsApp numbers and LinkedIn profiles
  const whatsappNumber1 = '8248869388'; // Replace with Person 1's WhatsApp number
  const whatsappNumber2 = '9585033519'; // Replace with Person 2's WhatsApp number
  const linkedInProfile1 = 'https://www.linkedin.com/in/siva-v-5488822a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'; // Replace with Person 1's LinkedIn
  const linkedInProfile2 = 'https://www.linkedin.com/in/lokeshcoder123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'; // Replace with Person 2's LinkedIn

  // Handler functions for links
  const handleWhatsApp1 = () => {
    Linking.openURL(`https://wa.me/${whatsappNumber1}`);
  };

  const handleWhatsApp2 = () => {
    Linking.openURL(`https://wa.me/${whatsappNumber2}`);
  };

  const handleLinkedIn1 = () => {
    Linking.openURL(linkedInProfile1);
  };

  const handleLinkedIn2 = () => {
    Linking.openURL(linkedInProfile2);
  };

  const handleEmail1 = () => {
    Linking.openURL('mailto:Sivavijayakumar1222@gmail.com');
  };

  const handleEmail2 = () => {
    Linking.openURL('mailto:lokeshcoder123@gmail.com');
  };

  return (
    <ImageBackground 
      source={require('../assets/banner.jpg')} // Set your banner image as the background
      style={styles.background} // Apply styles to the background
      resizeMode="cover" // Ensures the image covers the entire area
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Connect with Us</Text>

        {/* Person 1 */}
        <View style={styles.contactCard}>
          <Image source={require('../assets/sivaProfile.jpeg')} style={styles.contactImage} />
          <Text style={styles.contactName}>Siva V</Text>
          <TouchableOpacity onPress={handleLinkedIn1} style={styles.linkButton}>
            <Text style={styles.linkButtonText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsApp1} style={styles.linkButton}>
            <Text style={styles.linkButtonText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmail1} style={styles.emailButton}>
            <Text style={styles.emailButtonText}>Mail</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Person 2 */}
        <View style={styles.contactCard}>
          <Image source={require('../assets/lokeshProfile.jpeg')} style={styles.contactImage} />
          <Text style={styles.contactName}>Lokesh A</Text>
          <TouchableOpacity onPress={handleLinkedIn2} style={styles.linkButton}>
            <Text style={styles.linkButtonText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsApp2} style={styles.linkButton}>
            <Text style={styles.linkButtonText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmail2} style={styles.emailButton}>
            <Text style={styles.emailButtonText}>Mail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MediaScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'rgba(230, 225, 215, 0.6)', // Semi-transparent background for better text visibility
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    marginVertical: 10,
    width: '90%', // Full width minus padding
  },
  contactImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular image
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linkButton: {
    backgroundColor: '#0077b5', // LinkedIn blue
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  emailButton: {
    backgroundColor: '#25D366', // WhatsApp green
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  spacer: {
    height: 20, // Spacer between the two contact cards
  },
});
