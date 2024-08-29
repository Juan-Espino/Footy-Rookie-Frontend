import CarouselItem from "./CarouselItem";
import img from "../assets/Images/sample.jfif";

import styles from "./CarouselWrapper.module.css";

const CarouselWrapper = () => {
	return (
		<ul id="carousel" className={`${styles.circle} w-full h-full mx-auto`}>
			{/* todo:map every item [img,delay*arbitray value] */}

			<CarouselItem img={img} />
			<CarouselItem img={img} delay="-animation-delay-5000" />

			<CarouselItem img={img} delay="-animation-delay-10000" />
			<CarouselItem img={img} delay="-animation-delay-15000" />
		</ul>
	);
};

export default CarouselWrapper;
