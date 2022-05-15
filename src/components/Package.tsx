import { createSignal, mergeProps, Show } from "solid-js";

import Switch from "./Switch";
import Text from "./Text";

import TrashIcon from "../icons/Trash";
import SettingsIcon from "../icons/Settings";

import "../styles/Package.css";

interface Props {
	name: string;
	enabled?: boolean;
	description?: string;
	authors?: string[];
	onToggle?: (enabled) => void;
	onDelete?: () => void;
}

const defaultProps = {
	description: "",
	enabled: false
};

export default function Package(props: Props) {
	const merged = mergeProps(defaultProps, props);
	const [enabled, setEnabled] = createSignal(merged.enabled);

	const onChange = value => {
		setEnabled(value);
		if (typeof props.onToggle === "function") props.onToggle(enabled());
	};

	const onDelete = () => {
		if (typeof props.onDelete === "function") props.onDelete();
	};

	return (
		<div class="kernel-package" classList={{ enabled: enabled() }}>
			<label class="kernel-package-header">
				<Text tag="h2" variant="title" class="kernel-package-name">
					{merged.name}
					<Show when={merged.authors}>
						<span class="kernel-package-authors">
							{" "}
							by{" "}
							{new (Intl as any).ListFormat("en", {
								style: "long",
								type: "conjunction"
							}).format(merged.authors)}
						</span>
					</Show>
				</Text>
				<Switch onChange={onChange} checked={enabled()} />
			</label>
			<Show when={merged.description}>
				<Text variant="caption" class="kernel-package-description">{merged.description}</Text>
			</Show>
			<div class="kernel-package-footer">
				<button onClick={onDelete} class="kernel-package-button">
					<SettingsIcon />
				</button>
				<button onClick={onDelete} class="kernel-package-button danger">
					<TrashIcon />
					Delete
				</button>
			</div>
		</div>
	);
}
