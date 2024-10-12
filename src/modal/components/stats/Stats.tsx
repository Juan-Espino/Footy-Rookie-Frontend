import FirstPlace from "../ui/FirstPlace";
import RunnerUp from "../ui/RunnersUp";

type StatsProps = {
	statToBeShowed: string;
	statsObject: {
		player_img?: string;
		name?: string;
		national_flag?: string;
		shirt_number?: string;
		stat: string;
		club: string;
		club_badge: string;
	}[];
};
const Stats = ({ statToBeShowed, statsObject }: StatsProps) => {
	return (
		<div id="first-runnersUp" className="h-full flex gap-4">
			{/* modal is broken into two sections */}
			<FirstPlace statsObject={statsObject} statToBeShowed={statToBeShowed} />
			<RunnerUp statsObject={statsObject} statToBeShowed={statToBeShowed} />
			{/* todo:change modals based on the typeOfStat they are receiving */}
		</div>
	);
};

export default Stats;
