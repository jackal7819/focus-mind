import { StyleSheet, Text, View } from 'react-native';

import RoundedButton from './RoundedButton';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

const Focus = () => {
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
                <RoundedButton title='+' size={50}/>
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
		padding: 30,
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
	},
    textInput: {
        flex: 1,
    },
});
