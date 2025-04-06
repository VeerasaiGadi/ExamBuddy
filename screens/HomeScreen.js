import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const subjects = [
    { id: '1', name: 'Mathematics' },
    { id: '2', name: 'Data Science' },
    // Add more subjects as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, VARUN</Text>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('SubjectDetails', { subject: item.name })}>
            <Text style={styles.subject}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  subject: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default HomeScreen;