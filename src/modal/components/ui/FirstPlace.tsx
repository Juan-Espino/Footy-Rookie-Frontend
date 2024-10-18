import { motion } from "framer-motion";
import { StatObjectsArray } from "../../../hooks/http-hook";
import premier_league_logo from "../../../assets/images/premier_leauge_logo.png";
import england from "../../../assets/images/england.webp";

type FirstPlaceProps = {
	statsObject: StatObjectsArray;
	statToBeShowed: string;
};
const firstSectionVariants = {
	hidden: { x: -2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: -2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const FirstPlace = ({ statsObject, statToBeShowed }: FirstPlaceProps) => {
	return (
		<motion.section
			id="first-section"
			variants={firstSectionVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			className="w-6/12 p-6 rounded-3xl  backdrop-blur-xl  flex flex-col items-center justify-center "
		>
			<img
				src={
					statsObject[0].player_img
						? statsObject[0].player_img
						: statsObject[0].club_badge
				}
				alt="first-place"
				className=" pb-4 md:size-72 2xl:size-96 2xl:pb-8"
			/>
			<section
				id="first-place-stats"
				className=" text-matte-black dark:text-matte-white text-center"
			>
				{/* player/team name */}
				<h2
					id="name"
					className="font-marker text-4xl p-4 bg-mastercard dark:bg-moonlit-asteroid rounded-3xl  font-bold text-matte-white mb-4"
				>
					{statsObject[0].player_name
						? statsObject[0].player_name
						: statsObject[0].club_name}
				</h2>
				<div className="p-4 bg-matte-white dark:bg-matte-black rounded-3xl flex flex-col gap-4  justify-center text-3xl">
					<div id="main-stat" className="flex justify-center">
						{statToBeShowed === "Keeper" && (
							<p className="font-nunito font-bold">{"Saves"} : &nbsp; </p>
						)}
						{statToBeShowed === "Defense" && (
							<p className="font-nunito font-bold">
								{"Clean Sheets"} : &nbsp;{" "}
							</p>
						)}
						{statToBeShowed !== "Defense" && statToBeShowed !== "Keeper" && (
							<p className="font-nunito font-bold">
								{statToBeShowed} : &nbsp;{" "}
							</p>
						)}

						<p className=" text-orange-500 dark:text-cyan-300  font-bold">
							{statsObject[0].stat}
						</p>
					</div>
					{/* this section changes alot depending on player or team statistic */}
					<div
						id="club-wrapper"
						className=" text-3xl flex gap-4 items-center relative"
					>
						<p className="font-nunito font-bold">
							{statsObject[0].player_img
								? statsObject[0].club_name
								: "Premier League"}
						</p>
						<div className="w-24 h-10 relative">
							<p
								className="size-10 p-1 text-matte-white absolute right-0 rounded-full
						bg-matte-black-light"
							>
								{statsObject[0].jersey_number
									? statsObject[0].jersey_number
									: "1"}
							</p>
							<img
								src={
									statsObject[0].national_flag
										? statsObject[0].national_flag
										: england
								}
								alt={statsObject[0].player_img ? "player-nation" : "England"}
								className="size-10 absolute right-7 rounded-full p-[.15rem]"
							/>
							<img
								src={
									statsObject[0].player_img
										? statsObject[0].club_badge
										: premier_league_logo
								}
								alt={
									statsObject[0].player_img
										? statsObject[0].club_name
										: "Premier_Leauge_Logo"
								}
								className="size-10 absolute right-14 rounded-full"
							/>
						</div>
					</div>
				</div>
			</section>
		</motion.section>
	);
};

export default FirstPlace;
