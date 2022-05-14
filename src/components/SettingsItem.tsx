import { createSignal, mergeProps } from "solid-js";

import Switch from "./Switch";
import Text from "./Text";

import "../styles/Package.css";

interface Props {
	name: string;
	onToggle?: (enabled) => void;
}

const defaultProps = {
	name: "",
	description: "",
	value: undefined
};

export default function Package(props: Props) {
	const merged = mergeProps(defaultProps, props);

	return (
		<div class="kernel-settings-item">
			<label class="kernel-settings-item-header">
				<Text variant="title" class="kernel-settings-item-name">
					{merged.name}
				</Text>
				<Switch />
			</label>
			<Text variant="caption" class="kernel-settings-item-description">
				{merged.description}
			</Text>
		</div>
	);
}
