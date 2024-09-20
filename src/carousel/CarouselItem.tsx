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
		<section id="icon-block" className={`${delayTiming} scale-x-[.33]`}>
			<img src={img} className="" />
			<div id="reflection" className="relative ">
				<img src={img} className="-scale-y-[1] opacity-20" />
				<div
					id="overlay"
					className="absolute top-0 left-0 h-[12.5rem] w-[12.5rem] bg-gradient-to-t from-matte-white dark:from-matte-black from-20%	"
				></div>
			</div>
		</section>
	);
};

export default CarouselItem;
