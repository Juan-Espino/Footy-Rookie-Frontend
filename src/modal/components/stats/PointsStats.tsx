import FirstPlace from "../ui/FirstPlace";
import RunnerUp from "../ui/RunnersUp";
const STATOBJECTTEAMPOINTS = [
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
];
const PointsStats = () => {
	let pointsStatsObject = STATOBJECTTEAMPOINTS;
	let statToBeShowed = "Points";
	return (
		<div id="first-runnersUp" className="h-full flex gap-4">
			{/* modal is broken into two sections */}
			<FirstPlace
				statsObject={pointsStatsObject}
				statToBeShowed={statToBeShowed}
			/>
			<RunnerUp
				statsObject={pointsStatsObject}
				statToBeShowed={statToBeShowed}
			/>
			{/* todo:change modals based on the typeOfStat they are receiving */}
		</div>
	);
};

export default PointsStats;
