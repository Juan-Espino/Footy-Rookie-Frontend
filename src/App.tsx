import { useEffect } from "react";
import CarouselWrapper from "./carousel/CarouselWrapper";
import NavBar from "./nav/NavBar";

function App() {
	useEffect(() => {
		if (localStorage.theme === "light") {
			document.documentElement.classList.add("light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		}
	}, []);
	return (
		<main className="">
			<NavBar />
			<div className="bg-prem-purple m-auto my-48 w-[200px] h-[200px] rounded-[50%] scale-x-[3] ">
				<CarouselWrapper />
			</div>
		</main>
	);
}

export default App;
