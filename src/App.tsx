import { useEffect, useState } from "react";
import CarouselWrapper from "./carousel/CarouselWrapper";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";

//type format for all non error responses from api
export type StatObjectsArray = {
	stat: string;
	player_name?: string;
	player_img?: string;
	national_flag?: string;
	club_name: string;
	club_badge: string;
	jersey_number?: string;
}[];

export type StatStateStructure = {
	stats: StatObjectsArray;
	loaded: boolean;
};

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

	//states for holding an array of statistic objects returned from api calls
	const [pointsState, setPointsState] = useState<StatStateStructure>({
		stats: [
			{
				stat: "",
				player_name: "",
				player_img: "",
				national_flag: "",
				club_name: "",
				club_badge: "",
				jersey_number: "",
			},
		],
		loaded: false,
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchStats = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					import.meta.env.VITE_BACKEND_URL + statToBeShowed.toLowerCase()
				);
				if (!response.ok) {
					throw error;
				}
				let responseJson = await response.json();
				setPointsState((previousState) => {
					const data = {
						...previousState,
						stats: responseJson,
						loaded: true,
					};
					return data;
				});
				setLoading(false);
			} catch (error) {
				setError(true);
				setLoading(false);
				console.log(error);
			}
		};

		if (statToBeShowed === "Points" && !pointsState.loaded) fetchStats();
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
				statObjectsArray={pointsState.stats}
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
