import { Dynamic } from "solid-js/web";
import { mergeProps, splitProps } from "solid-js";

import "../styles/Text.css";

enum Tags {
	caption = "span",
	title = "h1"
}

interface Props {
	variant: "caption" | "title";
	[key: string]: any;
}

const defaultProps = {
	variant: "caption"
};

export default function Text(props: Props) {
	const [local, rest] = splitProps(mergeProps(defaultProps, props), ["variant"]);

	return <Dynamic class={`kernel-${local.variant}`} component={Tags[local.variant]} {...rest} />;
}
