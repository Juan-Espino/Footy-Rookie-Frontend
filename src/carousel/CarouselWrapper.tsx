import CarouselItem from "./CarouselItem";
import img from "../assets/Images/sample.jfif";

import styles from "./CarouselWrapper.module.css";

const CarouselWrapper = () => {
	return (
		<ul
			id="carousel"
			className={`${styles.rotate} w-full h-full mx-auto relative `}
		>
			{/* todo:map every item [img,delay*arbitray value] */}

			<li
				className={`${styles.counterrotate} absolute block h-[25rem] w-[12.5rem] left-0 top-0`}
			>
				<CarouselItem img={img} />
			</li>
			{/* <li
				className={`${styles.counterrotate} absolute block h-[25rem] w-[12.5rem] bottom-0 right-0 `}
			>
				<CarouselItem img={img} />
			</li>
			<li
				className={`${styles.counterrotate} absolute block h-[25rem] w-[12.5rem] top-[-4.75rem] right-[6rem] `}
			>
				<CarouselItem img={img} />
			</li> */}
			{/* 
			<li className={`${styles.counterrotate} relative  `}>
				<CarouselItem img={img} delay="-animation-delay-10000" />
			</li>
			<li className={`${styles.counterrotate} relative  `}>
				<CarouselItem img={img} delay="-animation-delay-15000" />
			</li> */}

			{/* <CarouselItem img={img} delay="-animation-delay-10000" />
			<CarouselItem img={img} delay="-animation-delay-15000" /> */}
		</ul>
	);
};

export default CarouselWrapper;
