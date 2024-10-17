import { useEffect, useState } from "react";

import { useHttpClient } from "./hooks/http-hook";
import CarouselWrapper from "./carousel/CarouselWrapper";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";

function App() {
	//state for showing the modal
	const [showModal, setShowModal] = useState(false);
	//state for the statistic to be shown on modal
	const [statToBeShowed, setStatToBeShowed] = useState("");

	//handler for setting theme to dark by default or
	//for setting theme to the clients previously choosen theme
	useEffect(() => {
		if (localStorage.theme === "light") {
			document.documentElement.classList.add("light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		}
	}, []);

	const { loading, error, clearError, sendRequest, pointsState, goalsState } =
		useHttpClient();

	useEffect(() => {
		if (statToBeShowed)
			sendRequest(
				statToBeShowed,
				import.meta.env.VITE_BACKEND_URL + statToBeShowed.toLowerCase()
			);
	}, [statToBeShowed]);

	return (
		<main>
			<NavBar
				setShowModal={setShowModal}
				setStatToBeShowed={setStatToBeShowed}
			/>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				statToBeShowed={statToBeShowed}
				statObjectsArray={() => {
					if (statToBeShowed === "Points") return pointsState.stats;
					else if (statToBeShowed === "Goals") return goalsState.stats;
					else
						return [
							{
								stat: "",
								player_name: "",
								player_img: "",
								national_flag: "",
								club_name: "",
								club_badge: "",
								jersey_number: "",
							},
						];
				}}
				loading={loading}
				error={error}
			/>

			{/* section for all Carousel related ui */}
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
