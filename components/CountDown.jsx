import { StyleSheet, Text } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { useEffect, useRef, useState } from 'react';

import { colors } from '../utils/colors';

const minutesToMilliseconds = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const CountDown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
	const interval = useRef(null);

	const [milliseconds, setMilliseconds] = useState(null);

	const reset = () => setMilliseconds(minutesToMilliseconds(minutes));

	const countDown = () => {
		setMilliseconds((time) => {
			if (time === 0) {
				clearInterval(interval.current);
				onEnd(reset);
				return time;
			}
			const timeLeft = time - 1000;
			return timeLeft;
		});
	};

	useEffect(() => {
		setMilliseconds(minutesToMilliseconds(minutes));
	}, [minutes]);

	useEffect(() => {
		onProgress(milliseconds / minutesToMilliseconds(minutes));
	}, [milliseconds]);

	useEffect(() => {
		if (isPaused) {
			if (interval.current) clearInterval(interval.current);
			return;
		}

		interval.current = setInterval(countDown, 1000);

		return () => clearInterval(interval.current);
	}, [isPaused]);

	const minute = Math.floor(milliseconds / 1000 / 60) % 60;
	const seconds = Math.floor(milliseconds / 1000) % 60;

	return (
		<Text style={styles.text}>
			{formatTime(minute)}:{formatTime(seconds)}
		</Text>
	);
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: '#5e84e24c',
        borderRadius: spacing.sm,
    }
})
