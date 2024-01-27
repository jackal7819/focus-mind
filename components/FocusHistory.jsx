import { FlatList, StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

import { colors } from '../utils/colors';

const FocusHistory = ({ history }) => {
	if (!history || !history.length)
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					WE HAVEN'T FOCUSED ON ANYTHING YET
				</Text>
			</View>
		);
	0;
	const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>THINGS WE'VE FOCUSED ON:</Text>
			<FlatList data={history} renderItem={renderItem} />
		</View>
	);
};

export default FocusHistory;

const styles = StyleSheet.create({
	container: {
		padding: spacing.xxl,
		flex: 1,
	},
	item: {
		fontSize: fontSizes.md,
		color: colors.white,
		paddingTop: spacing.sm,
	},
	title: {
		color: colors.white,
		fontSize: fontSizes.md,
	},
});
