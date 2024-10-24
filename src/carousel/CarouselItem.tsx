type CarouselItemProps = {
	img: string;
	stat: string;
	setStatToBeShowed: (stat: string) => void;
	setShowModal: (state: boolean) => void;
};

const CarouselItem = ({
	img,
	stat,
	setStatToBeShowed,
	setShowModal,
}: CarouselItemProps) => {
	//handler for every CarouselItem clicked in order for modal to be showed
	const handleLinkClick = (statToBeShowed: string) => {
		setShowModal(true);
		//this will set the value 'Clean Sheets' to 'CleanSheets' which the api will need
		setStatToBeShowed(statToBeShowed.split(" ").join(""));
	};

	return (
		<section
			id="icon-block"
			className={`scale-x-[.33] cursor-pointer`}
			onClick={() => handleLinkClick(stat)}
		>
			<img src={img} className=" h-[12.5rem] w-[12.5rem]" />
			<div id="reflection" className="relative overflow-hidden">
				<img
					src={img}
					className="-scale-y-[1] h-[12.5rem] w-[12.5rem] opacity-20"
				/>
				<div
					id="overlay"
					className="absolute top-0 left-0 h-[12.5rem] w-[12.5rem] bg-gradient-to-t from-prem-pink dark:from-matte-black from-20%	"
				></div>
			</div>
		</section>
	);
};

export default CarouselItem;
