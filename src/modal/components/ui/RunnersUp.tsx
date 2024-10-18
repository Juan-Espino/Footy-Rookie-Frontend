import { motion } from "framer-motion";

import { StatObjectsArray } from "../../../hooks/http-hook";
import england from "../../../assets/images/england.webp";
import premier_league_logo from "../../../assets/images/premier_leauge_logo.png";

type RunnersUpProps = {
	statsObject: StatObjectsArray;
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
			className="w-6/12 rounded-3xl backdrop-blur-xl"
		>
			{/* className="h-full grid grid-cols-3 2xl:grid-cols-3 p-6 gap-4 text-matte-black dark:text-matte-white" */}
			<ul
				id="runnersUp-stats"
				className="grid grid-cols-3 justify-items-center"
			>
				{/* style={{
				background: `linear-gradient(to bottom left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${premier_league_logo}) 50% 17%`,
			}} */}
				<li
					className="size-44 relative rounded-2xl"
					style={{
						background: `linear-gradient(to bottom left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${statsObject[3].club_badge}) no-repeat`,
						backgroundSize: "150%",
						backgroundPosition: "50% 0%",
					}}
				>
					<p className=" font-marker absolute backdrop-blur-[2px] bottom-0 top-0 left-0 min-h-full min-w-full h-full -rotate-90 self-center text-2xl font-bold text-matte-white">
						{"Cole Palmer"}
					</p>
					<img
						src={statsObject[1].player_img}
						alt="runner_up"
						className="absolute size-24 left-[15%] bottom-0"
					/>
					{/* <img src={statsObject[1].club_badge} alt="club_badge" /> */}
				</li>
				<li className="size-44 relative rounded-2xl bg-deepSpace ">
					<p className=" absolute bottom-0 top-0 left-0 min-h-full min-w-full h-full -rotate-90 self-center text-2xl font-bold text-matte-white">
						{"Cole Palmer"}
					</p>
					<img
						src={statsObject[3].player_img}
						alt="runner_up"
						className="absolute size-24 right-0 bottom-0"
					/>
				</li>
				<li className="size-44 relative rounded-2xl ">
					<p className=" absolute bottom-0 top-0 left-0 min-h-full min-w-full h-full -rotate-90 self-center text-2xl font-bold text-matte-white">
						{"Cole Palmer"}
					</p>
					<img
						src={statsObject[4].player_img}
						alt="runner_up"
						className="absolute size-24 right-0 bottom-0"
					/>
				</li>
			</ul>
		</motion.section>
	);
};

export default RunnersUp;
