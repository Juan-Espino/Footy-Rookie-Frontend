import { useEffect, useState } from "react";
import CarouselWrapper from "./carousel/CarouselWrapper";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";

function App() {
	const [showModal, setShowModal] = useState(false);
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
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<NavBar setShowModal={setShowModal} />
			<section id="hero" className="max-w-screen-2xl mx-auto">
				<div className="m-auto my-48 w-[200px] h-[200px] rounded-[50%] scale-x-[3] ">
					<CarouselWrapper />
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default App;
