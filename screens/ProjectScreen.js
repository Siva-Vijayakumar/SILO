// screens/ProjectsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView, ImageBackground } from 'react-native';

// Sample project data (replace with your actual project details)
const projects = [
  {
    id: 1,
    title: 'AI Chatbot',
    imageUrl: require('../assets/ai.png'),
    link: 'https://silo-chatapp-lzgr.onrender.com',
  },
  {
    id: 2,
    title: 'Messaging',
    imageUrl: require('../assets/mess.png'),
    link: 'https://silo-ai-84sv.onrender.com',
  },
  {
    id: 3,
    title: 'Translator',
    imageUrl: require('../assets/tr.jpg'),
    link: 'https://silo-translator.onrender.com',
  },
  {
    id: 4,
    title: 'Photo Editor',
    imageUrl: require('../assets/ph.jpg'),
    link: 'https://photoeditor-silo.onrender.com',
  },
  {
    id: 5,
    title: 'Weather Prediction',
    imageUrl: require('../assets/wea.jpg'),
    link: 'https://weatherapp-silo.onrender.com',
  },
  {
    id: 6,
    title: 'Movie details',
    imageUrl: require('../assets/mov.jpg'),
    link: 'https://moviedetails-silo.onrender.com',
  },
  {
    id: 7,
    title: 'Text to Image',
    imageUrl: require('../assets/movi.jpg'),
    link: 'https://ai-text-to-image-generator-silo.onrender.com',
  },
  {
    id: 8,
    title: 'PhotosLab',
    imageUrl: require('../assets/pp.jpg'),
    link: 'https://text-to-image-silo.onrender.com',
  },
  {
    id: 9,
    title: 'Design Dart',
    imageUrl: require('../assets/dd.jpg'),
    link: 'https://design-dart-a237b.web.app/',
  },
  {
    id: 10,
    title: 'TODO',
    imageUrl: require('../assets/to.jpg'),
    link: 'https://silo-todolist.onrender.com',
  },
  {
    id: 11,
    title: 'Countries Info',
    imageUrl: require('../assets/cc.jpg'),
    link: 'https://silo-country-data.onrender.com',
  },
  {
    id: 12,
    title: 'Movie Search',
    imageUrl: require('../assets/m.jpg'),
    link: 'https://moviedetails-silo.onrender.com',
  },
  {
    id: 13,
    title: 'Pixels Image',
    imageUrl: require('../assets/p.jpg'),
    link: 'https://silo-pexels.onrender.com',
  },
];

const eliteProject = {
  title: 'Elite Project',
  imageUrl: require('../assets/kovai.jpg'),
  link: 'https://kovaijuiceandbakery.in',
};

const ProjectsScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/banner.jpg')} // Background image
      style={styles.background}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.projectsGrid}>
            {projects.map((project) => (
              <TouchableOpacity
                key={project.id}
                style={styles.projectCard}
                onPress={() => Linking.openURL(project.link)}
              >
                <Image source={project.imageUrl} style={styles.projectImage} />
                <Text style={styles.projectTitle}>{project.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.eliteProjectCard}>
            <TouchableOpacity onPress={() => Linking.openURL(eliteProject.link)}>
              <Image source={eliteProject.imageUrl} style={styles.eliteProjectImage} />
              <Text style={styles.eliteProjectTitle}>{eliteProject.title}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(230, 225, 215, 0.6)',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  eliteProjectCard: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  eliteProjectImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  eliteProjectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  projectCard: {
    width: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  projectImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#0077b5', // LinkedIn blue for project titles
  },
});
