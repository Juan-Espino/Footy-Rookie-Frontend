import { useState } from "react";
import DarkMode from "./components/DarkMode";
import NavLinks from "./components/NavLinks";
import HambugerMenu from "./components/HambugerMenu";
import MobileOverlay from "./components/MobileOverlay";

type NavBarProps = {
	setShowModal: (state: boolean) => void;
	setStatToBeShowed: (state: string) => void;
};
const NavBar = ({ setShowModal, setStatToBeShowed }: NavBarProps) => {
	// hamburger menu state
	const [isOpen, setIsOpen] = useState(false);
	// if a nav item is clicked, open modal, set statToShow to target
	const handleLinkClick = (statToBeShowed: string) => {
		setIsOpen(!isOpen);
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
		<nav className="flex justify-around h-16 items-center md:text-lg lg:text-2xl bg-neuromancer  dark:bg-none">
			<div id="hambuger-menu" className="inline md:hidden p-4">
				<HambugerMenu
					isOpen={isOpen}
					onClick={() => setIsOpen(!isOpen)}
					lineProps={{ strokeWidth: 4 }}
				/>
				<MobileOverlay
					isOpen={isOpen}
					navLinksText={navLinksText}
					handleLinkClick={handleLinkClick}
				/>
			</div>

			<div className="py-1.5 px-4 rounded-full bg-shifter shadow-xl  dark:bg-moonlit-asteroid transition-all ease-in-out duration-300 hover:scale-110 cursor-pointer">
				<h1 className="font-marker text-matte-white font-extrabold ">
					Footy<span className="">Rookie</span>
				</h1>
			</div>
			<div className="hidden md:inline">
				<NavLinks
					navLinksText={navLinksText}
					handleLinkClick={handleLinkClick}
				/>
			</div>

			<DarkMode />
		</nav>
	);
};

export default NavBar;
