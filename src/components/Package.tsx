import { createSignal, mergeProps, Show } from "solid-js";

import Switch from "./Switch";
import TrashIcon from "../icons/Trash";

import "../styles/Package.css";

interface Props {
	name: string;
	enabled: boolean;
	description: string;
	onToggle?: (enabled) => void;
	onDelete?: () => void;
}

const defaultProps = {
	name: "",
	description: "",
	enabled: false
};

export default function Package(props: Props) {
	const merged = mergeProps(defaultProps, props);
	const [enabled, setEnabled] = createSignal(merged.enabled);

	
	const onChange = (value) => {
		setEnabled(value);
		if (typeof props.onToggle === "function") props.onToggle(enabled());
	}

	const onDelete = () => {
		if (typeof props.onDelete === "function") props.onDelete();
	}

	return (
		<div class="kernel-package" classList={{ enabled: enabled() }}>
			<label class="kernel-package-header">
				<h2 class="kernel-package-name">{merged.name}</h2>
				<Switch onChange={onChange} checked={enabled()} />
			</label>
			<Show when={merged.description}>
				<p class="kernel-package-description">{merged.description}</p>
			</Show>
			<div class="kernel-package-footer">
				<button onClick={onDelete} class="kernel-package-button danger">
					<TrashIcon />
					Delete
				</button>
			</div>
		</div>
	);
}
