import type { StatObjectsArray } from "../../hooks/http-hook";
import FirstPlace from "./ui/FirstPlace";
import RunnerUp from "./ui/RunnersUp";

type StatsProps = {
	statToBeShowed: string;
	statObjectsArray: StatObjectsArray;
};
const Stats = ({ statToBeShowed, statObjectsArray }: StatsProps) => {
	return (
		<div id="first-runnersUp" className="h-full flex ">
			{/* modal is broken into two sections */}
			<FirstPlace
				statsObject={statObjectsArray}
				statToBeShowed={statToBeShowed}
			/>
			<RunnerUp statsObjectArray={statObjectsArray} />
		</div>
	);
};

export default Stats;
