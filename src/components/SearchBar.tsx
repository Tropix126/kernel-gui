import { createSignal, splitProps, mergeProps } from "solid-js";

import SearchIcon from "../icons/Search";
import CloseIcon from "../icons/Close";

import "../styles/SearchBar.css";

interface Props {
	value: string;
	placeholder?: string;
	disabled: boolean;
	onChange?: (value: string) => void;
	[key: string]: any;
}

const defaultProps = {
	value: "",
	disabled: false
};

export default function SearchBar(props: Props) {
	const [local, rest] = splitProps(mergeProps(defaultProps, props), [
		"value",
		"disabled",
		"placeholder",
		"onChange"
	]);

	const [value, setValue] = createSignal(local.value);

	const handleInput = value => {
		setValue(value);
		if (typeof local.onChange === "function") local.onChange(value);
	};

	return (
		<div class="kernel-search-bar">
			<input
				type="search"
				class="kernel-search-bar-input"
				value={value()}
				placeholder={local.placeholder}
				onInput={event => handleInput((event.target as HTMLInputElement).value)}
				{...rest}
			/>
			<button
				class="kernel-search-bar-button"
				disabled={!value().length || local.disabled}
				title={value().length > 0 ? "Clear search value" : undefined}
				onClick={() => handleInput("")}
			>
				<CloseIcon class="kernel-search-bar-clear-icon" />
				<SearchIcon class="kernel-search-bar-search-icon" />
			</button>
		</div>
	);
}
