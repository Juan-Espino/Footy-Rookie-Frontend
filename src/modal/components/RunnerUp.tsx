import { motion } from "framer-motion";
import england from "../../assets/images/england.webp";

type RunnersUpProps = {
	statsObject: {
		player_img?: string;
		name?: string;
		stat: string;
		club: string;
		club_badge: string;
	}[];
	statToBeShowed: string;
};

const runnersUpSectionVariants = {
	hidden: { x: 2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: 2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const RunnerUp = ({ statsObject, statToBeShowed }: RunnersUpProps) => {
	return (
		<motion.section
			id="runnersUp-section"
			variants={runnersUpSectionVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			className="w-6/12 rounded-3xl bg-matte-white dark:bg-matte-black-light"
		>
			<ul
				id="runnersUp-stats"
				className="h-full grid grid-cols-3 2xl:grid-cols-2 p-6 gap-4 text-matte-black dark:text-matte-white"
			>
				{statsObject
					.filter((ranking) => ranking !== statsObject[0])
					.map((object, index) => (
						<li
							key={index}
							className={
								"bg-prem-pink rounded-3xl flex flex-col justify-between w-full px-4 p-2 justify-self-center " +
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
										{object.name ? object.name : object.club}
									</p>
									<img
										src={object.name ? object.club_badge : england}
										alt={object.name ? object.club : "england"}
										className="size-6 2xl:size-8 rounded-full"
									/>
								</div>
							</div>
							<p className="text-lg font-bold mx-auto text-center 2xl:hidden">
								{object.name ? object.name : object.club}
							</p>
							<div
								id="object_badge_stat"
								className="flex items-baseline justify-between  bg-matte-white dark:bg-matte-black  rounded-full"
							>
								<img
									src={object.name ? object.player_img : object.club_badge}
									alt={object.name ? object.player_img : object.club}
									className="m-2 xl:m-4  self-center md:size-7 2xl:size-11"
								/>

								<p className="m-2 xl:m-4  self-center text-orange-500 dark:text-cyan-300 md:text-xl lg:text-2xl  font-bold">
									{object.stat}
								</p>
							</div>
						</li>
					))}
			</ul>
		</motion.section>
	);
};

export default RunnerUp;
