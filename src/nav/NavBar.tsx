import DarkMode from "./components/DarkMode";

const NavBar = () => {
	return (
		<nav className="flex relative h-16">
			<ul className="text-3xl flex w-full justify-center e">
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
				<li>F</li>
			</ul>
			<DarkMode />
		</nav>
	);
};

export default NavBar;
