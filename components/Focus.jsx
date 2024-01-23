import { StyleSheet, Text, View } from 'react-native';

import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { useState } from 'react';

const Focus = () => {
	const [subject, setSubject] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					label='What would you like to focus on?'
					value={subject}
					onChangeText={(subject) => setSubject(subject)}
				/>
			</View>
		</View>
	);
};

export default Focus;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		flex: 0.5,
		padding: 30,
		justifyContent: 'top',
	},
	text: {
		color: colors.white,
	},
});
