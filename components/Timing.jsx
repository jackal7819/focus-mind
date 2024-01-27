import { StyleSheet, View } from 'react-native';

import RoundedButton from './RoundedButton';
import { spacing } from '../utils/sizes';

const Timing = ({ onChangeTime }) => {
	return (
		<>
			<View style={styles.timingButton}>
				<RoundedButton
					size={spacing.xxxv}
					title='100'
					onPress={() => onChangeTime(10)}
				/>
			</View>
			<View style={styles.timingButton}>
				<RoundedButton
					size={spacing.xxxv}
					title='15'
					onPress={() => onChangeTime(15)}
				/>
			</View>
			<View style={styles.timingButton}>
				<RoundedButton
					size={spacing.xxxv}
					title='20'
					onPress={() => onChangeTime(20)}
				/>
			</View>
		</>
	);
};

export default Timing;

const styles = StyleSheet.create({
	timingButton: {
		flex: 1,
		alignItems: 'center',
	},
});
