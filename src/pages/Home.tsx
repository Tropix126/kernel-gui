import LinkCard from "../components/LinkCard";

import Book from "../icons/Book";
import GitHub from "../icons/GitHub";
import Comment from "../icons/Comment";

import "./Home.css";

export default function Home(props) {
	return (
		<>
			<div class="kernel-home-links">
				<LinkCard
					href="https://github.com/kernel-mod/electron"
                    target="_blank"
                    rel="noreferrer noopener"
					icon={<Book />}
					title="Documentation"
					description="Get started with Kernel."
				/>
				<LinkCard
					href="https://github.com/kernel-mod/electron"
                    target="_blank"
                    rel="noreferrer noopener"
					icon={<GitHub />}
					title="GitHub"
					description="Found a bug?"
				/>
				<LinkCard
					href="https://github.com/kernel-mod/electron"
                    target="_blank"
                    rel="noreferrer noopener"
					icon={<Comment />}
					title="Discord Server"
					description="Need help?"
				/>
			</div>
		</>
	);
}
