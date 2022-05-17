import {
	Show,
	createSignal,
	createEffect,
	mergeProps,
	splitProps
} from "solid-js";

import Text from "./Text";

import "../styles/Dialog.css";

interface Props {
	title?: string;
	open?: boolean;
	closable?: boolean;
    children?: any;
}

const defaultProps = {
	open: false,
	closable: false
};

export default function Dialog(props: Props) {
	const [merged, rest] = splitProps(mergeProps(defaultProps, props), [
		"open",
		"title",
		"closable",
        "children"
	]);
	let dialogRef: HTMLDialogElement = null;

	createEffect(() => {
		if (merged.open) {
			dialogRef?.showModal();
		} else {
			dialogRef?.close();
		}
	});

	return (
		<dialog
			class="kernel-dialog"
			ref={dialogRef}
			{...rest}
		>
			<Show when={merged.title}>
				<Text class="kernel-dialog-title" variant="title">
					{merged.title}
				</Text>
			</Show>
			<div class="kernel-dialog-body"></div>
			{merged.children}
		</dialog>
	);
}
