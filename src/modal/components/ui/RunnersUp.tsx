import { motion } from "framer-motion";

import { StatObjectsArray } from "../../../hooks/http-hook";
import england from "../../../assets/images/england.webp";
import premier_league_logo from "../../../assets/images/premier_leauge_logo.png";

type RunnersUpProps = {
	statsObjectArray: StatObjectsArray;
};

const runnersUpSectionVariants = {
	hidden: { x: 2000 },
	visible: { x: 0, transition: { type: "spring", mass: 0.3 } },
	exit: { x: 2000, transition: { delay: 0, type: "spring", mass: 0.3 } },
};

const RunnersUp = ({ statsObjectArray }: RunnersUpProps) => {
	return (
		<motion.section
			id="runnersUp-section"
			variants={runnersUpSectionVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			className="w-6/12 rounded-3xl backdrop-blur-xl"
		>
			<ul
				id="runnersUp-stats"
				className="h-full grid md:grid-cols-2 xl:grid-cols-3 justify-items-center items-center"
			>
				{/* Filter out the first element of statsObjectArray
						Map resulting array of statsObjects in desired tsx
				*/}
				{statsObjectArray
					.filter((statsObject, index) => {
						if (index === 0) return false;
						else return true;
					})
					.map((statsObject, index) => (
						// if index is 8 (meaning its the last element) & screen sizes is less than xl make the element span both columns (< xl screen mean only 2 columns)
						<li
							key={index}
							className={`md: size-32 lg:size-40 xl:size-40 2xl:size-44 relative rounded-2xl xl:col-span-1 + ${
								index === 8 ? "col-span-2" : ""
							}`}
							style={{
								background: `linear-gradient(to bottom left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${statsObject.club_badge}) no-repeat`,
								backgroundSize: "150%",
								backgroundPosition: "100% 0%",
							}}
						>
							{/* determine statsObject is a stat of a player or team and
							create tsx accordingly*/}
							{statsObject.player_name ? (
								<p className=" font-marker absolute backdrop-blur-[3px] bottom-0 top-0 left-0 min-h-full min-w-full h-full -rotate-90 self-center xl:text-xl 2xl:text-2xl font-bold text-matte-white text-nowrap">
									{statsObject.player_name}
								</p>
							) : (
								<p className=" font-marker absolute backdrop-blur-[3px]  min-h-full min-w-full h-full flex items-center justify-center text-center lg:text-lg xl:text-2xl font-bold text-matte-white">
									{statsObject.club_name}
								</p>
							)}

							{/* determine statsObject is a stat of a player or team and
							create tsx accordingly*/}
							{statsObject.player_name ? (
								<img
									src={statsObject.player_img}
									alt="runner_up"
									className="absolute md:size-20  lg:size-24 left-[15%] bottom-0"
								/>
							) : (
								<></>
							)}
							{/* determine statsObject is a stat of a player or team and
							create tsx accordingly*/}
							{statsObject.player_name ? (
								<div className="absolute md:h-20 lg:h-24 lg:max-h-24 right-0 bottom-0 flex flex-col md:gap-2 lg:gap-4 justify-end">
									<img
										src={statsObject.national_flag}
										alt="flag"
										className="md:size-6 lg:size-9 rounded-full self-end"
									/>
									<p className="md:text-4xl lg:text-5xl font-bold leading-9 text-matte-white dark:text-teal-300">
										{statsObject.stat}
									</p>
								</div>
							) : (
								<div className="absolute w-full right-0 bottom-0 flex md:gap-2 lg:gap-4 justify-between">
									<img
										src={england}
										alt="flag"
										className="self-end md:size-6 lg:size-9 rounded-full"
									/>
									<p className="self-end md:text-4xl lg:text-5xl font-bold leading-9 text-matte-white dark:text-teal-300">
										{statsObject.stat}
									</p>
								</div>
							)}

							{/* ranking position based on index in statsObjectArray */}
							<p className="absolute top-0 right-0 font-bold text-matte-white">
								{`#${index + 2}`}
							</p>
						</li>
					))}
			</ul>
		</motion.section>
	);
};

export default RunnersUp;
