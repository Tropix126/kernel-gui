import SettingsItem from "../components/SettingsItem";
import Text from "../components/Text";

export default function Home(props) {
	return (
		<>
			<Text variant="title">General</Text>
			<SettingsItem
				type="switch"
				name="Item 1"
				description="Description"
			/>
		</>
	);
}
