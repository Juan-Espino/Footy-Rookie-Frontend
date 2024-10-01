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
			player_img:
				"https://s3p.sofifa.net/9384b967dcf6a40a3fbfa564d585433230baf9a6.png",
			name: "Erling Haaland",
			stat: "10",
			club: "Manchester City",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
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
				className="w-6/12 p-6 rounded-3xl  bg-white dark:bg-matte-black-light  flex flex-col items-center justify-center"
			>
				<img
					src={STATSOBJECT[0].player_img}
					alt={STATSOBJECT[0].name}
					className=" pb-4 lg:size-40 2xl:size-96 2xl:pb-8"
				/>
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
					<div className="p-4 bg-gray-200 dark:bg-matte-black rounded-3xl flex flex-col gap-4  justify-center text-3xl">
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
			{/*  */}
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
					{STATSOBJECT.filter((ranking) => ranking !== STATSOBJECT[0]).map(
						(player, index) => (
							<li
								className={
									"bg-gray-200 dark:bg-matte-black rounded-3xl flex flex-col justify-between w-full px-4 py-2 justify-self-center " +
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
						)
					)}
				</ul>
			</motion.section>
		</div>
	);
};

export default Stats;
