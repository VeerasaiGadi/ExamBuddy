import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [nickName, setNickName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill Your Profile</Text>
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        placeholder="Nick Name"
        value={nickName}
        onChangeText={setNickName}
        style={styles.input}
      />
      <TextInput
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.label}>Gender:</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: 5,
  },
});

export default SignUpScreen;