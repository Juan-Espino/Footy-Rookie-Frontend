import type { StatObjectsArray } from "../../App";
import FirstPlace from "./ui/FirstPlace";
import RunnerUp from "./ui/RunnersUp";

type StatsProps = {
	statToBeShowed: string;
	statObjectsArray: StatObjectsArray;
};
const Stats = ({ statToBeShowed, statObjectsArray }: StatsProps) => {
	return (
		<div id="first-runnersUp" className="h-full flex gap-4">
			{/* modal is broken into two sections */}
			<FirstPlace
				statsObject={statObjectsArray}
				statToBeShowed={statToBeShowed}
			/>
			<RunnerUp statsObject={statObjectsArray} />
		</div>
	);
};

export default Stats;
