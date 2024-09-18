import DarkMode from "./components/DarkMode";

const NavBar = () => {
	return (
		<nav className="flex justify-around h-16 items-center">
			<div className="py-1.5 px-4 rounded-full bg-mastercard dark:bg-moonlit-asteroid transition-all ease-in-out duration-300 hover:scale-110 cursor-pointer">
				<h1 className="font-marker text-matte-white text-2xl font-extrabold ">
					Footy<span className="">Rookie</span>
				</h1>
			</div>

			<ul className="font-marker flex justify-center gap-4 text-2xl text-matte-black dark:text-matte-white">
				<li>Points</li>
				<li className="dark:text-cyan-300 text-orange-500">Goals</li>
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
