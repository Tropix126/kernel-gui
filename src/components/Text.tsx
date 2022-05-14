import { Dynamic } from "solid-js/web";
import { mergeProps, splitProps } from "solid-js";

import "../styles/Text.css";

interface Props {
	variant?: "caption" | "title";
	[key: string]: any;
}

const defaultProps = {
	variant: "caption"
};

const defaultTags = {
	caption: "span",
	title: "h1"
};

export default function Text(props: Props) {
	const [local, rest] = splitProps(mergeProps(defaultProps, props), [
		"variant",
		"tag"
	]);

	return (
		<Dynamic
			class={`kernel-${local.variant}`}
			component={local.tag || defaultTags[local.variant]}
			{...rest}
			s
		/>
	);
}
