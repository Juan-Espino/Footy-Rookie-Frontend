import { motion } from "framer-motion";
import england from "../../../assets/images/england.webp";
import premier_league_logo from "../../../assets/images/premier_leauge_logo.png";

type RunnersUpProps = {
	statsObject: {
		player_img?: string;
		player_name?: string;
		stat: string;
		club_name: string;
		club_badge: string;
		national_flag?: string;
		jersey_number?: string;
	}[];
};

const runnersUpSectionVariants = {
	hidden: { x: 2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: 2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const RunnersUp = ({ statsObject }: RunnersUpProps) => {
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
				className="h-full grid grid-cols-3 2xl:grid-cols-3 p-6 gap-4 text-matte-black dark:text-matte-white"
			>
				{statsObject
					.filter((ranking) => ranking !== statsObject[0])
					.map((object, index) => (
						<li
							key={index}
							className={
								"bg-prem-pink rounded-3xl flex flex-col justify-between w-full pt-2 justify-self-center "
							}
						>
							<div
								id="ranking-nationalflag"
								className="flex flex-col justify-between px-4"
							>
								<div className="flex justify-between">
									<p className="font-bold 2xl:text-lg">#{index + 2}</p>
									<img
										src={object.player_name ? object.national_flag : england}
										alt={object.player_name ? object.club_name : "england"}
										className="size-5 2xl:size-7 2xl:p-1 rounded-full"
									/>
									<img
										src={
											object.player_name
												? object.club_badge
												: premier_league_logo
										}
										alt={object.player_name ? object.club_name : "prem"}
										className="size-5 2xl:size-8 2xl:p-1 rounded-full"
									/>
								</div>
							</div>

							<div
								id="img_stat_name"
								className="flex flex-col justify-around h-5/6 xl:h-4/5 px-2 text-matte-white  bg-matte-black  rounded-t-3xl rounded-b-[1.25rem]"
							>
								<div className="flex justify-around flex-col gap-1 p-1 xl:flex-row xl:gap-0">
									<img
										src={
											object.player_name ? object.player_img : object.club_badge
										}
										alt={
											object.player_name ? object.player_img : object.club_name
										}
										className="m-2 self-center md:size-10 xl:size-12"
									/>

									<p className="m-1 self-center text-orange-500 dark:text-cyan-300 md:text-2xl lg:text-4xl  font-bold">
										{object.stat}
									</p>
								</div>

								<p className="self-center text-center text-sm font-bold pb-1">
									{object.player_name ? object.player_name : object.club_name}
								</p>
							</div>
						</li>
					))}
			</ul>
		</motion.section>
	);
};

export default RunnersUp;
