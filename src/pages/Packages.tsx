import { For, createSignal } from "solid-js";

import "./Packages.css";

import Package from "../components/Package";
import SearchBar from "../components/SearchBar";
import Text from "../components/Text";

import data from "../data";

export default function Packages() {
	const [searchValue, setSearchValue] = createSignal("");
	const foundPackages = () => data.packages.filter(p => p.name.toLowerCase().includes(searchValue().toLocaleLowerCase()));

	return (
		<>
			<div class="kernel-packages-header">
				<Text variant="title">
					{searchValue() ? "Search Results" : "Installed Packages"} — {foundPackages().length}
				</Text>
				<SearchBar
					placeholder="Search..."
					value={searchValue()}
					onInput={setSearchValue}
				/>
			</div>
			<div class="kernel-packages">
				<For each={foundPackages()}>
					{p => <Package {...p} />}
				</For>
			</div>
		</>
	);
}
