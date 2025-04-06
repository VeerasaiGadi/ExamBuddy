import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import GoogleLogo from './GoogleLogo'; // Import the Google logo component

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Let's you in</Text>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Google Sign In')}>
        <View style={styles.iconContainer}>
          <GoogleLogo /> {/* Google Logo */}
        </View>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Apple Sign In')}>
        <View style={styles.iconContainerApple}>
          <Ionicons name="logo-apple" size={26} color="#000" /> {/* Apple Icon */}
        </View>
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.dividerText}>(Or)</Text>

      {/* Email Login Button */}
      <TouchableOpacity style={styles.emailLoginButton} onPress={() => console.log('Email Sign In')}>
        <Text style={styles.emailButtonText}>Sign In with Your Account</Text>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signUpText}>
        Don't have an Account?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>SIGN UP</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background
    borderRadius: 25, // Rounded corners
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },

  iconContainer: {
    width: 36, // Fixed width for both icons
    height: 36, // Fixed height for both icons
    marginRight: 10, // Space between icon and text
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerApple: {
    width: 36, // Fixed width for both icons
    height: 36, // Fixed height for both icons
    marginRight: 10, // Space between icon and text
    justifyContent: 'center',
    alignItems: 'center',
  },


  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  dividerText: {
    fontSize: 14,
    color: '#999',
    marginTop: 20,
    marginBottom: 20,
  },

  emailLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Blue color
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 20,
  },

  emailButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },

  signUpText: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },

  signUpLink: {
    textDecorationLine: 'underline',
    color: '#007AFF', // Blue color
  },
});

export default LoginScreen;