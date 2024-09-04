import styles from "./CarouselWrapper.module.css";

type CarouselItemProps = {
	img: string;
	delay?:
		| "animation-delay-none"
		| "-animation-delay-15000"
		| "-animation-delay-10000"
		| "-animation-delay-5000";
};

const CarouselItem = ({
	img,
	delay = "animation-delay-none",
}: CarouselItemProps) => {
	const delayTiming = delay;
	return (
		// <section
		// 	id="icon-block"
		// 	className={` absolute left-[calc(50%-8rem)]  w-64 animate-around-the-world ${delayTiming}`}
		// >
		// 	<img src={img} className="" />
		// 	<div id="reflection" className="relative ">
		// 		<img src={img} className="-scale-y-[1] opacity-20  " />
		// 		<div
		// 			id="overlay"
		// 			className="absolute top-0 left-0 size-64 bg-gradient-to-t from-white from-20%	"
		// 		></div>
		// 	</div>
		// </section>
		<section
			id="icon-block"
			// className={`${styles.circleItem}  animate-around-the-world ${delayTiming}`}

			className={`${styles.circleItem} absolute left-[calc(50%-6.25rem)] h-[25rem] w-[12.5rem] top-[6.5rem] `}
		>
			<img src={img} className="" />
			<div id="reflection" className="relative ">
				<img src={img} className="-scale-y-[1] opacity-20" />
				<div
					id="overlay"
					className="absolute top-0 left-0 h-[12.5rem] w-[12.5rem] bg-gradient-to-t from-white from-20%	"
				></div>
			</div>
		</section>
	);
};

export default CarouselItem;
