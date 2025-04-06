import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0); // For smooth transition

  // Function to navigate to the next screen
  const handleNavigation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Smooth transition duration (1 second)
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Onboarding'); // Navigate after animation completes
    });
  };

  useEffect(() => {
    // Automatically navigate after 3 seconds
    const timer = setTimeout(() => {
      handleNavigation();
    }, 3000);

    // Clear the timer if the component unmounts or user taps early
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim }, // Apply fade animation
      ]}
    >
      {/* Entire screen is tappable */}
      <TouchableOpacity
        style={styles.fullScreen}
        activeOpacity={1} // Prevent dimming effect
        onPress={handleNavigation} // Navigate on tap
      >
        <Text style={styles.title}>Exam Buddy</Text>
        <Text style={styles.subtitle}>Your One-Stop Solution</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 8,
  },
});

export default WelcomeScreen;