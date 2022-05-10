import { createSignal, splitProps, mergeProps } from "solid-js";

import SearchIcon from "../icons/Search";
import CloseIcon from "../icons/Close";

import "../styles/SearchBar.css";

interface Props {
	value: string;
	placeholder?: string;
	onChange?: (value: string) => void;
	[key: string]: any;
}

const defaultProps = {
	value: ""
};

export default function SearchBar(props: Props) {
	const [local, rest] = splitProps(mergeProps(defaultProps, props), ["value", "placeholder", "onChange"]);

	const [value, setValue] = createSignal(local.value);

	const handleInput = (value) => {
		setValue(value);
		if (typeof local.onChange === "function") local.onChange(value);
	}

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
                classList={{ interactive: value().length > 0 }}
                onClick={() => handleInput("")}
			>
                <CloseIcon class="kernel-search-bar-clear-icon" />
                <SearchIcon class="kernel-search-bar-search-icon" />
			</button>
		</div>
	);
}
