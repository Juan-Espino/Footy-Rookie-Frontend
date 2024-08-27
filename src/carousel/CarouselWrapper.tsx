import CarouselItem from "./CarouselItem";
import img from "../assets/Images/sample.jfif";

const CarouselWrapper = () => {
	return (
		<div
			id="carousel"
			className="h-screen w-screen flex justify-center align-middle animate-around-the-world"
		>
			<CarouselItem img={img} />
		</div>
	);
};

export default CarouselWrapper;
