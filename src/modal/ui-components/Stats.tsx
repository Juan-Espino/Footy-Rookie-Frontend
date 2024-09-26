import { delay, motion } from "framer-motion";

const firstSectionVariants = {
	hidden: { x: -2000 },
	visible: { x: 0 },
	exit: { x: -2000, transition: { delay: 0 } },
};

const runnersUpSectionVariants = {
	hidden: { x: 2000 },
	visible: { x: 0 },
	exit: { x: 2000, transition: { delay: 0 } },
};

const Stats = () => {
	const statistic = "Goals";
	const STATSOBJECT = [
		{
			img: "https://renderz.app/image-cdn/player_23_239085_UT24_f697b87039e6f2bb/normal",
			ranking: "1",
			name: "Erling Haaland",
			stat: "10",
			team: "Manchester City",
		},
	];
	return (
		<div id="first-runnersUp-wrapper" className="h-full flex ">
			<motion.section
				id="first-section"
				variants={firstSectionVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ delay: 1 }}
				className="w-6/12 rounded-3xl bg-white dark:bg-[#1f1c1f]  flex flex-col items-center justify-around"
			>
				<img src={STATSOBJECT[0].img} alt="first" className="size-96" />
				<div
					id="first-place-stats"
					className=" text-matte-black dark:text-matte-white text-center"
				>
					<h2 className="text-4xl p-4 bg-mastercard dark:bg-moonlit-asteroid rounded-3xl  font-bold text-matte-white mb-4">
						{STATSOBJECT[0].name}
					</h2>
					<div className="flex gap-4 mb-2 justify-center text-3xl">
						<p>{statistic} :</p>
						<p className=" text-orange-500 dark:text-cyan-300  font-bold">
							{STATSOBJECT[0].stat}
						</p>
					</div>
					<p className=" text-3xl">{STATSOBJECT[0].team}</p>
				</div>
			</motion.section>
			<motion.section
				id="runnersUp-section"
				variants={runnersUpSectionVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ delay: 1 }}
				className="w-6/12 rounded-3xl bg-white"
			>
				hello
			</motion.section>
		</div>
	);
};

export default Stats;
