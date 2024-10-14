import { useEffect, useState } from "react";
import React from "react";

import FirstPlace from "../ui/FirstPlace";
import RunnerUp from "../ui/RunnersUp";

type PointsStats = {
	stat: "";
	player_name?: "";
	player_img?: "";
	national_flag?: "";
	club_name: "";
	club_badge: "";
	jersey_number?: "";
}[];

const PointsStats = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [pointsStatsArray, setPointsStatsArray] = useState<PointsStats>();
	let statToBeShowed = "Points";
	useEffect(() => {
		const fetchStats = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					import.meta.env.VITE_BACKEND_URL + statToBeShowed.toLowerCase()
				);
				if (!response.ok) {
					throw error;
				}
				setPointsStatsArray(await response.json());
				console.log("response array :", pointsStatsArray);

				setLoading(false);
			} catch (error) {
				setError(true);
				setLoading(false);
				console.log(error);
			}
		};
		fetchStats();
		console.log(pointsStatsArray);
	}, []);

	return (
		<div id="first-runnersUp" className="h-full flex gap-4">
			{loading && !error && <h1 className="text-matte-white">Loading</h1>}
			{error && !loading && <h1 className="text-matte-white">Error</h1>}
			{pointsStatsArray && !loading && !error && (
				<React.Fragment>
					<FirstPlace
						statsObject={pointsStatsArray}
						statToBeShowed={statToBeShowed}
					/>
					<RunnerUp
						statsObject={pointsStatsArray}
						statToBeShowed={statToBeShowed}
					/>
				</React.Fragment>
			)}
		</div>
	);
};

export default PointsStats;
