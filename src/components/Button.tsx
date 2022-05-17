import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import "../styles/Button.css";

const defaultProps = {};

interface Props {
	[key: string]: any;
}

export default function Button(props: Props) {
	const [merged, rest] = splitProps(mergeProps(defaultProps, props), ["children", "href"]);

	return (
        <Dynamic class="kernel-button" component={merged.href ? "a" : "button"} type="button" {...rest}>
            {merged.children}
        </Dynamic>
	);
}
