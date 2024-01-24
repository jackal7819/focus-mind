import { StyleSheet, View } from 'react-native';

import { CountDown } from './CountDown';
import RoundedButton from './RoundedButton';
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
});
