import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useBitcoinData from '../hooks/useBitcoinData';

const HomeScreen = () => {
  const { loading, data } = useBitcoinData();

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <View>
              <Text>{item.description}</Text>
              <Text>{item.rate}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
