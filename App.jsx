import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Focus from './components/Focus';
import { Platform } from 'react-native';
import { colors } from './utils/colors';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Focus/>
		</SafeAreaView>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
