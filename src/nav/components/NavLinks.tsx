type NavLinksProps = {
	navLinksText: string[];
	handleLinkClick: (item: string) => void;
};
const NavLinks = ({ navLinksText, handleLinkClick }: NavLinksProps) => {
	return (
		<ul
			className={`flex flex-col items-center h-full my-auto md:flex-row justify-center gap-4 font-marker  text-matte-white`}
		>
			{navLinksText.map((item, key) => (
				<li
					onClick={() => handleLinkClick(item)}
					className={`px-1 py-2 cursor-pointer transition-all ease-in-out duration-100 hover:scale-110 active:scale-100 hover:text-black hover:dark:text-cyan-300 ${
						item == "Yellows"
							? "hover:text-yellow-300 hover:dark:text-yellow-300"
							: ""
					} ${
						item == "Reds" ? "hover:text-red-500 hover:dark:text-red-500" : ""
					}`}
					key={key}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
