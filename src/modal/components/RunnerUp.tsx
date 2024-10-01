import { motion } from "framer-motion";

type RunnersUpProps = {
	statsObject: {
		player_img: string;
		name: string;
		stat: string;
		club: string;
		club_badge: string;
	}[];
};

const runnersUpSectionVariants = {
	hidden: { x: 2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: 2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const RunnerUp = ({ statsObject }: RunnersUpProps) => {
	return (
		<motion.section
			id="runnersUp-section"
			variants={runnersUpSectionVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			transition={{ delay: 1 }}
			className="w-6/12 rounded-3xl bg-white dark:bg-matte-black-light"
		>
			<ul
				id="runnersUp-stats"
				className="h-full grid grid-cols-3 2xl:grid-cols-2 p-6 gap-4 text-matte-black dark:text-matte-white"
			>
				{statsObject
					.filter((ranking) => ranking !== statsObject[0])
					.map((player, index) => (
						<li
							className={
								"bg-gray-200 dark:bg-matte-black rounded-3xl flex flex-col justify-between w-full px-4 p-2 justify-self-center " +
								(index === 8
									? "2xl:grid-cols-subgrid 2xl:col-span-2 2xl:w-3/6 2xl:justify-self-center"
									: "")
							}
						>
							<div
								id="ranking-badge-name"
								className="flex flex-col justify-between"
							>
								<div className="flex justify-between">
									<p className="2xl:text-lg">#{index + 2}</p>
									<p className="text-lg font-bold mx-auto text-center hidden 2xl:inline">
										{player.name}
									</p>
									<img
										src={player.club_badge}
										alt={player.club}
										className="size-6 2xl:size-8"
									/>
								</div>
							</div>
							<p className="text-lg font-bold mx-auto text-center 2xl:hidden">
								{player.name}
							</p>
							<div
								id="player_badge_stat"
								className="flex items-baseline justify-between"
							>
								<img
									src={player.player_img}
									alt={player.name}
									className="md:size-9 2xl:size-11"
								/>

								<p className=" text-orange-500 dark:text-cyan-300 text-3xl  font-bold">
									{player.stat}
								</p>
							</div>
						</li>
					))}
			</ul>
		</motion.section>
	);
};

export default RunnerUp;
