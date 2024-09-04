import CarouselItem from "./CarouselItem";
import img from "../assets/Images/sample.jfif";

import styles from "./CarouselWrapper.module.css";

const CarouselWrapper = () => {
	return (
		<ul id="carousel" className={`${styles.circle} w-full h-full mx-auto `}>
			{/* todo:map every item [img,delay*arbitray value] */}

			<li className={`${styles.listItem} relative`}>
				<CarouselItem img={img} />
			</li>
			{/* <li className={`${styles.listItem} relative`}>
				<CarouselItem img={img} delay="-animation-delay-10000" />
			</li> */}
			{/* 

			<CarouselItem img={img} delay="-animation-delay-10000" />
			<CarouselItem img={img} delay="-animation-delay-15000" /> */}
		</ul>
	);
};

export default CarouselWrapper;
