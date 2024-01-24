import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Focus from './components/Focus';
import Timer from './components/Timer';
import { colors } from './utils/colors';
import { useState } from 'react';

const App = () => {
	const [currentSubject, setCurrentSubject] = useState(null);

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<Focus addSubject={setCurrentSubject} />
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={() => {}}
					clearSubject={() => {}}
				/>
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
	},
});
