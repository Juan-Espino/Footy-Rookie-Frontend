import DarkMode from "./components/DarkMode";

type NavBarProps = {
	setShowModal: (state: boolean) => void;
	setStatToBeShowed: (state: string) => void;
};
const NavBar = ({ setShowModal, setStatToBeShowed }: NavBarProps) => {
	// if a nav item is clicked, open modal, set statToShow to target
	const handleLinkClick = (statToBeShowed: string) => {
		setShowModal(true);
		//this will set the value 'Clean Sheets' to 'CleanSheets' which the api will need
		setStatToBeShowed(statToBeShowed.split(" ").join(""));
	};

	const navLinksText = [
		"Points",
		"Goals",
		"Assist",
		"Clean Sheets",
		"Yellows",
		"Reds",
	];

	return (
		<nav className="flex justify-around h-16 items-center md:text-lg lg:text-2xl">
			<div className="py-1.5 px-4 rounded-full bg-mastercard dark:bg-moonlit-asteroid transition-all ease-in-out duration-300 hover:scale-110 cursor-pointer">
				<h1 className="font-marker text-matte-white font-extrabold ">
					Footy<span className="">Rookie</span>
				</h1>
			</div>

			<ul className="font-marker flex justify-center gap-4 text-matte-white">
				{navLinksText.map((item, key) => (
					<li
						onClick={() => handleLinkClick(item)}
						className={`px-1 py-2 cursor-pointer transition-all ease-in-out duration-100 hover:scale-110 active:scale-100 hover:text-black hover:dark:text-cyan-300 ${
							item == "Yellows"
								? "hover:text-yellow-300 hover:dark:text-yellow-300"
								: ""
						} ${item == "Reds" ? "hover:dark:text-red-500" : ""}`}
						key={key}
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
