import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';

export default function Exercises() {
	const router = useRouter ();
	const [exercises, setExercises] = useState (demoExercises);
	const item = useLocalSearchParams();
	console.log('Received Item: ', item);

	useEffect(() => {
		// if (item) getExercises(item.name);
	}, [item]);

	const getExercises = async (bodypart) => {
		let data = await fetchExercisesByBodypart(bodypart);
		// console.log('Received Data:', data);
		setExercises(data);
	}
  return (
	<ScrollView>
		<StatusBar style='light' />
		
	</ScrollView>
  )
}