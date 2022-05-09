import { createSignal, mergeProps } from "solid-js";

import SearchIcon from "../icons/Search";

import "../styles/SearchBar.css";

interface Props {
	value: string;
	placeholder?: string;
	onChange: (value: string) => void;
	onSearch: (value: string) => void;
	[key: string]: any;
}

const defaultProps = {
	value: "",
	placeholder: ""
};

export default function SearchBar(props: Props) {
	const merged = mergeProps(defaultProps, props);
	const [value, setValue] = createSignal(merged.value);

	const onChange = (event: Event) => {
		setValue((event.target as HTMLInputElement).value);
		if (typeof merged.onChange === "function") merged.onChange(value());
	}

	const onSearch = () => {
		if (typeof merged.onSearch === "function") merged.onSearch(value());
	}

	return (
		<div class="kernel-search-bar">
			<input
				type="search"
				value={value()}
				placeholder={merged.placeholder}
				onChange={onChange}
				class="kernel-search-bar-input"
			/>
			<button
				class="kernel-search-bar-button"
				onClick={onSearch}
				aria-label="Search"
			>
				<SearchIcon />
			</button>
		</div>
	);
}
