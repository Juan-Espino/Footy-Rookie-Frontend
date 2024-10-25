import CarouselItem from "./CarouselItem";
import premierLeagueTrophy from "../assets/Icons/premierLeagueTrophy.png";

import goldenBoot2 from "../assets/Icons/goldenBootRealistic.png";
import goldenGlove from "../assets/Icons/goldenGlove.png";
import assistTrophy from "../assets/Icons/assistTrophy.png";
import yellowCard from "../assets/Icons/yellowCard.png";
import redCard from "../assets/Icons/redCard.png";

import styles from "./CarouselWrapper.module.css";

type CarouseProps = {
	setStatToBeShowed: (stat: string) => void;
	setShowModal: (state: boolean) => void;
};
const CarouselWrapper = ({ setStatToBeShowed, setShowModal }: CarouseProps) => {
	return (
		<ul
			id="carousel"
			className={`${styles.rotate} w-full h-full mx-auto relative `}
		>
			<li
				className={`${styles.counterrotate} absolute block h-[25rem] w-[12.5rem] top-0 right-0`}
			>
				<CarouselItem
					setShowModal={setShowModal}
					stat={"Points"}
					setStatToBeShowed={setStatToBeShowed}
					img={premierLeagueTrophy}
				/>
			</li>
			<li
				className={`${styles.goldenBootOffset} absolute block h-[25rem] w-[12.5rem] bottom-0 left-0 `}
			>
				<CarouselItem
					setShowModal={setShowModal}
					stat={"Goals"}
					setStatToBeShowed={setStatToBeShowed}
					img={goldenBoot2}
				/>
			</li>
			<li
				className={`${styles.goldenGloveOffset} absolute block h-[25rem] w-[12.5rem] top-[-2.5rem] right-[4.5rem] `}
			>
				<CarouselItem
					setShowModal={setShowModal}
					stat={"Clean Sheets"}
					setStatToBeShowed={setStatToBeShowed}
					img={goldenGlove}
				/>
			</li>
			<li
				className={`${styles.assistOffset} absolute block h-[25rem] w-[12.5rem] top-[-2.5rem] left-[5.5rem] `}
			>
				<CarouselItem
					setShowModal={setShowModal}
					stat={"Assist"}
					setStatToBeShowed={setStatToBeShowed}
					img={assistTrophy}
				/>
			</li>

			<li
				className={`${styles.yellowOffset} absolute block h-[25rem] w-[12.5rem] bottom-[-2.5rem] left-[4.5rem]`}
			>
				<CarouselItem
					setShowModal={setShowModal}
					stat={"Yellows"}
					setStatToBeShowed={setStatToBeShowed}
					img={yellowCard}
				/>
			</li>
			<li
				className={`${styles.redOffset} absolute block h-[25rem] w-[12.5rem] bottom-[-3.5rem] right-[5.5rem]`}
			>
				<CarouselItem
					setShowModal={setShowModal}
					stat={"Reds"}
					setStatToBeShowed={setStatToBeShowed}
					img={redCard}
				/>
			</li>
		</ul>
	);
};

export default CarouselWrapper;
