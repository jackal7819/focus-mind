import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Focus from './components/Focus';
import FocusHistory from './components/FocusHistory';
import Timer from './components/Timer';
import { colors } from './utils/colors';
import { useState } from 'react';

const App = () => {
	const [currentSubject, setCurrentSubject] = useState(null);
	const [history, setHistory] = useState([]);

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<>
					<Focus addSubject={setCurrentSubject} />
					<FocusHistory history={history} />
				</>
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={(subject) => setHistory([...history, subject])}
					clearSubject={() => setCurrentSubject(null)}
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
