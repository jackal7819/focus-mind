import { StyleSheet, View } from 'react-native';

import RoundedButton from './RoundedButton';
import { TextInput } from 'react-native-paper';
import { spacing } from '../utils/sizes';
import { useState } from 'react';

const Focus = ({ addSubject }) => {
	const [subject, setSubject] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					label='What would you like to focus on?'
					value={subject}
					onChangeText={(subject) => setSubject(subject)}
				/>
				<RoundedButton
					title='+'
					size={spacing.xxl}
					onPress={() => addSubject(subject)}
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
		padding: spacing.xl,
		gap: spacing.md,
		flexDirection: 'row',
		alignItems: 'center',
	},
	textInput: {
		flex: 1,
	},
});
