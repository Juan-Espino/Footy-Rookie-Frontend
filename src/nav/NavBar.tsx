import DarkMode from "./components/DarkMode";

const NavBar = () => {
	return (
		<nav className="flex justify-around h-16 items-center">
			<div className="py-1.5 px-4 rounded-full bg-mastercard dark:bg-moonlit-asteroid">
				<h1 className="font-marker text-matte-white text-2xl font-extrabold">
					Footy<span className="">Rookie</span>
				</h1>
			</div>

			<ul className="font-marker flex justify-center gap-4 text-2xl text-matte-black dark:text-matte-white">
				<li>Points</li>
				<li className="text-teal-400">Goals</li>
				<li>Assist</li>
				<li>Keeper</li>
				<li>Reds</li>
				<li>Defense</li>
			</ul>
			<DarkMode />
		</nav>
	);
};

export default NavBar;
