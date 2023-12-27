import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function exerciseDetails() {
    const item = useLocalSearchParams();
	console.log('Received Item: ', item);
  return (
    <View>
      <Text>exerciseDetails</Text>
    </View>
  )
}