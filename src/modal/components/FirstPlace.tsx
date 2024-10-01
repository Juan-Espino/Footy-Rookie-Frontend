import { motion } from "framer-motion";

type FirstPlaceProps = {
	statsObject: {
		player_img: string;
		name: string;
		stat: string;
		club: string;
		club_badge: string;
	}[];
};
const firstSectionVariants = {
	hidden: { x: -2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: -2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const FirstPlace = ({ statsObject }: FirstPlaceProps) => {
	const statistic = "Goals";

	return (
		<motion.section
			id="first-section"
			variants={firstSectionVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			// transition={{ delay: 1 }}
			className="w-6/12 p-6 rounded-3xl  bg-white dark:bg-matte-black-light  flex flex-col items-center justify-center"
		>
			<img
				src={statsObject[0].player_img}
				alt={statsObject[0].name}
				className=" pb-4 lg:size-48 2xl:size-96 2xl:pb-8"
			/>
			<section
				id="first-place-stats"
				className=" text-matte-black dark:text-matte-white text-center"
			>
				<h2
					id="name"
					className="text-4xl p-4 bg-mastercard dark:bg-moonlit-asteroid rounded-3xl  font-bold text-matte-white mb-4"
				>
					{statsObject[0].name}
				</h2>
				<div className="p-4 bg-gray-200 dark:bg-matte-black rounded-3xl flex flex-col gap-4  justify-center text-3xl">
					<div id="main-stat" className="flex justify-center">
						<p>{statistic} : &nbsp;</p>
						<p className=" text-orange-500 dark:text-cyan-300  font-bold">
							{statsObject[0].stat}
						</p>
					</div>
					<div id="club-wrapper" className=" text-3xl flex gap-4 items-center ">
						<p>{statsObject[0].club}</p>
						<img src={statsObject[0].club_badge} alt="" className="size-10" />
					</div>
				</div>
			</section>
		</motion.section>
	);
};

export default FirstPlace;
