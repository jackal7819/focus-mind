import { MD3Colors, ProgressBar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

import { CountDown } from './CountDown';
import RoundedButton from './RoundedButton';
import { colors } from '../utils/colors';
import { useState } from 'react';

const Timer = ({ focusSubject }) => {
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<CountDown
					isPaused={!isStarted}
					onProgress={setProgress}
					onEnd={() => {}}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>
			<View style={styles.progressContainer}>
				<ProgressBar
					progress={progress}
					color={colors.lightBlue}
					style={styles.progress}
				/>
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
	textContainer: {
		paddingTop: spacing.xxl,
	},
	progressContainer: {
		paddingTop: spacing.sm,
	},
	progress: {
		height: spacing.sm,
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
