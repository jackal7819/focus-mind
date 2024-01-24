import { StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

import { CountDown } from './CountDown';
import RoundedButton from './RoundedButton';
import { colors } from '../utils/colors';
import { useState } from 'react';

const Timer = ({ focusSubject }) => {
	const [isStarted, setIsStarted] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<CountDown
					isPaused={!isStarted}
					onProgress={() => {}}
					onEnd={() => {}}
				/>
				<View style={styles.textWrapper}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>
			<View style={styles.buttonWrapper}>
				{!isStarted && (
					<RoundedButton
						title='START'
						onPress={() => setIsStarted(true)}
					/>
				)}
				{isStarted && (
					<RoundedButton
						title='PAUSE'
						onPress={() => setIsStarted(false)}
					/>
				)}
			</View>
		</View>
	);
};

export default Timer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	countdown: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textWrapper: {
		paddingTop: spacing.xxl,
	},
	title: {
		color: colors.white,
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: fontSizes.lg,
	},
	task: {
		color: colors.white,
		textAlign: 'center',
		fontSize: fontSizes.lg,
	},
});
