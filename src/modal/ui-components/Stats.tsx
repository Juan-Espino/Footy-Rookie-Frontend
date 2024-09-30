import { delay, motion } from "framer-motion";

const firstSectionVariants = {
	hidden: { x: -2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: -2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const runnersUpSectionVariants = {
	hidden: { x: 2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: 2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const Stats = () => {
	const statistic = "Goals";
	const STATSOBJECT = [
		{
			img: "https://renderz.app/image-cdn/player_23_239085_UT24_f697b87039e6f2bb/normal",
			name: "Erling Haaland",
			stat: "10",
			club: "Manchester City",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			img: "https://www.thesun.co.uk/wp-content/uploads/2024/06/crop-28448719.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
	];
	return (
		<div id="first-runnersUp-wrapper" className="h-full flex gap-4">
			<motion.section
				id="first-section"
				variants={firstSectionVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				// transition={{ delay: 1 }}
				className="w-6/12 rounded-3xl bg-white dark:bg-matte-black-light  flex flex-col items-center justify-around"
			>
				<img src={STATSOBJECT[0].img} alt="first" className="size-96" />
				<section
					id="first-place-stats"
					className=" text-matte-black dark:text-matte-white text-center"
				>
					<h2
						id="name"
						className="text-4xl p-4 bg-mastercard dark:bg-moonlit-asteroid rounded-3xl  font-bold text-matte-white mb-4"
					>
						{STATSOBJECT[0].name}
					</h2>
					<div className="p-4 bg-gray-200 dark:bg-matte-black rounded-3xl flex flex-col gap-4 mb-2 justify-center text-3xl">
						<div id="main-stat" className="flex justify-center">
							<p>{statistic} : &nbsp;</p>
							<p className=" text-orange-500 dark:text-cyan-300  font-bold">
								{STATSOBJECT[0].stat}
							</p>
						</div>
						<div
							id="club-wrapper"
							className=" text-3xl flex gap-4 items-center "
						>
							<p>{STATSOBJECT[0].club}</p>
							<img src={STATSOBJECT[0].club_badge} alt="" className="size-10" />
						</div>
					</div>
				</section>
			</motion.section>
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
					className="grid grid-cols-2 gap-4 text-matte-black dark:text-matte-white"
				>
					{STATSOBJECT.filter((ranking) => ranking !== STATSOBJECT[0]).map(
						(player, index) => (
							<li
								className={
									"bg-gray-200 dark:bg-matte-black rounded-3xl flex gap-4 p-4 justify-self-center " +
									(index === 8
										? "grid-cols-subgrid col-span-2  justify-self-center"
										: "")
								}
							>
								<p>
									{index + 2} : {player.name}
								</p>
								<img
									src={player.club_badge}
									alt={player.club}
									className="size-5"
								/>
							</li>
						)
					)}
				</ul>
			</motion.section>
		</div>
	);
};

export default Stats;
