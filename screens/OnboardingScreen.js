import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const OnboardingScreen = ({ navigation }) => {
  // States for slide management
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides =  [
    {
      title: 'Get Study Materials',
      subtitle: 'Get Study Materials and Notes for Your Subjects',
    },
    {
      title: 'Get Important Questions',
      subtitle: 'Get Comprehensive and Curated Question Banks for Your Exams!',
    },
    {
      title: 'Get Previous Year Papers',
      subtitle: 'Get Previous Year Papers for Your Subjects!',
      
    },
  ];

  // Function to handle next slide
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Function to handle skip
  const handleSkip = () => {
    setCurrentSlide(slides.length - 1); // Go to the last slide
  };

  // Function to navigate to the Login Screen
  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigate to the Login Screen
  };

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>{slides[currentSlide].title}</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>{slides[currentSlide].subtitle}</Text>
      </View>

      {/* Pagination Dots and Next Button */}
      <View style={styles.footerContainer}>
        {/* Pagination Dots */}
        <View style={styles.paginationDots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlide === index ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>

        {/* Next Button */}
        <View style={styles.buttonContainer}>
          {currentSlide === slides.length - 1 && (
            // Get Started button with text for the last slide
            <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
              <Text style={styles.getStartedButtonText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          )}
          {currentSlide < slides.length - 1 && (
            // Arrow-only button for other slides
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50, // Adjust based on status bar height
    paddingBottom: 50,
  },

  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },

  skipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 30,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  paginationDots: {
    flexDirection: 'row',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: '#007AFF', // Blue color
  },

  buttonContainer: {
    alignItems: 'flex-end',
  },

  getStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Blue color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  getStartedButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },

  nextButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF', // Blue color
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;