import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Add this line

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
)