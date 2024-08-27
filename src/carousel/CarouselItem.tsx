type CarouselItemProps = {
	img: string;
};

const CarouselItem = ({ img }: CarouselItemProps) => {
	return (
		<section id="icon-block" className="self-center size-64">
			<img src={img} className="" />
			<div id="reflection" className="relative ">
				<img src={img} className="-scale-y-[1] opacity-20  " />
				<div
					id="overlay"
					className="absolute top-0 left-0 size-64 bg-gradient-to-t from-white from-20%	"
				></div>
			</div>
		</section>
	);
};

export default CarouselItem;
