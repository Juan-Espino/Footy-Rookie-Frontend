import { useEffect, useState } from "react";
import CarouselWrapper from "./carousel/CarouselWrapper";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";

function App() {
	//state for showing the modal
	const [showModal, setShowModal] = useState(false);
	//state for the statistic to be shown on modal
	const [statToBeShowed, setStatToBeShowed] = useState("");
	useEffect(() => {
		if (localStorage.theme === "light") {
			document.documentElement.classList.add("light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		}
	}, []);
	return (
		<main>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				statToBeShowed={statToBeShowed}
			/>
			<NavBar
				setShowModal={setShowModal}
				setStatToBeShowed={setStatToBeShowed}
			/>
			<section id="hero" className="max-w-screen-2xl mx-auto my-[30vh]">
				<div className="m-auto w-[200px] h-[200px] rounded-[50%] scale-x-[3] ">
					<CarouselWrapper />
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default App;
