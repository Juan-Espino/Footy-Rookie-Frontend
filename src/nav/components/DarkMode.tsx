const DarkMode = () => {
	const selectedTheme = localStorage.theme;
	const toggleTheme = () => {
		if (localStorage.theme === "dark") {
			document.documentElement.classList.replace("dark", "light");
			localStorage.theme = "light";
		} else {
			document.documentElement.classList.replace("light", "dark");
			localStorage.theme = "dark";
		}
	};
	return (
		<div className="">
			<label className="inline-block h-8 w-16 relative ">
				<input
					type="checkbox"
					onChange={toggleTheme}
					defaultChecked={selectedTheme === "light" ? true : false}
					className="hidden peer"
				/>
				<div
					id="slider"
					className="bg-dark-theme absolute cursor-pointer
				bottom-0 top-0 right-0 left-0 rounded-full transition-all ease-in-out duration-300
				hover:scale-125 peer-checked:bg-light-theme peer-checked:before:translate-x-8 peer-checked:before:rotate-180
				before:absolute before:bg-soccer-ball before:h-6 before:w-6
				before:bottom-1 before:left-1 before:rounded-full before:duration-500 "
				></div>
			</label>
		</div>
	);
};

export default DarkMode;
