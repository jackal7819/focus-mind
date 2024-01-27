import { StyleSheet, Text, Vibration, View } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

import { CountDown } from './CountDown';
import { ProgressBar } from 'react-native-paper';
import RoundedButton from './RoundedButton';
import Timing from './Timing';
import { colors } from '../utils/colors';
import { useState } from 'react';

const Timer = ({ focusSubject, clearSubject }) => {
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);
	const [minutes, setMinutes] = useState(0.1);

	const ONE_SECOND_IN_MS = 1000;

	const PATTERN = [
		1 * ONE_SECOND_IN_MS,
		1 * ONE_SECOND_IN_MS,
		1 * ONE_SECOND_IN_MS,
	];

	const onEnd = (reset) => {
		Vibration.vibrate(PATTERN);
		setIsStarted(false);
		setProgress(1);
		reset();
	}

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<CountDown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={setProgress}
					onEnd={onEnd}
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

			<View style={styles.timingWrapper}>
				<Timing onChangeTime={setMinutes} />
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
			<View style={styles.clearSubjectWrapper}>
				<RoundedButton
					size={spacing.xxxv}
					title='DELETE'
					onPress={clearSubject}
				/>
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
	clearSubjectWrapper: {
		flex: 0.1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: spacing.xxl,
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timingWrapper: {
		flex: 0.1,
		flexDirection: 'row',
		paddingTop: spacing.xxl,
		paddingBottom: spacing.xl,
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
