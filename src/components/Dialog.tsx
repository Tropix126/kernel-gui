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
	open?: boolean;
	closable?: boolean;
	title?: any;
    children?: any;
	footer?: any;
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
        "children",
		"footer"
	]);
	let dialogRef: HTMLDialogElement = null;

	const handleClose = (event: CloseEvent) => {
		if (merged.closable) event.preventDefault();
	}

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
			onClose={handleClose}
			{...rest}
		>
			<Show when={merged.title}>
				<Text class="kernel-dialog-title" variant="title">
					{merged.title}
				</Text>
			</Show>
			<div class="kernel-dialog-body">
				{merged.children}
			</div>
			<footer class="kernel-dialog-footer">
				{merged.footer}
			</footer>
		</dialog>
	);
}
