import { useEffect, useState } from "react";

import { useHttpClient } from "./hooks/http-hook";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";
import CarouselWrapper from "./carousel/CarouselWrapper";

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

	//All states returned by custom api fetching hook useHttpClient()
	const {
		loading,
		error,
		clearError,
		sendRequest,
		pointsState,
		goalsState,
		assistState,
		cleanSheetsState,
		redsState,
		yellowsState,
	} = useHttpClient();

	//everytime statToBeShowed is alter (navbar link  or carousel item clicked)
	//trigger sendRequest(params)
	useEffect(() => {
		if (statToBeShowed)
			sendRequest(
				statToBeShowed,
				import.meta.env.VITE_BACKEND_URL + statToBeShowed.toLowerCase()
			);
	}, [statToBeShowed]);

	return (
		<main className="md:overflow-hidden">
			<NavBar
				setShowModal={setShowModal}
				setStatToBeShowed={setStatToBeShowed}
			/>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				statToBeShowed={statToBeShowed}
				//deterimine which stats to send to modal depending on current
				//statToBeShowed
				statObjectsArray={() => {
					if (statToBeShowed === "Points") return pointsState.stats;
					else if (statToBeShowed === "Goals") return goalsState.stats;
					else if (statToBeShowed === "Assist") return assistState.stats;
					else if (statToBeShowed === "CleanSheets")
						return cleanSheetsState.stats;
					else if (statToBeShowed === "Reds") return redsState.stats;
					else if (statToBeShowed === "Yellows") return yellowsState.stats;
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
				clearError={clearError}
			/>

			{/* section for all Carousel related ui */}
			<section
				id="hero"
				className="max-w-screen-2xl mx-auto my-[50vh]  md:my-[35vh] xl:my-[30vh]"
			>
				<div className="m-auto w-[200] h-[200] md:w-[150px] md:h-[150px]  lg:w-[200px] lg:h-[200px] rounded-[50%] scale-x-[3] ">
					<CarouselWrapper
						setStatToBeShowed={setStatToBeShowed}
						setShowModal={setShowModal}
					/>
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default App;
