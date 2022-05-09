import { For, createSignal } from "solid-js";

import "./Packages.css";

import Package from "../components/Package";
import SearchBar from "../components/SearchBar";
import Text from "../components/Text";

import data from "../data";

export default function Packages() {
	const [searchValue, setSearchValue] = createSignal("");

	return (
		<>
			<div class="kernel-packages-header">
				<Text variant="title">Installed Packages — {data.packages.length}</Text>
				<SearchBar value={searchValue()} onChange={setSearchValue} />
			</div>
			<div class="kernel-packages">
				<For each={data.packages}>{p => <Package {...p} />}</For>
			</div>
		</>
	);
}
