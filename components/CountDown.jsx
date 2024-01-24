import { React, useEffect, useRef } from 'react';

import { fontSizes } from '../utils/sizes';

const minuteToMilliseconds = (min) => min * 10000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const CountDown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
	const interval = useRef(null);

	const [milliseconds, setMilliseconds] = useState(null);

	const countDown = () => {
		setMilliseconds((time) => {
			if (time === 0) {
				clearInterval(interval.current);
				return time;
			}
			const timeLeft = time - 1000;
			return timeLeft;
		});
	};

	useEffect(() => {
		setMilliseconds(minuteToMilliseconds(minutes));
	}, [minutes]);

	useEffect(() => {
		onProgress(milliseconds / minuteToMilliseconds(minutes));
	}, [milliseconds]);

	useEffect(() => {
		if (isPaused) {
			if (interval.current) clearInterval(interval.current);
			return;
		}

		interval.current = setInterval(countDown, 1000);

		return () => clearInterval(interval.current);
	}, isPaused);

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
        fontSize: fontSizes.xxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: '#5e84e24c',
    }
})
