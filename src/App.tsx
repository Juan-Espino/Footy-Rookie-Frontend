import CarouselWrapper from "./carousel/CarouselWrapper";

function App() {
	//handles toggling between light/dark
	const handleToggle = () => {};
	return (
		<main className="">
			<div className="bg-prem-purple m-auto my-48 w-[200px] h-[200px] rounded-[50%] scale-x-[3] ">
				<CarouselWrapper />
			</div>
		</main>
	);
}

export default App;
