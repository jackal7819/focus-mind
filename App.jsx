import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Focus from './components/Focus';
import { Platform } from 'react-native';
import { colors } from './utils/colors';
import { useState } from 'react';

const App = () => {
	const [currentSubject, setCurrentSubject] = useState(null);

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<Focus addSubject={setCurrentSubject} />
			) : (
				<View>
					<Text style={styles.text}>
						I am going to render the timer for {currentSubject}
					</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	text: {
		color: colors.white,
	}
});
