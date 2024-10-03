import { useEffect, useState } from "react";
import FirstPlace from "./FirstPlace";
import RunnerUp from "./RunnerUp";

type StatsProps = {
	statToBeShowed: string;
};
const Stats = ({ statToBeShowed }: StatsProps) => {
	const [typeOfStat, setTypeOfStat] = useState("");

	useEffect(() => {
		//handler to determine which stats will be passed into children components
		const statsHandler = () => {
			if (statToBeShowed === "Defense" || statToBeShowed === "Points") {
				console.log(statToBeShowed);
				setTypeOfStat("Team");
			} else {
				setTypeOfStat("Player");
			}
		};

		statsHandler();
	}, [statToBeShowed]);

	useEffect(() => {
		console.log("type of stat : " + typeOfStat);
	}, [typeOfStat]);

	//returns the appropriate stat object based on typeOfStat
	//for testing todo:delete this
	const STATOBJECTHANDLER = () => {
		if (typeOfStat == "Team") return STATOBJECTTEAMPOINTS;
		else return STATSOBJECTGOALS;
	};
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
	const STATSOBJECTGOALS = [
		{
			player_img:
				"https://s3p.sofifa.net/9384b967dcf6a40a3fbfa564d585433230baf9a6.png",
			name: "Erling Haaland",
			stat: "10",
			club: "Manchester City",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png",
			national_flag:
				"https://cdn.britannica.com/01/3101-050-1BB27B69/Flag-Norway.jpg",
			shirt_number: "9",
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
		<div id="first-runnersUp" className="h-full flex gap-4">
			{/* modal is broken into two sections */}
			<FirstPlace statsObject={STATOBJECTHANDLER()} typeOfStat={typeOfStat} />
			<RunnerUp statsObject={STATOBJECTHANDLER()} typeOfStat={typeOfStat} />
			{/* todo:change modals based on the typeOfStat they are receiving */}
		</div>
	);
};

export default Stats;
