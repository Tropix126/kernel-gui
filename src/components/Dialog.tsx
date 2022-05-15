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
    children?: any;
}

const defaultProps = {
	open: false
};

export default function Dialog(props: Props) {
	const [merged, rest] = splitProps(mergeProps(props, defaultProps), [
		"open",
		"title",
        "children"
	]);

	const [open, setOpen] = createSignal(merged.open);
	let dialogRef: HTMLDialogElement = null;

	createEffect(() => {
		if (open()) dialogRef.showModal();
	});

	return (
		<dialog
			class="kernel-dialog"
			onClose={() => setOpen(false)}
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
