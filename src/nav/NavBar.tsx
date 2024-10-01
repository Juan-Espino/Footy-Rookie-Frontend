import DarkMode from "./components/DarkMode";

type NavBarProps = {
	setShowModal: (state: boolean) => void;
};
const NavBar = ({ setShowModal }: NavBarProps) => {
	// if a nav item is clicked, open modal
	const handleLinkClick = (statToBeShowed: string) => {
		setShowModal(true);
	};

	const navLinksText = [
		"Points",
		"Goals",
		"Assist",
		"Keeper",
		"Reds",
		"Defense",
	];

	return (
		<nav className="flex justify-around h-16 items-center">
			<div className="py-1.5 px-4 rounded-full bg-mastercard dark:bg-moonlit-asteroid transition-all ease-in-out duration-300 hover:scale-110 cursor-pointer">
				<h1 className="font-marker text-matte-white text-2xl font-extrabold ">
					Footy<span className="">Rookie</span>
				</h1>
			</div>

			<ul className="font-marker flex justify-center gap-4 text-2xl text-matte-black dark:text-matte-white">
				{navLinksText.map((item) => (
					<li
						onClick={() => handleLinkClick(item)}
						className="px-1 py-2 cursor-pointer transition-all ease-in-out duration-100 hover:scale-110 active:scale-100 active:text-orange-500 active:dark:text-cyan-300 "
					>
						{item}
					</li>
				))}
			</ul>
			<DarkMode />
		</nav>
	);
};

export default NavBar;
